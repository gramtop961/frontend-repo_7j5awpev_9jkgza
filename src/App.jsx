import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WorkGrid from './components/WorkGrid.jsx';

const webItems = [
  {
    title: 'Fintech Dashboard',
    tag: 'SaaS UI',
    desc: 'Real-time analytics with delightful micro-interactions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Creative Studio',
    tag: 'Portfolio',
    desc: 'Playful 3D hero with buttery-smooth scroll animations.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'E-commerce Experience',
    tag: 'Commerce',
    desc: 'High-converting storefront with premium feel.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Tech Conference',
    tag: 'Event',
    desc: 'Vibrant landing with ticketing and agenda CMS.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Wellness Brand',
    tag: 'Brand Site',
    desc: 'Calm aesthetic and fluid content transitions.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'EdTech Platform',
    tag: 'Web App',
    desc: 'Fast, accessible learning experience at scale.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  }
];

const videoItems = [
  {
    title: 'Launch Teaser',
    tag: 'Motion',
    desc: 'High-energy product hype video with kinetic type.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Brand Film',
    tag: 'Narrative',
    desc: 'Cinematic story showcasing values and culture.',
    image: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Social Cutdowns',
    tag: 'Shorts',
    desc: 'Punchy edits optimized for every platform.',
    image: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Explainer',
    tag: 'Product',
    desc: 'Clear, engaging motion graphics sequence.',
    image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Event Recap',
    tag: 'Aftermovie',
    desc: 'Fast-cut recap that captures the vibe.',
    image: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Ad Spot',
    tag: 'Commercial',
    desc: 'Crisp visuals and catchy pacing for performance.',
    image: 'https://images.unsplash.com/photo-1501601964317-44e6d1d89d1d?q=80&w=1400&auto=format&fit=crop',
    href: '#'
  }
];

function useHashRoute() {
  const getPage = () => {
    const raw = window.location.hash.replace('#/', '').trim();
    if (raw === 'web' || raw === 'video' || raw === 'contact') return raw;
    return 'home';
  };
  const [page, setPage] = useState(getPage());
  useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const navigate = (p) => {
    const map = { home: '#/', web: '#/web', video: '#/video', contact: '#/contact' };
    window.location.hash = map[p] || '#/';
  };
  return { page, navigate };
}

export default function App() {
  const { page, navigate } = useHashRoute();

  const pageContent = useMemo(() => {
    if (page === 'web') {
      return (
        <WorkGrid
          title="Web Development"
          subtitle="Interfaces engineered for speed, beauty, and conversion."
          items={webItems}
        />
      );
    }
    if (page === 'video') {
      return (
        <WorkGrid
          title="Video Editing"
          subtitle="Visual stories that captivate attention and drive action."
          items={videoItems}
        />
      );
    }
    if (page === 'contact') {
      return (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Start a Project</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-center">Tell us about your goals and timeline. We’ll get back within 24 hours.</p>
            <form className="mt-10 grid grid-cols-1 gap-4">
              <input className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3" placeholder="Your name" />
              <input type="email" className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3" placeholder="Email" />
              <input className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3" placeholder="Company (optional)" />
              <textarea rows={5} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3" placeholder="Project details"></textarea>
              <a href="mailto:hello@cixorg.com" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-indigo-500">Send Inquiry</a>
            </form>
          </div>
        </section>
      );
    }
    return (
      <>
        <Hero onCTAClick={(p)=>navigate(p || 'contact')} />
        <Services />
        <WorkGrid
          title="Featured Web Work"
          subtitle="A selection of recent builds that push usability and polish."
          items={webItems.slice(0, 3)}
        />
        <WorkGrid
          title="Featured Video Work"
          subtitle="Edits and motion that make brands unforgettable."
          items={videoItems.slice(0, 3)}
        />
      </>
    );
  }, [page]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar currentPage={page} onNavigate={navigate} />
      <main>{pageContent}</main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Cixorg Creatives</p>
          <div className="text-sm text-gray-600 dark:text-gray-400">Built with passion for detail.</div>
        </div>
      </footer>
    </div>
  );
}
