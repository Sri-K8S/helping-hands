# Helping Hands 🤝

> A modern, responsive fundraising website built with HTML, CSS, and JavaScript

## Features

✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

🌙 **Dark Mode** - Elegant dark theme toggle with persistent storage

♿ **Accessibility** - WCAG compliant with ARIA labels and semantic HTML

🎯 **SEO Optimized** - Meta tags, structured data, and sitemap for search engines

💝 **Donation Methods** - UPI, Bank Transfer, and Quick donation options

❓ **Interactive FAQ** - Accordion-style FAQ with smooth animations

📱 **Mobile Menu** - Responsive navigation for mobile devices

✉️ **Contact Form** - Fully functional contact form with validation

🎨 **Beautiful UI** - Modern gradient design with smooth animations

📊 **Statistics** - Animated counter display for impact metrics

## Demo

Visit the live website: [https://sri-k8s.github.io/helping-hands](https://sri-k8s.github.io/helping-hands)

## File Structure

```
helping-hands/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # Interactive JavaScript functionality
├── _config.yml         # GitHub Pages configuration
├── README.md           # This file
└── LICENSE             # License information
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Interactive features
- **GitHub Pages** - Static site hosting

## Key Sections

### 1. Navigation Bar
- Sticky navigation with smooth scrolling
- Dark mode toggle
- Mobile responsive hamburger menu

### 2. Hero Section
- Eye-catching gradient background
- Animated statistics counters
- Call-to-action button

### 3. About Section
- Mission statement
- Core values with icons
- Responsive grid layout

### 4. Donation Section
- Quick donation amount buttons
- UPI payment option with QR placeholder
- Bank transfer details with copy functionality
- Custom donation amount input

### 5. FAQ Section
- Interactive accordion
- Keyboard accessible
- Smooth animations

### 6. Contact Section
- Contact form with validation
- Multiple contact methods
- Social media links

### 7. Footer
- Quick links
- Legal information
- Organization details

## CSS Features

- **CSS Variables** - Easy color and spacing management
- **CSS Grid & Flexbox** - Modern responsive layouts
- **Gradients** - Beautiful linear gradients
- **Animations** - Smooth transitions and keyframe animations
- **Dark Mode Support** - CSS variables toggle for theme switching
- **Media Queries** - Mobile-first responsive design

## JavaScript Features

- **Dark Mode Persistence** - Saves user preference in localStorage
- **Mobile Menu Toggle** - Hamburger menu for mobile devices
- **Donation Tracking** - Interactive donation amount selection
- **FAQ Accordion** - Toggle answers with keyboard support
- **Form Validation** - Client-side validation for contact form
- **Toast Notifications** - User feedback messages
- **Smooth Scrolling** - Animated page scrolling
- **Counter Animation** - Animated statistics on scroll
- **Copy to Clipboard** - Bank details copy functionality

## Accessibility

✓ ARIA labels for interactive elements
✓ Semantic HTML structure
✓ Keyboard navigation support
✓ Focus visible outlines
✓ Color contrast compliance
✓ Reduced motion support
✓ Screen reader friendly

## SEO Optimization

✓ Meta tags for description and keywords
✓ Open Graph tags for social sharing
✓ Semantic HTML markup
✓ Mobile-friendly responsive design
✓ Fast loading performance
✓ Sitemap generation via _config.yml
✓ Structured data ready

## Customization Guide

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --accent-color: #ffe66d;
  /* ... more variables */
}
```

### Organization Info
Update in `index.html`:
- Organization name
- Contact details
- Bank transfer information
- UPI ID
- Social media links

### Statistics
Modify in `index.html` hero section:
```html
<div class="stat-number" data-target="1500">0</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight (~15KB)
- No external dependencies
- Fast loading time
- Optimized animations
- Mobile optimized

## Deployment

### Using GitHub Pages

1. Fork or clone this repository
2. Navigate to Settings → Pages
3. Set source to main branch
4. Your site will be live at `https://yourusername.github.io/helping-hands`

## Configuration

Update `_config.yml` with your organization details:
```yml
title: Your Organization Name
description: Your organization description
url: https://yourusername.github.io/helping-hands
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Future Enhancements

- [ ] Integration with payment gateways
- [ ] Admin dashboard
- [ ] Blog section
- [ ] Impact stories
- [ ] Volunteer portal
- [ ] Event calendar
- [ ] Newsletter signup
- [ ] Multi-language support

## License

MIT License - feel free to use this project for your organization

## Support

For issues and questions, please open a GitHub issue.

## Changelog

### v1.0.0 (Initial Release)
- Initial website launch
- All core features implemented
- Full mobile responsiveness
- Dark mode support
- Accessibility compliance

---

**Built with ❤️ for those in need**