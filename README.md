# Yokesh Kannan - Portfolio Website

A modern, responsive portfolio website built with React showcasing creative work and professional achievements.

## Features

- **Hero Section** - Looping video reel with interactive play button
- **About Section** - Film strip styled layout with personal bio
- **Portfolio Section** - Auto-scrolling carousel with clickable work thumbnails
- **Milestones Section** - Showcase of key achievements
- **Contact Section** - Social media links and contact information
- **Dark/Light Mode** - Toggle between themes
- **Fully Responsive** - Mobile, tablet, and desktop optimized

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yokeshkannan3d/Yokeshkannan.git
   cd Yokeshkannan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add required assets**
   - Place your reel video at `public/videos/reel.mp4`
   - Place about section image at `public/images/about-film.jpg`
   - Place portfolio thumbnails at `public/images/work-1.jpg`, `work-2.jpg`, etc.

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## File Structure

```
Yokeshkannan/
├── public/
│   ├── videos/
│   │   └── reel.mp4
│   ├── images/
│   │   ├── about-film.jpg
│   │   ├── work-1.jpg
│   │   ├── work-2.jpg
│   │   ├── work-3.jpg
│   │   └── work-4.jpg
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── HeroSection.js
│   │   ├── AboutSection.js
│   │   ├── PortfolioSection.js
│   │   ├── MilestonesSection.js
│   │   ├── ContactSection.js
│   │   ├── ThemeToggle.js
│   │   └── (CSS files)
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Update Portfolio Items
Edit the `PORTFOLIO_ITEMS` array in `PortfolioSection.js` to add your work pieces:

```javascript
const PORTFOLIO_ITEMS = [
  { id: 1, title: '3D Models', thumbnail: '/images/work-1.jpg' },
  // Add more items...
];
```

### Update Milestones
Edit the `MILESTONES` array in `MilestonesSection.js` to showcase your achievements.

### Update Social Links
Edit the `socials` array in `ContactSection.js` to add your social media links.

## Technologies Used

- React 18
- CSS3 (with variables and animations)
- Lucide React (for icons)
- Responsive Design (Mobile-first)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is personal and subject to Yokesh Kannan's rights.
