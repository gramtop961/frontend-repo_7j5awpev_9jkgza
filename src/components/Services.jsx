import { Code, Video, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    desc: 'High-performance, responsive websites powered by modern tech and thoughtful UX.'
  },
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'Cinematic edits, motion graphics, and dynamic story-driven content for every platform.'
  },
  {
    icon: Zap,
    title: 'Brand Experience',
    desc: 'From concept to launch, we craft cohesive experiences that feel alive.'
  }
];

export default function Services() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-transparent via-indigo-50/60 to-transparent dark:via-indigo-500/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">End-to-end creative and technical production to elevate your brand.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow hover:shadow-xl"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />
              <div className="relative">
                <s.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
