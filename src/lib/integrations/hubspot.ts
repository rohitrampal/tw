/**
 * HubSpot CRM Integration
 * Syncs leads and calculator results to HubSpot
 */

interface HubSpotContact {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  website?: string;
  [key: string]: any;
}

interface HubSpotDeal {
  dealName: string;
  pipeline: string;
  dealStage: string;
  amount?: number;
  closeDate?: string;
  associatedContactEmail?: string;
  [key: string]: any;
}

const HUBSPOT_API_BASE = 'https://api.hubapi.com';

/**
 * Create or update a contact in HubSpot
 */
export async function upsertHubSpotContact(contact: HubSpotContact): Promise<string | null> {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) {
    console.warn('HubSpot API key not configured');
    return null;
  }

  try {
    // First, try to find existing contact by email
    const searchResponse = await fetch(
      `${HUBSPOT_API_BASE}/crm/v3/objects/contacts/search`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: contact.email,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!searchResponse.ok) {
      throw new Error(`HubSpot search failed: ${searchResponse.statusText}`);
    }

    const searchData = await searchResponse.json();
    const existingContact = searchData.results?.[0];

    if (existingContact) {
      // Update existing contact
      const updateResponse = await fetch(
        `${HUBSPOT_API_BASE}/crm/v3/objects/contacts/${existingContact.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            properties: contact,
          }),
        }
      );

      if (!updateResponse.ok) {
        throw new Error(`HubSpot update failed: ${updateResponse.statusText}`);
      }

      return existingContact.id;
    } else {
      // Create new contact
      const createResponse = await fetch(
        `${HUBSPOT_API_BASE}/crm/v3/objects/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            properties: contact,
          }),
        }
      );

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        throw new Error(`HubSpot create failed: ${errorData.message || createResponse.statusText}`);
      }

      const createData = await createResponse.json();
      return createData.id;
    }
  } catch (error) {
    console.error('HubSpot contact sync error:', error);
    throw error;
  }
}

/**
 * Create a deal in HubSpot
 */
export async function createHubSpotDeal(deal: HubSpotDeal): Promise<string | null> {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) {
    console.warn('HubSpot API key not configured');
    return null;
  }

  try {
    const response = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/deals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        properties: deal,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HubSpot deal creation failed: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data.id;
  } catch (error) {
    console.error('HubSpot deal creation error:', error);
    throw error;
  }
}

/**
 * Associate a contact with a deal
 */
export async function associateContactWithDeal(
  contactId: string,
  dealId: string
): Promise<void> {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) {
    return;
  }

  try {
    await fetch(
      `${HUBSPOT_API_BASE}/crm/v4/objects/contacts/${contactId}/associations/deals/${dealId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          associationCategory: 'HUBSPOT_DEFINED',
          associationTypeId: 3, // Contact to Deal association
        }),
      }
    );
  } catch (error) {
    console.error('HubSpot association error:', error);
  }
}

