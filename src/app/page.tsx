import FeaturedCourses from "@/components/FeaturedCourses"
import HeroSection from "../components/HeroSection"
import WhyChooseUs from "@/components/WhyChooseUs"
import Cards from "@/components/Cards"
import Webinar from "@/components/Webinar"
import Footer from "@/components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
    <h1 className="text-2xl text-center"></h1>
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs />
    <Cards />
    <Webinar/>
    <Footer/>
    <SpeedInsights/>
    </main>
  )
}
