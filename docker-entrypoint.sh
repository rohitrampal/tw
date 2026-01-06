#!/bin/sh
set -e

# Verify Prisma schema exists
if [ ! -f "/app/prisma/schema.prisma" ]; then
  echo "ERROR: Prisma schema not found at /app/prisma/schema.prisma"
  echo "Listing /app contents:"
  ls -la /app
  echo "Listing /app/prisma (if exists):"
  ls -la /app/prisma 2>&1 || echo "prisma directory does not exist"
  exit 1
fi

# Run database migrations using locally installed Prisma
echo "Running database migrations..."
cd /app
/app/.prisma-cli/node_modules/.bin/prisma db push --accept-data-loss || echo "Migration failed or already up to date"

# Start the application
echo "Starting application..."
exec node server.js

