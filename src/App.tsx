import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { ProjectGallery } from "./components/ProjectGallery";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { WhyInova } from "./components/WhyInova";
import { Process } from "./components/Process";
import { ServiceArea } from "./components/ServiceArea";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[200] bg-charcoal px-5 py-3 text-sm font-medium text-ivory focus:not-sr-only"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <BeforeAfterSection />
        <ProjectGallery />
        <Services />
        <Pricing />
        <WhyInova />
        <Process />
        <ServiceArea />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
