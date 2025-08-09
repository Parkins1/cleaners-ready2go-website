#!/usr/bin/env bash
set -e

BASE_URL="${BASE_URL:-http://localhost:${PORT:-5001}}"

# Check homepage serving
echo "Checking homepage at $BASE_URL ..."
curl -f "$BASE_URL" || { echo "Homepage check failed"; exit 1; }

# Submit contact POST request
echo "Submitting smoke contact..."
curl -f -X POST "$BASE_URL/api/contacts" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Smoke","lastName":"Test","email":"smoke@example.com","phone":"1234567890","serviceType":"Residential","message":"Smoke test"}' \
  || { echo "Contact API check failed"; exit 1; }

echo "Smoke tests passed successfully"
