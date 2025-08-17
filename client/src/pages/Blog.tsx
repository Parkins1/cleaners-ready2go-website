// llm:content-card-migrated
import { ArrowRight } from "lucide-react";
import ContentCard from "@/components/ContentCard/ContentCard";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Cleaning Supplies Every Home Needs",
      excerpt: "A comprehensive guide to building the perfect cleaning supply kit for every room in your home.",
      category: "SPRING CLEANING",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Organized cleaning supplies and tools"
    },
    {
      id: 2,
      title: "Deep Clean Your Kitchen Like a Pro",
      excerpt: "Professional techniques to tackle grease, grime, and hard-to-reach areas in your kitchen.",
      category: "KITCHEN TIPS",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Sparkling clean kitchen with organized countertops"
    },
    {
      id: 3,
      title: "5-Minute Bathroom Cleaning Routine",
      excerpt: "Quick daily cleaning habits that keep your bathroom fresh and guest-ready at all times.",
      category: "BATHROOM",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Clean modern bathroom with white tiles and fixtures"
    },
    {
      id: 4,
      title: "Decluttering Before Deep Cleaning",
      excerpt: "Why organizing first makes professional cleaning more effective and cost-efficient.",
      category: "ORGANIZATION",
      date: "February 25, 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Organized bedroom closet with neat clothing arrangement"
    },
    {
      id: 5,
      title: "Green Cleaning: Safe for Family & Pets",
      excerpt: "Natural cleaning solutions that are effective and safe for your family and furry friends.",
      category: "ECO-FRIENDLY",
      date: "February 20, 2024",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Natural eco-friendly cleaning products and supplies"
    },
    {
      id: 6,
      title: "Preparing Your Home for Spring",
      excerpt: "A checklist for seasonal deep cleaning and what to tackle first when spring arrives.",
      category: "SEASONAL",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Bright living room prepared for seasonal cleaning"
    }
  ];

  return (
    <>
      <title>Cleaning Tips & Insights - Cleaners Ready 2Go | Professional Cleaning Blog</title>
      <meta name="description" content="Expert cleaning advice and tips from professional cleaners. Learn how to keep your home spotless between cleaning services with our comprehensive guides." />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text mb-6">Cleaning Tips & Insights</h1>
            <p className="text-xl text-text">Expert advice to keep your home spotless between professional cleanings</p>
          </div>

          {/* Featured Article */}
          <article className="mb-12 bg-surface rounded-xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Clean organized home office workspace" 
                  className="w-full h-64 lg:h-full object-cover" 
                  width="800"
                  height="600"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="text-accent text-sm font-medium mb-2">FEATURED ARTICLE</div>
                <h2 className="text-2xl lg:text-3xl font-bold text-text mb-4">
                  10 Daily Habits for a Consistently Clean Home
                </h2>
                <p className="text-text mb-6 leading-relaxed">
                  Discover simple daily routines that professional cleaners use to maintain spotless homes. These habits take just minutes but make a huge difference in keeping your space organized and clean between professional services.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text">Published March 15, 2024</span>
                  <button className="text-accent font-medium hover:text-accent-dark flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <ContentCard key={post.id} as="article">
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="w-full h-48 object-cover"
                  width="800"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <div className="text-accent text-sm font-medium mb-2">{post.category}</div>
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {post.title}
                  </h3>
                  <p className="text-text text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text">{post.date}</span>
                    <button className="text-accent text-sm font-medium hover:text-accent-dark">Read More</button>
                  </div>
                </div>
              </ContentCard>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-text rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Weekly Cleaning Tips</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for expert cleaning advice delivered to your inbox</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-accent"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
