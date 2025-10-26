import Hero from './Hero';
import Technologies from './Technologies';
import Services from './Services';
import Portfolio from './Portfolio';
import WhyChooseUs from './WhyChooseUs';
import CTA from './CTA';
import Contact from './Contact';

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <section id="work" className="bg-white dark:bg-[#0b0f17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">A glimpse into products we helped design, build, and scale.</p>
          <div className="mt-10">
            <Portfolio preview />
          </div>
        </div>
      </section>
      <Technologies />
      <Services />
      <WhyChooseUs />
      <CTA />
      <section id="about" className="bg-white dark:bg-[#0b0f17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Versa Sync Studios</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2 items-start">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Founded by developers and designers, Versa Sync Studios blends creativity with technology to ship scalable digital products. Every project starts with understanding your vision — we sync ideas with execution and deliver results across web, mobile, and automation.
            </p>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50/50 dark:bg-white/5">
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li>• From prototype to production</li>
                <li>• Collaborative, transparent process</li>
                <li>• Performance and scalability by default</li>
                <li>• Cross-platform expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
