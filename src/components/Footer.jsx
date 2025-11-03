export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Cixorg Creatives. All rights reserved.</p>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Designed & built with care.
        </div>
      </div>
    </footer>
  );
}
