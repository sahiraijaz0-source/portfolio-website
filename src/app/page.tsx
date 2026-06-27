import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';
import { FeaturedPortfolio } from '@/components/sections/FeaturedPortfolio';
import { Experience } from '@/components/sections/Experience';
import { Testimonials } from '@/components/sections/Testimonials';
import { WhyChooseMe } from '@/components/sections/WhyChooseMe';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Skills />
      <FeaturedPortfolio />
      <Experience />
      <Testimonials />
      <WhyChooseMe />
      <Process />
      <Contact />
    </main>
  );
}