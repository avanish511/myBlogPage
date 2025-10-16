# Poetry Corner - Avanish's Creative Space

A beautiful, modern poetry blog built with Astro, featuring a macOS-inspired design with dark/light theme support and MongoDB integration for poem management.

## Features

- 🎨 **macOS-inspired Design**: Clean, modern interface with smooth animations
- 🌙 **Dark/Light Theme**: Toggle between themes with persistent preference
- 📱 **Responsive**: Works perfectly on all devices
- 🗄️ **MongoDB Integration**: Ready for dynamic poem management
- ⚡ **Fast Performance**: Built with Astro for optimal speed
- 🚀 **Vercel Ready**: Configured for easy deployment

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Deployment**: Vercel
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.20.8 or higher
- MongoDB Atlas account (for production)
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

3. Set up environment variables:

```bash
cp env.example .env.local
```

4. Add your MongoDB URI to `.env.local`:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/poetry-blog?retryWrites=true&w=majority
```

5. Start the development server:

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
│   └── mongodb.ts      # Database connection and helpers
├── pages/
│   ├── api/            # API routes for poem management
│   ├── index.astro     # Home page
│   ├── about.astro     # About page
│   ├── poems.astro     # Poems collection
│   └── memories.astro  # Memory lane
└── styles/             # Global styles
```

## MongoDB Schema

### Poems Collection

```typescript
interface Poem {
  _id?: string;
  title: string;
  content: string;
  category: "love" | "nature" | "life" | "dreams";
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  featured?: boolean;
}
```

### Memories Collection

```typescript
interface Memory {
  _id?: string;
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}
```

## API Endpoints

- `GET /api/poems` - Fetch all poems (with optional category filter)
- `POST /api/poems` - Create a new poem
- `GET /api/poems/[id]` - Fetch a specific poem
- `PUT /api/poems/[id]` - Update a poem
- `DELETE /api/poems/[id]` - Delete a poem

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
4. Deploy!

### Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `NODE_ENV`: Set to 'production' for production builds

## Customization

### Adding New Poems

You can add poems through the API or directly in the MongoDB database. The poems will automatically appear in the Poetry Explorer.

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
