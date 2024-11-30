import Link from 'next/link';
import Cube from '../components/Cube';

export default function Home() {
  const sections = [
    { label: 'CV', href: '/cv' },
    { label: 'Projects', href: '/projects' },
    { label: 'Academia', href: '/academia' },
  ];

  return (
    <div className="flex flex-col items-center text-center overflow-hidden space-y-12"> {/* Add spacing here */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <Cube />
        <div className="text-lg space-y-3"> {/* Add spacing for the paragraphs */}
          <p className="text-gray-500">
            Currently studying business and data science.
          </p>
          <p className="text-gray-500">
            More than a decade of experience building digital products.
          </p>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="mb-8">
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
