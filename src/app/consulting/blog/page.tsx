'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const { t } = useTranslation(['blog', 'common']);

  // Placeholder blog posts - in production, these would come from a CMS
  const blogPosts = [
    {
      title: t('blog:posts.post1.title'),
      excerpt: t('blog:posts.post1.excerpt'),
      date: '2025-01-15',
      readTime: '5 min read',
      category: t('blog:posts.post1.category'),
    },
    {
      title: t('blog:posts.post2.title'),
      excerpt: t('blog:posts.post2.excerpt'),
      date: '2025-01-10',
      readTime: '8 min read',
      category: t('blog:posts.post2.category'),
    },
    {
      title: t('blog:posts.post3.title'),
      excerpt: t('blog:posts.post3.excerpt'),
      date: '2025-01-05',
      readTime: '6 min read',
      category: t('blog:posts.post3.category'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-white">{t('blog:title')}</h1>
            <p className="body-large text-gray-100">
              {t('blog:subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <h2 className="heading-h3 mb-3">{post.title}</h2>
                <p className="body-default text-gray-600 mb-6">{post.excerpt}</p>
                <Button variant="outline" asChild>
                  <Link href={`/consulting/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {t('blog:readMore')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">{t('blog:stayUpdatedTitle')}</h2>
          <p className="body-large text-gray-600 mb-8">
            {t('blog:stayUpdatedDescription')}
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/contact">{t('blog:subscribe')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

