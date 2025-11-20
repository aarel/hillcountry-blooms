#!/usr/bin/env bash
set -euo pipefail

# Run Shopify theme check with project defaults.
# Usage: ./scripts/theme-check.sh [extra CLI args]

if ! command -v shopify >/dev/null 2>&1; then
  echo "shopify CLI is not installed. Visit https://shopify.dev/docs/themes/tools/cli/install" >&2
  exit 1
fi

shopify theme check "$@"
