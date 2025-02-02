import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: string;
}

const posts: Record<string, Post> = {
  'end-of-localhost': {
    title: 'The End of Localhost',
    description: 'Why the cloud is becoming the default development environment',
    date: 'Feb 29, 2024',
    slug: 'end-of-localhost',
    content: `
      The localhost era of web development is coming to an end. As our applications grow in complexity
      and our teams become more distributed, the traditional local development environment is showing its limitations.
      
      The future of development is in the cloud, where environments are consistent, resources are unlimited,
      and collaboration is seamless.
    `
  },
  'next-14': {
    title: 'Next.js 14',
    description: 'Introducing Next.js 14 with major performance improvements',
    date: 'Oct 26, 2023',
    slug: 'next-14',
    content: `
      Today we're excited to announce Next.js 14, featuring:
      
      - Turbopack: 53% faster local server startup
      - Server Actions: Stable and ready for production
      - Partial Prerendering (Preview): The best of static and dynamic
      
      These improvements make Next.js faster and more reliable than ever before.
    `
  }
};

export default function Post() {
  const { slug } = useParams();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <article className="max-w-2xl mx-auto px-4 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <time className="text-sm text-gray-500">{post.date}</time>
        </header>
        <div className="prose prose-lg">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-800">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </article>
    </Layout>
  );
}