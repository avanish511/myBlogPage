# Poetry Corner - Avanish's Creative Space

A beautiful, modern poetry blog built with Astro, featuring a macOS-inspired design with dark/light theme support and dynamic Memory Lane gallery.

## Features

- 🎨 **macOS-inspired Design**: Clean, modern interface with smooth animations
- 🌙 **Dark/Light Theme**: Toggle between themes with persistent preference
- 📱 **Responsive**: Works perfectly on all devices
- 📸 **Dynamic Memory Lane**: Auto-discovering photo and video gallery
- ⚡ **Fast Performance**: Built with Astro for optimal speed
- 🚀 **Vercel Ready**: Configured for easy deployment

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **API**: Astro API routes for dynamic content
- **Deployment**: Vercel
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.20.8 or higher
- Vercel account (for deployment)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd blogPage
```

2. Install dependencies:

```bash
npm install
```

3. Add your images and videos to `public/memoryLane/` - they'll be auto-discovered!

4. Start the development server:

```bash
npm run dev
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.astro    # Navigation with theme toggle
│   ├── Hero.astro      # Hero section
│   ├── PoetryExplorer.astro  # macOS-style file explorer
│   └── MemoryGallery.astro   # Memory cards with hover effects
├── layouts/
│   └── Layout.astro    # Main layout with theme system
├── lib/
│   └── memory-index.ts # Auto-discovery API for Memory Lane
├── pages/
│   ├── api/            # API routes for poem management
│   ├── index.astro     # Home page
│   ├── about.astro     # About page
│   ├── poems.astro     # Poems collection
│   └── memories.astro  # Memory lane
└── styles/             # Global styles
```

## Memory Lane API

The Memory Lane gallery automatically discovers images and videos from `public/memoryLane/` and `public/memoLane/` directories. Supported formats:

- **Images**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- **Videos**: `.mp4`, `.webm`, `.ogg`, `.mov`

The API route `/api/memory-index` provides a JSON list of all media files for the gallery.

## API Endpoints

- `GET /api/memory-index` - Fetch all media files from Memory Lane directories

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy!

### Environment Variables

- `NODE_ENV`: Set to 'production' for production builds (optional)

## Customization

### Adding New Poems

Poems are currently hardcoded in the components. You can edit them directly in `src/pages/poems.astro` and `src/components/PoetryExplorer.astro`.

### Styling

The design uses Tailwind CSS with custom configurations. You can modify:

- Colors in `tailwind.config.mjs`
- Animations and transitions
- Component styles in individual `.astro` files

### Theme Customization

The theme system is built into the layout. You can customize:

- Color schemes in the CSS variables
- Theme toggle behavior
- Default theme preference

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Author**: Avanish
- **Email**: avanish@example.com
- **Website**: [Your Poetry Blog](https://your-poetry-blog.vercel.app)

---

Made with ❤️ and poetry by Avanish

## Latest Updates

- ✅ Dark theme by default
- ✅ Fixed mobile hamburger menu
- ✅ Static build for Vercel compatibility
