import Link from 'next/link';

export default function Home() {
  const sections = [
    { label: 'CV', href: '/cv' },
    { label: 'Projects', href: '/projects' },
    { label: 'Academia', href: '/academia' }
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="flex flex-col items-center space-y-6">
        <text className="text-lg">
        <p className="text-gray-500">Currently studying business, data science, and computer science.</p>
        <p className="text-gray-500">More than a decade of experience with building digital products.</p>
        </text>
      </div>
      
      <nav className="mt-12">
        <ul className="flex space-x-4">
          {sections.map((section, idx) => (
            <li key={idx}>
              <Link href={section.href} legacyBehavior>
                <a className="block py-3 px-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg transition-colors duration-300 text-lg text-gray-800 dark:text-gray-300 hover:bg-gray-900 hover:text-white">
                  {section.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
