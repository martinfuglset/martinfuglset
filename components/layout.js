// components/Layout.js
import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      {/* Left Side Panel (contains header, navigation, and footer) */}
      <div className="flex flex-col w-1/4 min-h-screen bg-white dark:bg-black border-r border-gray-300 dark:border-gray-700 p-10 fixed top-0 left-0 transition-colors duration-500">
        {/* Header */}
        <header className="mb-8 text-lg text-gray-500 dark:text-gray-400 ">
          <h1 className="relative block text-lg text-gray-800 dark:text-gray-300 transition ease-in-out duration-200 hover:translate-x-2 hover:text-black dark:hover:text-white transform">
            <Link href="/">Martin Fuglset</Link>
          </h1>
          <p className="mt-5">
            Gott würfelt nicht – Analytical mind and systematic thinker, crafting innovative solutions by rigorous design principles.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mt-10 mb-auto"> {/* Added margin-top class here */}
          <ul className="space-y-4">
            {[
              { label: 'Curriculum Vitae', href: '/cv' },
              { label: 'Design Principles', href: '/design-principles' }
            ].map((section, idx) => (
              <li key={idx}>
                <Link
                  href={section.href}
                  className="relative block text-lg text-gray-800 dark:text-gray-300 transition ease-in-out duration-200 hover:translate-x-2 hover:text-black dark:hover:text-white transform"
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="mt-8 text-lg">
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
          <div className="mt-4 text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()}, Martin Fuglset</p>
            <p>All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-[25%] overflow-y-auto bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        {children}
      </main>
    </div>
  );
}
