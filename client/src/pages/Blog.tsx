import { SEO } from "@/components/seo/SEO";
import JsonLd from "@/components/seo/JsonLd";
import { makeWebPage, makeBreadcrumb } from "@/components/seo/schema";
import { site } from "@/config/site";

export default function Blog() {
  return (
    <>
      {/* Temporary noindex: Prevent indexing until real content is published (SEO-001) */}
      <SEO
        title="Blog—Coming Soon | Cleaners Ready 2 Go"
        description="Our blog is under construction. New guides and tips are coming soon."
        noindex
      />
      <JsonLd
        data={[
          makeWebPage({
            siteUrl: site.url,
            path: "/blog",
            title: "Blog—Coming Soon | Cleaners Ready 2 Go",
            description: "Our blog is under construction. New guides and tips are coming soon.",
          }),
          makeBreadcrumb([
            { name: "Home", url: `${site.url}/` },
            { name: "Blog", url: `${site.url}/blog` },
          ]),
        ]}
      />
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Our Blog is Coming Soon</h1>
          <p className="text-lg text-text/90">
            We're currently creating great content for you. Check back soon for articles on cleaning tips, home care, and more.
          </p>
        </div>
      </section>
    </>
  );
}
