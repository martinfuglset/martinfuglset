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
      <div className="flex flex-col w-1/4 min-h-screen bg-white border-r p-10">
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
              { label: 'Design Principles', href: '/design-principles' }
            ].map((section, idx) => (
              <li key={idx}>
                <Link
                  href={section.href}
                  className="relative text-lg text-gray-700 transition ease-in-out duration-200 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-200 hover:before:scale-x-100 hover:text-black"
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="mt-8">
          <div className="flex flex-col space-y-2">
            {[
              { href: 'https://github.com/martinfuglset', label: 'GitHub →', aria: 'Visit my GitHub' },
              { href: 'https://www.linkedin.com/in/martinfuglset/', label: 'LinkedIn →', aria: 'Visit my LinkedIn' },
              { href: 'mailto:fuglsetm@gmail.com', label: 'Email →', aria: 'Send me an email' },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="relative transition ease-in-out duration-200 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-200 hover:before:scale-x-100"
                aria-label={link.aria}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-4 text-gray-500">&copy; {new Date().getFullYear()} Martin Fuglset. All rights reserved.</p>
        </footer>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
