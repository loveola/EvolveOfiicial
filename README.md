# EVOLVE — React Project

## Project Structure

```
evolve-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── EVOLVE_LOGO-removebg-preview.png   ← Copy your logo here
│   └── linkdln image.jpg                  ← Copy your founder photo here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── index.css
    ├── hooks/
    │   └── useScrollReveal.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Stats.jsx
        ├── Story.jsx
        ├── ForHer.jsx
        ├── ForHim.jsx
        ├── Difference.jsx
        ├── QuizCTA.jsx
        ├── YouTube.jsx
        ├── Founder.jsx
        ├── Program.jsx
        ├── Pricing.jsx
        ├── PromiseBook.jsx   ← exports Promise + Book
        └── Footer.jsx
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy your image assets into the `public/` folder:
   - `EVOLVE_LOGO-removebg-preview.png`
   - `linkdln image.jpg`

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser.

## Before Going Live

Search for these placeholders and replace them:

| Placeholder | Replace with |
|---|---|
| `Your Name` | Founder's real name (in Founder.jsx) |
| `https://wa.me/YourNumberHere` | Your actual WhatsApp link |
| `https://youtube.com/@YourChannelHere` | Your YouTube channel URL |

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy to Vercel, Netlify, or any static host.
# EvolveOfiicial
