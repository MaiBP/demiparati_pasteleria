import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <IntroSection/>
      <Footer/>
    </main>
  );
}
