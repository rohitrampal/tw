/**
 * Google Analytics 4 Event Tracking
 * Centralized event tracking for all user interactions
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom event
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, {
    ...eventParams,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track calculator start
 */
export function trackCalculatorStart(calculatorType: string, userId?: string): void {
  trackEvent('calculator_start', {
    calculator_type: calculatorType,
    user_id: userId,
  });
}

/**
 * Track calculator completion
 */
export function trackCalculatorComplete(
  calculatorType: string,
  overallScore: number,
  userId?: string
): void {
  trackEvent('calculator_complete', {
    calculator_type: calculatorType,
    overall_score: overallScore,
    user_id: userId,
  });
}

/**
 * Track calculator abandonment
 */
export function trackCalculatorAbandoned(calculatorType: string, questionNumber: number): void {
  trackEvent('calculator_abandoned', {
    calculator_type: calculatorType,
    question_number: questionNumber,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formType: string, success: boolean): void {
  trackEvent('form_submit', {
    form_type: formType,
    success,
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaText: string, ctaLocation: string): void {
  trackEvent('cta_clicked', {
    cta_text: ctaText,
    cta_location: ctaLocation,
  });
}

/**
 * Track discovery call booking
 */
export function trackDiscoveryCallBooked(userId?: string, email?: string): void {
  trackEvent('discovery_call_booked', {
    user_id: userId,
    email,
  });
}

/**
 * Track page view
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('config', process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '', {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

/**
 * Track exit intent modal
 */
export function trackExitIntentModalShown(pagePath: string): void {
  trackEvent('exit_intent_modal_shown', {
    page_path: pagePath,
  });
}

/**
 * Track live chat initiation
 */
export function trackLiveChatInitiated(): void {
  trackEvent('live_chat_initiated');
}

/**
 * Track report download
 */
export function trackReportDownload(calculatorType: string, reportType: string): void {
  trackEvent('report_downloaded', {
    calculator_type: calculatorType,
    report_type: reportType,
  });
}

