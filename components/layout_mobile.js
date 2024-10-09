// components/layouts/MobileLayout.js
import Link from 'next/link';
import Head from 'next/head';

export default function MobileLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      {/* Mobile Header */}
      <header className="p-4 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700">
        <div className="text-lg text-gray-800 dark:text-gray-300 mb-4">
          <h1 className="text-2xl font-bold">
            <Link href="/">Martin Fuglset</Link>
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Gott würfelt nicht – Analytical mind and systematic thinker, crafting innovative solutions by rigorous design principles.
          </p>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="p-4 text-lg text-gray-800 dark:text-gray-300">
        <ul className="space-y-4">
          <li>
            <Link href="/cv">Curriculum Vitae</Link>
          </li>
          <li>
            <Link href="/design-principles">Design Principles</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-white dark:bg-black text-black dark:text-white">
        {children}
      </main>

      {/* Mobile Footer */}
      <footer className="p-4 bg-white dark:bg-black text-gray-500 dark:text-gray-400">
        <div className="flex flex-col space-y-2">
          <a
            href="https://github.com/martinfuglset"
            className="group relative inline-flex items-center"
            aria-label="Visit my GitHub"
          >
            <span>GitHub</span> <span className="ml-1">→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/martinfuglset/"
            className="group relative inline-flex items-center"
            aria-label="Visit my LinkedIn"
          >
            <span>LinkedIn</span> <span className="ml-1">→</span>
          </a>
          <a
            href="mailto:fuglsetm@gmail.com"
            className="group relative inline-flex items-center"
            aria-label="Send me an email"
          >
            <span>Email</span> <span className="ml-1">→</span>
          </a>
        </div>
        <div className="mt-4">
          <p>&copy; {new Date().getFullYear()}, Martin Fuglset</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
