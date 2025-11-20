#!/usr/bin/env bash
set -euo pipefail

# Proxy to `shopify theme serve` with sane defaults for this project.
# Usage: ./scripts/theme-serve.sh [extra CLI args]

if ! command -v shopify >/dev/null 2>&1; then
  echo "shopify CLI is not installed. Visit https://shopify.dev/docs/themes/tools/cli/install" >&2
  exit 1
fi

shopify theme serve "$@"
