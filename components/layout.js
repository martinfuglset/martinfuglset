// components/layout.js
import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      {/* Left Side Panel (contains header, navigation, and footer) */}
      <div className="flex flex-col w-1/4 min-h-screen bg-white border-r p-10 fixed top-0 left-0">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-lg text-black">
            <Link href="/">Martin Fuglset</Link>
          </h1>
          <p className="mt-5 text-lg text-gray-500">
            Gott würfelt nicht – Analytical mind and systematic thinker, crafting innovative solutions by rigorous design principles.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-auto">
          <ul className="space-y-4">
            {[
              { label: 'Curriculum Vitae', href: '/cv' },
              { label: 'Design Principles', href: '/design-principles' }
            ].map((section, idx) => (
              <li key={idx}>
                <Link
                  href={section.href}
                  className="relative block text-lg text-gray-700 transition ease-in-out duration-200 hover:translate-x-2 hover:text-black transform"
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
                className="group relative inline-flex items-center transition ease-in-out duration-200"
                aria-label={link.aria}
              >
                <span>{link.label.split('→')[0]}</span> {/* Text before the arrow */}
                <span className="ml-1 transition-transform ease-in-out duration-200 group-hover:-rotate-45">→</span> {/* Arrow */}
              </a>
            ))}
          </div>
          <div className="mt-4 text-gray-500">
            <p>&copy; {new Date().getFullYear()} Martin Fuglset</p>
            <p>All rights reserved</p>
          </div>
        </footer>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-[25%] overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
