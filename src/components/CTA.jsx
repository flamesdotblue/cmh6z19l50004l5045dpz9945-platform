export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-white">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to build something exceptional? Let’s collaborate.</h3>
        <p className="mt-2 text-white/90 max-w-2xl">Tell us about your idea, and we’ll help you plan, design, and ship it with confidence.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:opacity-90">Start a Project</a>
          <a href="#work" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">Explore Our Work</a>
        </div>
      </div>
    </section>
  );
}
