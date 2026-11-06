# Online payment with Moneris (trade site): feasibility

Written 2026-11-06. Source: Moneris developer documentation (Moneris Checkout overview). Fees, contract terms and currency support were not on the pages read and must be confirmed with Moneris.

## What Moneris Checkout is
A hosted payment module embedded in our own page. Moneris runs and secures the card form, so card data never touches our servers (this keeps PCI scope small). It accepts credit and debit cards, digital wallets, Konek and gift cards.

## How it would work on the Next.js site
1. Visitor confirms an order or invoice amount on our page.
2. A server route (a Next.js route handler on Vercel) sends a **preload request** to Moneris with the amount and order id, and gets back a one-time ticket.
3. The browser calls `startCheckout()` with that ticket. The payment form opens inside the page.
4. On completion, a second server route sends a **receipt request** to confirm the result, then we show it and email the team.
Secrets (store id, API token, checkout id) stay in Vercel environment variables, server side only.

## Prerequisites (not code)
- A Moneris merchant account for TransWorld SG Consulting Group Inc., and a Merchant Resource Center login to generate the checkout configuration.
- Business and bank details, and Moneris approval. This usually takes longer than the integration.
- Confirm with Moneris: CAD and USD support, 3-D Secure, fees, and any limit on a single transaction (cocoa lots can be large).

## Does card payment fit this business?
Cocoa lots are B2B, priced per quote, often large, and shipped internationally. Cards suit **small amounts**: sample fees, deposits, small orders. Large lots are normally paid by wire transfer or letter of credit against an invoice, and card fees on those would be costly.

## Recommendation
1. Keep **Request a quote** as the main path.
2. Phase 2: add a "Pay a deposit or sample fee" page using Moneris Checkout, once the merchant account exists.
3. Large orders: invoice with bank transfer details.

## To decide
- Which payments to accept online (samples, deposits, full orders).
- Currency (CAD, USD or both).
- Who owns the Moneris account and receives payout.
