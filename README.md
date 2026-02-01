# Time:Stamps Waitlist Landing Page

A simple, beautiful waitlist landing page for Time:Stamps - a Chrome extension for capturing YouTube timestamps.

## Tech Stack

- Next.js 14 with App Router
- Tailwind CSS
- Formspree for email collection
- TypeScript

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Formspree

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your Form ID (it looks like `xyzabcde`)
4. Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

5. Add your Formspree ID:

```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variable:
   - Key: `NEXT_PUBLIC_FORMSPREE_ID`
   - Value: Your Formspree form ID
4. Deploy

### Other Platforms

Build the production version:

```bash
npm run build
```

The output will be in the `.next` folder. Deploy using your preferred hosting platform.

## Formspree Free Tier

- 50 submissions per month
- Basic spam filtering (reCAPTCHA)
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
├── .env.local.example   # Environment template
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
