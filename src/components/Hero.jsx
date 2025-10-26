import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[88vh] isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            We Build Websites, Web Apps & Mobile Apps that Sync with Your Vision.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl">
            From concept to launch — Versa Sync Studios transforms ideas into powerful digital products.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md bg-white/95 text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white"
            >
              Explore Our Work
              <ChevronRight className="ml-2" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
