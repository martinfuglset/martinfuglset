import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      {/* Header with Navigation merged */}
      <header className="p-4 md:p-8 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700 transition-colors duration-500">
        <div className="text-lg text-gray-800 dark:text-gray-300 mb-4">
          <h1 className="text-2xl font-bold transition ease-in-out duration-200 hover:translate-x-2 hover:text-black dark:hover:text-white">
            <Link href="/">Martin Fuglset</Link>
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-normal">
            Gott würfelt nicht – Analytical mind and systematic thinker, crafting innovative solutions by rigorous design principles.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-4 md:mt-6">
          <ul className="space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row">
            {[
              { label: 'Curriculum Vitae', href: '/cv' },
              { label: 'Design Principles', href: '/design-principles' }
            ].map((section, idx) => (
              <li key={idx}>
                <Link
                  href={section.href}
                  className="block text-lg text-gray-800 dark:text-gray-300 transition ease-in-out duration-200 hover:translate-x-2 hover:text-black dark:hover:text-white"
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        {children}
      </main>

      {/* Footer */}
      <footer className="p-4 md:p-8 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 transition-colors duration-500">
        <div className="flex flex-col space-y-2">
          {[
            { href: 'https://github.com/martinfuglset', label: 'GitHub →', aria: 'Visit my GitHub' },
            { href: 'https://www.linkedin.com/in/martinfuglset/', label: 'LinkedIn →', aria: 'Visit my LinkedIn' },
            { href: 'mailto:fuglsetm@gmail.com', label: 'Email →', aria: 'Send me an email' },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="group relative inline-flex items-center transition ease-in-out duration-200 text-gray-800 dark:text-gray-300 dark:hover:text-white"
              aria-label={link.aria}
            >
              <span>{link.label.split('→')[0]}</span> {/* Text before the arrow */}
              <span className="ml-1 transition-transform ease-in-out duration-200 group-hover:-rotate-45">→</span> {/* Arrow */}
            </a>
          ))}
        </div>
        <div className="mt-4">
          <p>&copy; {new Date().getFullYear()}, Martin Fuglset</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
