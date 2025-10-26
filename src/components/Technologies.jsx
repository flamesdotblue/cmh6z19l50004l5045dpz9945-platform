export default function Technologies() {
  const stack = [
    'WordPress',
    'Shopify',
    'Bubble.io',
    'Flutter',
    'Supabase',
    'Firebase',
    'n8n',
    'Custom Code',
  ];
  return (
    <section className="bg-white dark:bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-center text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Technologies</p>
        <h3 className="text-center mt-2 text-xl sm:text-2xl font-semibold">Our versatile tech stack</h3>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Our versatile tech stack allows us to build anything from websites to enterprise-grade applications.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {stack.map((t) => (
            <div
              key={t}
              className="flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-white/5 px-3 py-2 text-sm font-medium"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
