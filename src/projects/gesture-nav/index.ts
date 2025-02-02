import { Project } from '../../types/project';

export const project: Project = {
  title: 'Gesture Navigation',
  description: 'Natural gesture-based navigation system for touch devices.',
  date: 'Feb 10, 2024',
  category: 'interactions',
  slug: 'gesture-nav',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=2000&q=80',
      alt: 'Gesture interaction'
    },
    {
      url: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=2000&q=80',
      alt: 'Touch interface'
    }
  ],
  content: `# Gesture Navigation

## Interaction Design

A natural and intuitive gesture-based navigation system that enhances the mobile user experience.

## Core Features

### 1. Gesture Recognition
\`\`\`typescript
interface GestureHandler {
  onStart: (event: TouchEvent) => void;
  onMove: (event: TouchEvent) => void;
  onEnd: (event: TouchEvent) => void;
}

class GestureRecognizer {
  private startX: number = 0;
  private startY: number = 0;
  
  handleStart(event: TouchEvent) {
    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  }
  
  handleMove(event: TouchEvent) {
    const touch = event.touches[0];
    const deltaX = touch.clientX - this.startX;
    const deltaY = touch.clientY - this.startY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal gesture
      this.handleHorizontalSwipe(deltaX);
    } else {
      // Vertical gesture
      this.handleVerticalSwipe(deltaY);
    }
  }
}
\`\`\`

### 2. Animation System
- Spring physics
- Velocity tracking
- Smooth transitions
- Haptic feedback

### 3. Accessibility
- Keyboard alternatives
- Screen reader support
- Reduced motion options
- Custom preferences`,
  technologies: ['TypeScript', 'React', 'Framer Motion', 'Web Animations API'],
  links: [
    { label: 'Demo', url: 'https://gesture-nav.demo' },
    { label: 'Documentation', url: 'https://docs.gesture-nav.dev' }
  ]
};