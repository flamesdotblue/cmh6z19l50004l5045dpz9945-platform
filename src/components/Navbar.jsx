import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = stored || (prefersDark ? 'dark' : 'light');
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0b0f17]/60 border-b border-slate-200/50 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 via-indigo-500 to-sky-400 shadow-inner" />
            <span className="text-base sm:text-lg font-semibold tracking-wide">Versa Sync Studios</span>
          </a>
          <nav className="hidden md:flex items-center">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#contact"
              className="ml-3 inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              Start a Project
            </a>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-3 space-y-1">
            <NavLink href="#work" onClick={() => setOpen(false)}>Work</NavLink>
            <NavLink href="#services" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
