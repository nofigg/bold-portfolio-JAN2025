import { Project } from '../../types/project';

export const project: Project = {
  title: 'AI Writing Assistant',
  description: 'Landing page for an AI-powered writing tool with dynamic features.',
  date: 'Mar 5, 2024',
  category: 'landing-pages',
  slug: 'ai-writer',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=2000&q=80',
      alt: 'AI writing interface'
    },
    {
      url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=2000&q=80',
      alt: 'Content creation process'
    },
    {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80',
      alt: 'AI technology visualization'
    }
  ],
  content: `# AI Writing Assistant

## Project Overview

A landing page for an AI-powered writing assistant that helps users create better content faster. The design focuses on demonstrating the tool's capabilities through interactive elements and clear value propositions.

## Design Approach

### 1. Hero Section
- Dynamic text generation demo
- Clear value proposition
- Prominent call-to-action
- Social proof indicators

### 2. Feature Showcase
- Interactive demonstrations
- Real-time examples
- Use case scenarios
- Performance metrics

### 3. Pricing Section
- Clear plan comparison
- Feature breakdown
- Custom enterprise solutions
- FAQ integration

## Technical Features

The landing page incorporates several technical innovations:

- **Real-time Demo**: Live AI writing demonstration
- **Performance**: Optimized loading and animations
- **Accessibility**: Screen reader support
- **Analytics**: Conversion tracking

## Results

Early metrics show strong performance:
- 3.2s average page load time
- 65% conversion rate
- 4.8/5 user satisfaction
- 40% reduction in bounce rate`,
  technologies: ['Next.js', 'Framer Motion', 'TailwindCSS', 'TypeScript'],
  links: [
    { label: 'Live Demo', url: 'https://ai-writer.app' },
    { label: 'Documentation', url: 'https://docs.ai-writer.app' }
  ]
};