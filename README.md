# Modern CV Portfolio ✨

A stunning single-page CV/Portfolio built with Next.js 15, TypeScript, and TailwindCSS, featuring an animated meteor shower background theme.

## 🌟 Features

- **Animated Background**: Beautiful meteor shower with slow-moving stars and shooting stars
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Canvas-like design with glass morphism effects
- **Smooth Animations**: CSS keyframes and transitions for enhanced UX
- **Four Main Sections**:
  - **Info**: Name, title, and introduction
  - **About**: Personal details and experience highlights
  - **Expertise**: Skills, technologies, and frameworks with animated progress bars
  - **Connect**: Social links and contact information

## 🚀 Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Custom CSS keyframes
- **Font**: Geist Sans & Geist Mono

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd huzidev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
└── components/
    ├── MeteorShower.tsx    # Animated background component
    ├── InfoSection.tsx     # Hero/Info section
    ├── AboutSection.tsx    # About section with stats
    ├── ExpertiseSection.tsx # Skills and technologies
    ├── ConnectSection.tsx  # Contact and social links
    └── Navigation.tsx      # Smooth scroll navigation
```

## 🎨 Customization

### Personal Information
Edit the following files to customize with your information:
- `src/components/InfoSection.tsx` - Name, title, description
- `src/components/AboutSection.tsx` - Experience, stats, background
- `src/components/ExpertiseSection.tsx` - Skills, technologies, progress levels
- `src/components/ConnectSection.tsx` - Social links, email, contact form

### Styling
- Modify `src/app/globals.css` for animation timings and colors
- Update TailwindCSS classes in components for different color schemes
- Adjust meteor shower parameters in `MeteorShower.tsx`

## 🌠 Animation Features

- **Meteor Shower**: Continuous falling meteors with varying speeds
- **Stars**: Slow-moving background stars with pulse animation
- **Shooting Stars**: Fast-moving streaks with glow effects
- **Hover Effects**: Interactive elements with scale and glow transitions
- **Scroll Animations**: Smooth scrolling navigation

## 📱 Responsive Design

- Mobile-first approach
- Optimized for screens from 320px to 4K
- Touch-friendly navigation
- Adaptive layouts for all sections

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ using Next.js & TailwindCSS**
