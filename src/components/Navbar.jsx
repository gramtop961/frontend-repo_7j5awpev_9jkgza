import { useEffect, useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const links = [
  { key: 'home', label: 'Home', hash: '#/' },
  { key: 'web', label: 'Web Work', hash: '#/web' },
  { key: 'video', label: 'Video Work', hash: '#/video' },
  { key: 'contact', label: 'Contact', hash: '#/contact' },
];

export default function Navbar({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [currentPage]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-black/50 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#/" onClick={(e)=>{e.preventDefault(); onNavigate('home');}} className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold tracking-tight">Cixorg Creatives</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.key}
                href={l.hash}
                onClick={(e)=>{e.preventDefault(); onNavigate(l.key);}}
                className={`text-sm font-medium hover:text-indigo-600 transition-colors ${currentPage===l.key ? 'text-indigo-600' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#/contact"
              onClick={(e)=>{e.preventDefault(); onNavigate('contact');}}
              className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              Start a Project
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
            onClick={()=>setOpen(v=>!v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a
                key={l.key}
                href={l.hash}
                onClick={(e)=>{e.preventDefault(); onNavigate(l.key);}}
                className={`text-base font-medium ${currentPage===l.key ? 'text-indigo-600' : 'text-gray-700 dark:text-gray-200'}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#/contact"
              onClick={(e)=>{e.preventDefault(); onNavigate('contact');}}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
