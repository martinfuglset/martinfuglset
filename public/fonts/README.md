# Font Setup Instructions

The blog is configured to use Helvetica Neue. You have two options:

## Option 1: Use System Fonts (Current Setup)

The current CSS includes fallback fonts that will use system fonts similar to Helvetica Neue:
- macOS/iOS: Uses Helvetica Neue if available
- Windows: Uses Segoe UI
- Linux: Uses system sans-serif

This works immediately without any font files.

## Option 2: Add Helvetica Neue Font Files

If you have Helvetica Neue font files, place them in `/public/fonts/`:

- `HelveticaNeue-Roman.woff2` (Regular, 400)
- `HelveticaNeue-Roman.woff` (Regular, 400 fallback)
- `HelveticaNeue-Medium.woff2` (Medium, 500)
- `HelveticaNeue-Medium.woff` (Medium, 500 fallback)
- `HelveticaNeue-Bold.woff2` (Bold, 700)
- `HelveticaNeue-Bold.woff` (Bold, 700 fallback)

The CSS in `app/globals.css` is already configured to use these files if they exist.

## Option 3: Use a Web Font Service

You can modify `app/globals.css` to use a web font service like Google Fonts or Adobe Fonts if you prefer.

