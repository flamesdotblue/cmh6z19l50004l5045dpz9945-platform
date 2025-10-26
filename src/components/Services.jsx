import { Globe, Code, Smartphone } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, href }) => (
  <div className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-white/5 p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all">
    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow">
      <Icon size={22} />
    </div>
    <h4 className="mt-4 text-lg font-semibold">{title}</h4>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
    <a href={href} className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">Learn More</a>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="bg-white dark:bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Services</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">
          We don’t just build apps — we build experiences.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={Globe}
            title="Web Design"
            desc="UI/UX-driven websites powered by WordPress & Shopify. Responsive, fast, and conversion-focused."
            href="#contact"
          />
          <Card
            icon={Code}
            title="Web Applications"
            desc="Bubble.io front-ends with Supabase/Firebase backends and n8n automation for scalable workflows."
            href="#contact"
          />
          <Card
            icon={Smartphone}
            title="Mobile Applications"
            desc="Flutter-based cross-platform apps with custom logic and secure backend integration."
            href="#contact"
          />
        </div>
      </div>
    </section>
  );
}
