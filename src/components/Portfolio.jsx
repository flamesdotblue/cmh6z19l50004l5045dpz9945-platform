import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Ecommerce Revamp',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
    stack: ['Shopify', 'Tailwind', 'Cloudflare'],
    overview: 'Redesigned storefront with conversion-optimized UI and blazing performance.',
    url: '#',
  },
  {
    title: 'Workflow Automation',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    stack: ['n8n', 'Supabase', 'Next.js'],
    overview: 'Automated back-office operations to reduce manual tasks by 60%.',
    url: '#',
  },
  {
    title: 'SaaS Dashboard',
    image: 'https://images.unsplash.com/photo-1551281044-8d8c8df36a5a?q=80&w=1200&auto=format&fit=crop',
    stack: ['Bubble.io', 'Firebase', 'Stripe'],
    overview: 'Built a secure multi-tenant analytics dashboard with real-time updates.',
    url: '#',
  },
  {
    title: 'Cross-Platform App',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
    stack: ['Flutter', 'Supabase'],
    overview: 'Launched a mobile MVP on iOS and Android with offline-first design.',
    url: '#',
  },
];

export default function Portfolio({ preview = false }) {
  const items = preview ? projects.slice(0, 3) : projects;
  return (
    <div className={preview ? '' : 'bg-white dark:bg-[#0b0f17]'}>
      <div className={preview ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24'}>
        {!preview && (
          <>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Portfolio</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">Recent and notable projects across web, mobile, and automation.</p>
          </>
        )}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} loading="lazy" alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.overview}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">{s}</span>
                  ))}
                </div>
                <a href={p.url} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        {!preview && (
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-semibold hover:opacity-90">Start a Project</a>
          </div>
        )}
      </div>
    </div>
  );
}
