import { Project } from '../../types/project';

export const project: Project = {
  title: 'Scroll-driven Animations',
  description: 'Smooth, performant animations triggered by scroll position.',
  date: 'Feb 20, 2024',
  category: 'interactions',
  slug: 'scroll-animations',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80',
      alt: 'Smooth scrolling animation'
    },
    {
      url: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=2000&q=80',
      alt: 'Animation timeline'
    }
  ],
  content: `# Scroll-driven Animations

## Animation System

A collection of smooth, performant scroll-driven animations that enhance user experience without compromising performance.

## Technical Implementation

### 1. Core Animation Engine
\`\`\`javascript
const createScrollAnimation = (element, options) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          element.style.transform = \`
            translate3d(0, \${entry.intersectionRatio * 50}px, 0)
            scale(\${0.5 + entry.intersectionRatio * 0.5})
          \`;
          element.style.opacity = entry.intersectionRatio;
        });
      }
    });
  }, options);
  
  observer.observe(element);
};
\`\`\`

### 2. Performance Optimization
- Hardware acceleration
- RAF batching
- Passive scroll listeners
- Will-change optimization

### 3. Animation Types
- Parallax effects
- Fade sequences
- Scale transitions
- Rotation effects

## Best Practices

- Use transform and opacity for smooth animations
- Implement progressive enhancement
- Consider reduced motion preferences
- Optimize for mobile devices`,
  technologies: ['JavaScript', 'GSAP', 'Intersection Observer', 'CSS Animations'],
  links: [
    { label: 'Demo', url: 'https://scroll-animations.demo' },
    { label: 'Documentation', url: 'https://docs.scroll-animations.dev' }
  ]
};