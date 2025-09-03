import { SEO } from "@/components/seo/SEO";

export default function Blog() {
  return (
    <>
      {/* Temporary noindex: Prevent indexing until real content is published (SEO-001) */}
      <SEO
        title="Blog — Coming Soon | Ready2Go Cleaners"
        description="Our blog is under construction. New guides and tips are coming soon."
        noindex
      />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Our Blog is Coming Soon</h1>
          <p className="text-lg text-text/90">
            We're currently creating great content for you. Check back soon for articles on cleaning tips, home care, and more.
          </p>
        </div>
      </section>
    </>
  );
}
