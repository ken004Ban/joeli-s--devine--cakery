# ⚙️ Configuration Guide: JOELi's DEVINE CAKERY

This document outlines all environment variables and API configurations required to make the website fully functional.

## 🌐 Environment Variables (`.env`)

Create a file named `.env` in the root directory of your project. 

```env
# WhatsApp Business Number (Include country code, no + or spaces)
# Example: +260976365536
VITE_WHATSAPP_NUMBER=+260976365536

# Business Email for 'mailto' links and form submissions
VITE_CONTACT_EMAIL=hello@joelisdevine.com
```

## 📩 Email Configuration (Mailto Approach)

As requested, the website uses the `mailto:` protocol. This is the simplest "no-backend" approach:

- **How it works**: When a user clicks "Contact" or submits a request, the browser will automatically open their default email client (Outlook, Gmail, Apple Mail) with the recipient's address already filled in.
- **Pros**: No API keys required, no monthly costs, 100% privacy for the user.
- **Cons**: Requires the user to have an email client installed on their device.

### Implementation Detail
In the codebase, the contact links are structured as:
`href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} `

## 📱 WhatsApp Integration

The floating WhatsApp button is configured to use the official WhatsApp API for direct messaging:

- **URL Format**: `https://wa.me/<number>`
- **Configuration**: The link is dynamically generated using the `VITE_WHATSAPP_NUMBER` variable.
- **User Experience**: Clicking the button opens WhatsApp Web on desktop or the WhatsApp App on mobile, starting a chat directly with JOELi.

## 🚀 Quick Setup Checklist

1. [ ] Copy `.env.example` to `.env`
2. [ ] Replace `+260976365536` with the actual CEO's WhatsApp number.
3. [ ] Replace `hello@joelisdevine.com` with the actual business email.
4. [ ] Restart the Vite development server (`npm run dev`) to apply the changes.
