export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 via-indigo-500 to-sky-400 shadow-inner" />
              <span className="text-base font-semibold tracking-wide">Versa Sync Studios</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-md">
              © Versa Sync Studios — Powered by Code & Creativity.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#work" className="hover:underline">Work</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hello@versasync.studio" className="hover:underline">hello@versasync.studio</a></li>
              <li><span className="text-slate-600 dark:text-slate-400">Mon–Fri, 9am–6pm</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500 dark:text-slate-500">
          Built with React, Vite, and Tailwind.
        </div>
      </div>
    </footer>
  );
}
