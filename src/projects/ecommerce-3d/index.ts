import { Project } from '../../types/project';

export const project: Project = {
  title: 'E-commerce Experience',
  description: 'Reimagining online shopping with immersive 3D product views.',
  date: 'Feb 15, 2024',
  category: 'explorations',
  slug: 'ecommerce-3d',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=2000&q=80',
      alt: '3D product showcase'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
      alt: 'E-commerce analytics'
    }
  ],
  content: `# E-commerce Experience

## Concept Overview

A next-generation e-commerce experience that brings products to life through interactive 3D visualization and immersive features.

## Key Features

### 1. 3D Product Viewer
- 360° product rotation
- Zoom and pan controls
- Material customization
- Real-time lighting

### 2. AR Try-On
- Mobile AR integration
- Real-world scaling
- Environment mapping
- Social sharing

### 3. Performance
- Progressive loading
- Asset optimization
- Caching strategies
- Mobile optimization

## Technical Architecture

The system is built on modern web technologies:
- WebGL for 3D rendering
- WebXR for AR experiences
- Service Workers for offline support
- IndexedDB for local storage`,
  technologies: ['Three.js', 'WebGL', 'WebXR', 'React Three Fiber'],
  links: [
    { label: 'Demo', url: 'https://3d-commerce.demo' },
    { label: 'Case Study', url: 'https://case-study.3d-commerce.com' }
  ]
};