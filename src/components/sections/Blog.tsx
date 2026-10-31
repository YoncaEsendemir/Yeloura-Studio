import { blogPosts } from "@/data/blogPosts"
import BlogCard from "@/components/ui/BlogCard"
import SectionHeading from "@/components/ui/SectionHeading"

// Blog (doküman 05 §9.6): Beauty Journal, 3'lü kart gridi.
export default function Blog() {
  return (
    <section id="blog" className="bg-cream-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="BEAUTY JOURNAL"
          title="From the Blog"
          subtitle="Tips and rituals for your self-care routine."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((b, i) => (
            <BlogCard key={b.id} item={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
