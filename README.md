# Modern Blog

A production-ready modern blog website built with HTML, CSS, and vanilla JavaScript. This project implements a responsive design with a dual theme system (light/dark mode), smooth animations, and a clean layout.

## Features

- **Dual Theme System**
  - Light and dark modes with CSS variables
  - Theme preference detection and persistence
  - Smooth transitions between themes
  - Image brightness adjustment in dark mode

- **Responsive Design**
  - Mobile-first approach
  - Flexible layouts using CSS Grid and Flexbox
  - Optimized for all screen sizes

- **Modern UI Components**
  - Sticky header with navigation
  - Hero section with overlay
  - 3-column article grid with cards
  - Category showcase with icons
  - Newsletter subscription form
  - Multi-section footer

- **Interactive Elements**
  - Animated theme toggle switch
  - Scroll-triggered animations using IntersectionObserver
  - Card hover effects with transitions
  - Reading progress indicator
  - Loading skeleton screens

- **Performance Optimized**
  - Minimal JavaScript
  - CSS transitions for smooth animations
  - Lazy-loaded content

## Project Structure

```
modernblog/
│
├── css/
│   └── style.css           # Main stylesheet with theme variables
│
├── js/
│   ├── data.js             # Mock article data
│   └── main.js             # Core JavaScript functionality
│
├── img/                    # Image assets directory
│
└── index.html              # Main HTML document
```

## Customization

### Theme Colors

The theme colors are defined as CSS variables in `style.css`. You can easily customize them:

#### Light Theme
```css
:root {
    --bg: #F5F5F5;
    --text: #333333;
    --primary: #2D4356;
    --accent: #EAB2A0;
    /* Additional variables */
}
```

#### Dark Theme
```css
[data-theme="dark"] {
    --bg: #121212;
    --text: #E0E0E0;
    --primary: #6C8EBF;
    --accent: #D4A59A;
    /* Additional variables */
}
```

### Adding Content

To add new articles, update the `articleData` object in `data.js`:

```javascript
{
    id: 11, // Unique ID
    title: "Your Article Title",
    excerpt: "Brief description of the article",
    category: "Category Name",
    image: "path/to/image.jpg",
    author: {
        name: "Author Name",
        avatar: "path/to/avatar.jpg"
    },
    date: "Publication Date"
}
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Accessibility

This project follows WCAG AA compliance guidelines:

- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigation support
- ARIA attributes where appropriate
- Screen reader friendly

## License

This project is available for personal and commercial use.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/) (Poppins, Open Sans)
- Icons: [Font Awesome](https://fontawesome.com/)
- Images: [Unsplash](https://unsplash.com/)
- Avatar Images: [Random User Generator](https://randomuser.me/) 