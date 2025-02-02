import { Project } from '../../types/project';

export const project: Project = {
  title: 'Future of Remote Work',
  description: 'Exploring next-gen collaboration tools and virtual offices.',
  date: 'Feb 28, 2024',
  category: 'explorations',
  slug: 'future-work',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=2000&q=80',
      alt: 'Virtual office concept'
    },
    {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80',
      alt: 'Remote collaboration tools'
    },
    {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80',
      alt: 'Future workspace design'
    }
  ],
  content: `# Future of Remote Work

## Concept Overview

An exploration of how remote work might evolve in the next decade, focusing on virtual offices and collaboration tools that bridge the gap between physical and digital workspaces.

## Key Concepts

### 1. Virtual Office Spaces
- Customizable 3D environments
- Spatial audio integration
- Virtual meeting rooms
- Ambient presence indicators

### 2. Collaboration Tools
- Real-time document co-editing
- Virtual whiteboarding
- Team presence visualization
- Async communication tools

### 3. Digital Wellness
- Work-life balance tracking
- Mental health support
- Digital detox features
- Ergonomic reminders

## Technical Considerations

The concept explores various technical possibilities:

- **VR/AR Integration**: Immersive workspace experiences
- **AI Assistance**: Smart scheduling and task management
- **Blockchain**: Decentralized work verification
- **IoT**: Physical-digital workspace integration

## Potential Impact

The concept addresses several key areas:
- Improved work-life balance
- Enhanced team collaboration
- Reduced carbon footprint
- Increased productivity`,
  technologies: ['VR/AR', 'WebRTC', 'Three.js', 'WebGL'],
  links: [
    { label: 'Concept Demo', url: 'https://future-work.concept' },
    { label: 'Research Paper', url: 'https://papers.future-work.pdf' }
  ]
};