import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      document.documentElement.classList.toggle('dark', stored === 'dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0f17] dark:text-slate-100 antialiased selection:bg-blue-500/20 selection:text-blue-400">
      <Navbar />
      <Home />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
