import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative min-h-[88vh] w-full grid place-items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white dark:from-black/60 dark:via-black/40 dark:to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-100 shadow backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-indigo-600" />
          Awwwards-level craft for modern brands
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
        >
          Cixorg Creatives
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300"
        >
          We design and build immersive websites and cinematic videos that move your audience and grow your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#/web"
            onClick={(e)=>{e.preventDefault(); onCTAClick('web');}}
            className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 bg-white/70 dark:bg-transparent backdrop-blur px-6 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:border-indigo-600"
          >
            Explore our work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
