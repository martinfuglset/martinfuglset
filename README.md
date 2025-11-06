# Personal Blog

A minimal Swiss design blog for publishing research articles and essays.

## Features

- Minimal Swiss design aesthetic
- Two-panel layout (articles on left, profile/info on right)
- Helvetica Neue typography
- Responsive design
- Article listing and detail pages

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Articles

Edit `lib/articles.ts` to add or modify articles. Each article should have:

- `slug`: URL-friendly identifier
- `title`: Article title (uppercase)
- `id`: Document identifier
- `excerpt`: Short preview text
- `content`: Full article content
- `date`: Publication date
- `category`: Optional category
- `image`: Optional image URL

## Font Setup

The project uses Helvetica Neue. You'll need to add the font files to `/public/fonts/`:

- `HelveticaNeue-Roman.woff2` / `.woff`
- `HelveticaNeue-Medium.woff2` / `.woff`
- `HelveticaNeue-Bold.woff2` / `.woff`

Alternatively, you can use a web font service or modify `globals.css` to use system fonts or a fallback.

## Customization

- Edit `components/Sidebar.tsx` to customize your profile information
- Modify `components/MainLayout.module.css` to adjust panel widths
- Update colors and spacing in the CSS modules to match your preferences

## Build

```bash
npm run build
npm start
```

