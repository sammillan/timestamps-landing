# Time:Stamps Waitlist Landing Page

A simple, beautiful waitlist landing page for Time:Stamps - a Chrome extension for capturing YouTube timestamps.

## Tech Stack

- Next.js 15 with App Router
- Tailwind CSS
- Formspree for email collection
- TypeScript

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Formspree Integration

The waitlist form is connected to Formspree endpoint: `https://formspree.io/f/maqbdarn`

### Form Location

The `WaitlistForm` component appears in two places:
- **Hero section** (top of page)
- **Final CTA section** (bottom of page)

### Features

- AJAX submission (no page reload)
- Loading state with spinner
- Success message: "You're on the list!"
- Error handling with Formspree error messages
- Honeypot spam prevention (`_gotcha` field)
- Source tracking (`source: "time-stamps.com"`)

### Testing the Form

1. Run locally: `npm run dev`
2. Fill in email (and optionally name)
3. Click "Join Waitlist"
4. Verify:
   - Button shows "Joining..." with spinner while submitting
   - Success state shows checkmark and confirmation message
   - Submission appears in [Formspree dashboard](https://formspree.io/forms/maqbdarn/submissions)

### Expected Behaviors

| Scenario | Expected Result |
|----------|-----------------|
| Valid email submitted | Success message, form replaced with confirmation |
| Invalid email | Browser validation prevents submission |
| Network error | Error message: "Network error..." |
| Formspree error | Displays Formspree's error message |
| Spam (honeypot filled) | Formspree silently rejects |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy (no environment variables needed)

### Other Platforms

Build the production version:

```bash
npm run build
```

The output will be in the `.next` folder. Deploy using your preferred hosting platform.

## Formspree Free Tier

- 50 submissions per month
- Basic spam filtering (honeypot)
- Email notifications

For more submissions, upgrade to Formspree's paid plans.

## Project Structure

```
timestamps-landing/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── WaitlistForm.tsx # Formspree email form
│   ├── Hero.tsx         # Hero section
│   ├── Problem.tsx      # Problem cards
│   ├── HowItWorks.tsx   # 3-step process
│   ├── UseCases.tsx     # Persona cards
│   ├── FinalCTA.tsx     # Bottom CTA
│   └── Footer.tsx       # Footer
└── tailwind.config.ts   # Tailwind with Monokai colors
```

## Customization

### Colors (Monokai Pro)

Edit `tailwind.config.ts` to modify the color palette:

```ts
colors: {
  background: {
    main: "#2d2a2e",
    card: "#221f22",
  },
  accent: "#ffd866",
  text: {
    primary: "#fcfcfa",
    secondary: "#939293",
  },
  border: "#423f43",
}
```

### Content

Edit the component files in `/components` to update copy and content.

## License

MIT
