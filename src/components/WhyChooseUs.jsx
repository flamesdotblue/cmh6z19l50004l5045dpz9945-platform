export default function WhyChooseUs() {
  const points = [
    'End-to-End Expertise',
    'Performance & Scalability',
    'Cross-Platform Development',
    'Fast Turnaround',
  ];
  return (
    <section className="bg-slate-50 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Choose Us</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 p-6">
              <p className="font-medium">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
