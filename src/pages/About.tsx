import React from 'react';
import { Mail, Linkedin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { format } from 'date-fns';
import ScrambleText from '../components/ScrambleText';

interface TimelineItem {
  title: string;
  company: string;
  location: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  type: 'work' | 'education' | 'achievement';
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Design and Development Consultant for Digital Transformation',
    company: 'Freelance',
    location: 'Remote, Full-time',
    description: 'Leading IT-driven projects end to end, managing agency sites for marketing and sales, and consulting on design and tech framework architecture for new projects. Guided over 3 new businesses into full-operation within 6 months.',
    startDate: new Date('2024-07'),
    endDate: null,
    type: 'work'
  },
  {
    title: 'UX Designer for Design Systems',
    company: 'Charles Schwab',
    location: 'Remote, Full-time',
    description: 'Managed and maintained Charles Schwab\'s primary design system Everest, handling story audits and backlog prioritization. Led biweekly design oversight for UI Kit releases and implemented documentation templates in Confluence.',
    startDate: new Date('2021-08'),
    endDate: new Date('2023-04'),
    type: 'work'
  },
  {
    title: 'UX Engineer for Advisor Conversion Services',
    company: 'Charles Schwab',
    location: 'Austin, TX, Full-time',
    description: 'Built out the START notifications system and toasters for messaging updates. Implemented various new patterns and components such as tables, modals, and dynamic forms.',
    startDate: new Date('2019-08'),
    endDate: new Date('2021-08'),
    type: 'work'
  },
  {
    title: 'UX Designer for Advisor Conversion Services',
    company: 'Charles Schwab',
    location: 'Austin, TX, Full-time',
    description: 'Pilot designer behind the START lab, transforming IFA onboarding. Cut IFA onboarding times by more than 40% upon first delivery of the START conversion service.',
    startDate: new Date('2018-09'),
    endDate: new Date('2019-08'),
    type: 'work'
  },
  {
    title: 'Senior UX / UI Designer for Lands of America',
    company: 'CoStar Group',
    location: 'Austin, TX, Full-time',
    description: 'Enhanced user interfaces for 3+ products, improving user engagement resulting in a +20% increase. Developed intuitive property listing search concepts using Sketch and InVision prototypes.',
    startDate: new Date('2018-01'),
    endDate: new Date('2018-09'),
    type: 'work'
  },
  {
    title: 'Product Designer for Vendor Marketplace and Communications',
    company: 'The Knot',
    location: 'Austin, TX, Full-time',
    description: 'Created foundational styles for the initial planning of The Knot\'s design system. Increased vendor response rate from under 50% to over 70% through quick replies.',
    startDate: new Date('2016-09'),
    endDate: new Date('2017-10'),
    type: 'work'
  },
  {
    title: 'UX Designer for Dell Sales Application',
    company: 'Dell Technologies',
    location: 'Round Rock, TX, Full-time',
    description: 'Increased Dell Sales Application efficiency by 15% through contextual inquiry with 50+ sales team members. Built components for faster development turnaround in Angular.',
    startDate: new Date('2015-08'),
    endDate: new Date('2016-09'),
    type: 'work'
  },
  {
    title: 'Staff Sergeant for Security Forces',
    company: 'United States Air Force',
    location: 'United States',
    description: 'Deployed to Iraq in support of Operation Iraqi Freedom (OIF). Air Expeditionary Instructor for 6+ deployments.',
    startDate: new Date('2006-03'),
    endDate: new Date('2012-03'),
    type: 'work'
  },
  {
    title: 'Bachelor of Fine Arts in Communication Design',
    company: 'Texas State University',
    location: 'San Marcos, TX',
    description: 'Graduated with a Bachelor of Fine Arts in Communication Design, with a GPA of 3.63. Council of Scholars and Advertising Club member.',
    startDate: new Date('2013'),
    endDate: new Date('2015-04'),
    type: 'education'
  }
];

const sortedTimelineItems = [...timelineItems].sort((a, b) => 
  b.startDate.getTime() - a.startDate.getTime()
);

const getTimelineIcon = (type: TimelineItem['type']) => {
  switch (type) {
    case 'work':
      return Briefcase;
    case 'education':
      return GraduationCap;
    case 'achievement':
      return Award;
  }
};

const getCategoryColor = (type: TimelineItem['type']) => {
  switch (type) {
    case 'work':
      return 'bg-[#FF6B6B] text-white';
    case 'education':
      return 'bg-[#4ECDC4] text-white';
    case 'achievement':
      return 'bg-[#FFD93D] text-black';
  }
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <ScrambleText text="About Me" />
          </h1>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              Hey, I'm Nolan Figueroa. I'm a designer with a knack for making web experiences that feel smooth, intuitive, and a little magical. Right now, I'm diving into projects that simplify tech and make it easier for people to connect and create.
            </p>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              I love blending design and development, geeking out on AI, and finding new ways to build tools that actually make a difference. My goal? Keep things fun, impactful, and easy to use.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
            <a 
              href="mailto:nfigueroa06@gmail.com" 
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-[#8338ec] text-white border-2 border-black rounded-lg hover:bg-[#8338ec]/90 transition neubrutalism-shadow active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email me</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/nofigg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-black rounded-lg hover:bg-black/5 transition neubrutalism-shadow active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <ScrambleText text="Career Timeline" />
          </h2>
          <div className="grid gap-4 sm:gap-6">
            {sortedTimelineItems.map((item, index) => {
              const Icon = getTimelineIcon(item.type);
              
              return (
                <div key={index} className="group">
                  <article className="relative h-full bg-white p-4 sm:p-5 rounded-xl border-2 border-black 
                    hover:translate-y-[-2px] transition-all neubrutalism-shadow">
                    <div className="absolute top-4 right-4">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#8338ec] transition-colors" />
                    </div>
                    <div className="pr-8 space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-[#8338ec] 
                        transition-colors leading-tight">
                        <ScrambleText text={item.title} delay={Math.random() * 500} />
                      </h3>
                      <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 text-sm sm:text-base">
                        <span className="font-medium text-[#8338ec]">{item.company}</span>
                        <span className="hidden xs:block text-gray-400">•</span>
                        <span className="text-gray-600">{item.location}</span>
                      </div>
                      <p className="text-sm sm:text-base text-black/70">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4">
                      <span className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-md 
                        ${getCategoryColor(item.type)} neubrutalism-shadow`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                      <time className="text-xs sm:text-sm text-black/50">
                        {format(item.startDate, 'MMM yyyy')} - {item.endDate ? format(item.endDate, 'MMM yyyy') : 'Present'}
                      </time>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}