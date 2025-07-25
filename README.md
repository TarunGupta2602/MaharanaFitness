# Maharana Fitness Club - Static Site

A high-performance, statically generated fitness club website built with Next.js and optimized for speed and SEO.

## 🚀 Performance Features

- **Static Site Generation (SSG)**: All pages are pre-rendered at build time for maximum performance
- **Optimized Images**: WebP format with proper sizing and lazy loading
- **Framer Motion**: Smooth animations with optimized performance
- **SEO Optimized**: Complete metadata, Open Graph, and Twitter Card support
- **Mobile First**: Responsive design optimized for all devices

## 📁 Project Structure

```
gym_maharana/
├── app/
│   ├── about/page.js          # About page (Static)
│   ├── contact/
│   │   ├── page.js            # Contact page (Static)
│   │   └── ContactForm.js     # Contact form (Client-side)
│   ├── membership/page.js     # Membership page (Static)
│   ├── schedules/page.js      # Schedules page (Static)
│   ├── services/page.js       # Services page (Static)
│   ├── navbar/page.js         # Navigation (Client-side)
│   ├── footer/page.js         # Footer (Static)
│   ├── page.js                # Home page (Static)
│   ├── layout.js              # Root layout
│   └── globals.css            # Global styles
├── public/                    # Static assets
├── next.config.mjs           # Next.js configuration
└── package.json              # Dependencies
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development mode:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Build static export:**
   ```bash
   npm run build:static
   ```

## ⚡ Performance Optimizations

### Static Generation
- All pages use `export const dynamic = 'force-static'` for static generation
- Pages are pre-rendered at build time for instant loading
- No server-side rendering overhead

### Image Optimization
- WebP format for smaller file sizes
- Proper image sizing and responsive images
- Lazy loading for better performance

### Bundle Optimization
- Code splitting for optimal loading
- Vendor chunk separation
- CSS optimization enabled

### SEO & Metadata
- Complete Open Graph support
- Twitter Card optimization
- Structured data ready
- Sitemap generation ready

## 🎨 Features

### Pages
- **Home**: Hero section with services overview
- **About**: Company information and values
- **Services**: Detailed service offerings
- **Membership**: Pricing plans and benefits
- **Schedules**: Class timetables
- **Contact**: Contact form and information

### Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Contact information and social links
- **ContactForm**: Interactive contact form (client-side)

## 🔧 Configuration

### Next.js Config
- Static export enabled
- Image optimization configured
- Bundle analysis ready
- Performance optimizations enabled

### Build Process
- Static generation for all pages
- Optimized asset compression
- Vendor chunk separation
- CSS optimization

## 📊 Performance Metrics

Expected performance improvements:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🚀 Deployment

### Static Hosting
This site is optimized for static hosting platforms:

- **Vercel**: Automatic deployment with `vercel --prod`
- **Netlify**: Drag and drop the `out` folder
- **GitHub Pages**: Use the `out` directory
- **AWS S3**: Upload the `out` folder

### Build Output
After running `npm run build:static`, the static files will be in the `out` directory, ready for deployment to any static hosting service.

## 🔍 SEO Features

- Complete metadata for all pages
- Open Graph tags for social sharing
- Twitter Card optimization
- Structured data ready
- Sitemap generation ready
- Robots.txt configuration

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on mobile networks

## 🎯 Analytics Ready

The site is prepared for analytics integration:
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Custom event tracking

## 📈 Performance Monitoring

Built-in performance monitoring ready for:
- Core Web Vitals
- Real User Monitoring (RUM)
- Error tracking
- Performance budgets

---

**Built with ❤️ using Next.js and optimized for performance**