# Automation Playbook

## Forms
- **Custom arrangement request** → Drop `snippets/contact-custom-request.liquid` into the Contact template. Store submissions in `customers/` metafield `custom.arrangement_notes` and trigger email via Flow.
- **Contact form** → Use Shopify's native contact form, piping notifications to `hello@hillcountryblooms.com` and tagging submissions with `contact-form` for Flow automations.

## Email
- **Monthly newsletter** → Shopify Email campaign referencing `marketing/newsletter_template` metafield; schedule first week of each month.
- **Delivery reminder** → Shopify Flow automation watching for order tag `local-delivery`. Template copy lives in `marketing/delivery_template` metafield.

## Chat
- **Local delivery widget** → Embed a Shopify Inbox bubble with a canned response referencing delivery ZIPs (`settings.delivery_zips`).

## QR Codes
- **Story card QR** → Generate dynamic QR codes pointing to product metafield `custom.story_url`. Store SVGs in `assets/qr/` and surface via `snippets/product-story-card.liquid` (expects metafields `story_title`, `story_excerpt`, `story_qr_svg`).

## Analytics
- **Shopify Analytics** → Enable dashboard segments for local delivery performance.
- **Google Search Console / Meta Ads** → Confirm verification tags stored in theme settings (`settings.head_html`) or via metafields.
- **Checkout ZIP guard** → Load `{{ 'checkout.js' | asset_url | script_tag }}` in `checkout.liquid` to enforce delivery ZIP validation aligned with Hill Country service areas.
