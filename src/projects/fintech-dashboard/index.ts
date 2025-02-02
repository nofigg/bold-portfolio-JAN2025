import { Project } from '../../types/project';

export const project: Project = {
  title: 'Fintech Dashboard Redesign',
  description: 'A modern take on financial data visualization and management.',
  date: 'Mar 15, 2024',
  category: 'in-progress',
  slug: 'fintech-dashboard',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80',
      alt: 'Modern dashboard interface'
    },
    {
      url: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=2000&q=80',
      alt: 'Financial data visualization'
    },
    {
      url: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2000&q=80',
      alt: 'Trading analytics view'
    }
  ],
  gridImages: [
    {
      url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80',
      alt: 'Mobile dashboard view'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
      alt: 'Analytics dashboard'
    }
  ],
  content: `# Fintech Dashboard Redesign

## Project Overview

The Fintech Dashboard Redesign project aims to revolutionize how users interact with financial data. By combining modern design principles with powerful functionality, we're creating an intuitive platform for managing complex financial information.

## Design Goals

- **Simplify Complexity**: Transform complex financial data into easily digestible visualizations
- **Enhance Usability**: Streamline common workflows and reduce cognitive load
- **Improve Performance**: Optimize data loading and real-time updates
- **Enable Customization**: Allow users to personalize their dashboard experience

## Key Features

### 1. Dynamic Data Visualization
- Real-time market data updates
- Interactive charts and graphs
- Customizable widgets
- Multi-timeframe analysis tools

### 2. Portfolio Management
- Asset allocation overview
- Performance tracking
- Risk analysis tools
- Transaction history

### 3. Smart Notifications
- Customizable alerts
- Market event notifications
- Portfolio performance updates
- Security price alerts

## Technical Implementation

The dashboard is built using modern web technologies and follows best practices for performance and scalability:

- **Architecture**: Micro-frontend architecture for modularity
- **State Management**: Real-time data synchronization
- **Performance**: Optimized data loading and caching
- **Accessibility**: WCAG 2.1 AA compliance

## Current Progress

The project is currently in active development with the following milestones:

- ✅ User research and requirements gathering
- ✅ Design system implementation
- ✅ Core dashboard framework
- 🚧 Data visualization components
- 🚧 Portfolio management features
- 📅 Smart notifications system`,
  technologies: ['React', 'TypeScript', 'D3.js', 'TailwindCSS', 'WebSocket'],
  links: [
    { label: 'Prototype', url: 'https://www.figma.com/proto/fintech-dashboard' },
    { label: 'Documentation', url: 'https://docs.fintech-dashboard.dev' }
  ]
};