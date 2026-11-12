# Bhumika Cafe Website

A responsive React + Vite cafe website with a premium modern coffee-house look.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this project folder.
3. Open the folder in VS Code.
4. Open Terminal and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Important customisation before publishing

Open `src/App.jsx`:

- Replace `WHATSAPP_NUMBER` with the cafe's full WhatsApp number, digits only, including country code. For India, use `91` followed by the 10-digit mobile number.
- Replace `PHONE_DISPLAY` with the public contact number.
- Update the sample menu names, descriptions and prices in `menuItems`.
- Replace the placeholder address and opening hours in the Visit Us section.
- Replace gallery inspiration photos with real cafe photos.

The booking form creates a WhatsApp message. It does not confirm a reservation automatically; the cafe must reply to confirm availability.

## Production build

```bash
npm run build
npm run preview
```
