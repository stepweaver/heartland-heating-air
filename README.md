## Local Service SEO Demo

A reusable multi-location lead-generation website demo for local service businesses.

This project showcases a data-driven SEO architecture that generates location + service landing pages from centralized content, while also supporting reusable marketing pages, contact forms, quote requests, and careers flows.

### What This Project Demonstrates

- Data-driven long-tail SEO page generation
- Centralized content modeling for locations, services, and business info
- Reusable modular frontend components in vanilla JavaScript
- Express-based form handling for contact, quote, and job-application flows
- Email integration with Nodemailer
- Spam protection with Google reCAPTCHA
- Static-friendly architecture that can be hosted on platforms like Netlify or Vercel

### Core Features

- Multi-location service-area architecture
- Generated city/service landing pages
- Reusable homepage, service, about, contact, and careers pages
- Centralized business, service, and testimonial data
- Mobile-responsive marketing site structure
- SEO-focused metadata and schema support
- Contact and quote form endpoints
- Optional careers / hiring workflow

### Tech Stack

- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express
- Email: Nodemailer
- Bot Protection: Google reCAPTCHA
- Build Strategy: Static page generation + lightweight Node server

### Quick Start

#### 1. Install dependencies

```bash
npm install
```

#### 2. Create your environment file

```bash
cp env.example .env
```

#### 3. Configure environment variables

Set the following values in your `.env` file:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
BUSINESS_EMAIL=your-business-email@example.com
PORT=3000
RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

#### 4. Run the development server

```bash
npm run dev
```

#### 5. Generate SEO pages

```bash
npm run generate-seo
```

#### 6. Generate pages and prepare for production

```bash
npm run seo-build
```

### Available Scripts

- `npm run dev` — start the local Express server
- `npm run generate-seo` — generate location/service landing pages
- `npm run seo-build` — generate SEO pages and run the build step
- `npm run preview` — preview static frontend files

### Project Structure

```text
project-root/
├── public/
│   ├── components/              # Reusable UI components
│   ├── data/                    # Centralized content/data files
│   ├── locations/               # Generated location-service pages
│   ├── img/                     # Images and media assets
│   ├── index.html               # Homepage
│   ├── service.html             # Service page shell
│   ├── contact.html             # Contact page
│   ├── careers.html             # Careers page
│   ├── sitemap.xml              # Generated sitemap
│   ├── styles.css               # Global styles
│   └── main.js                  # Frontend entry point
├── scripts/
│   └── generate-location-pages.js
├── server.js                    # Express server / form endpoints
├── email-config.js              # Nodemailer config and templates
├── env.example                  # Environment variable template
└── README.md
```

### How the SEO System Works

The project uses centralized data files to define:

- locations
- services
- business details

A generation script combines that data to create SEO landing pages for each supported location/service pairing. This makes it easy to scale the site across markets without duplicating content structure by hand.

### Portfolio Notes

This repository is presented as a generic demo to highlight the architecture and implementation approach rather than any single client engagement.

Areas of focus:

- scalable local SEO structure
- reusable content architecture
- modular component organization
- practical lead-generation UX
- lightweight backend integration

### Deployment Notes

This project can be adapted for static hosting with serverless form handling, or deployed with a lightweight Node server when server-side email delivery is needed.

### License

MIT
