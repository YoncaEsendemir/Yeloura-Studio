import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Campaigns from "@/components/sections/Campaigns"
import Treatments from "@/components/sections/Treatments"
import OurStory from "@/components/sections/OurStory"
import Blog from "@/components/sections/Blog"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"

// Tek sayfa iskeleti (doküman 05 + 09): header → section'lar → footer.
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Campaigns />
        <Treatments />
        <OurStory />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
