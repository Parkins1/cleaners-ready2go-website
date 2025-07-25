
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async (): Promise<BlogPost[]> => {
      const response = await fetch('/api/blog-posts?published=true');
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json();
    }
  });

  const { data: featuredPost } = useQuery({
    queryKey: ['featured-post'],
    queryFn: async (): Promise<BlogPost | null> => {
      const response = await fetch('/api/blog-posts?published=true');
      if (!response.ok) return null;
      const posts: BlogPost[] = await response.json();
      return posts.length > 0 ? posts[0] : null;
    }
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading blog posts...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">
            Error loading blog posts. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <title>Cleaning Tips & Insights - Cleaners Ready 2Go | Professional Cleaning Blog</title>
      <meta name="description" content="Expert cleaning advice and tips from professional cleaners. Learn how to keep your home spotless between cleaning services with our comprehensive guides." />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-6">Cleaning Tips & Insights</h1>
            <p className="text-xl text-brand-gray">Expert advice to keep your home spotless between professional cleanings</p>
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <article className="mb-12 bg-gray-50 rounded-xl overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div>
                  <img 
                    src={featuredPost.imageUrl} 
                    alt={featuredPost.altText} 
                    className="w-full h-64 lg:h-full object-cover" 
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="text-brand-gold text-sm font-medium mb-2">FEATURED ARTICLE</div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-brand-gray mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-gray">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <button className="text-brand-gold font-medium hover:text-yellow-600 flex items-center">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.altText} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-brand-secondary to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-brand-gray text-base mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-gray">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <button className="bg-brand-primary hover:bg-brand-black text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg flex items-center">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-brand-black rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Weekly Cleaning Tips</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for expert cleaning advice delivered to your inbox</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-brand-gold" 
              />
              <button className="bg-brand-gold hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
