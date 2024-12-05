import Link from 'next/link';
import Cube from '../components/Cube';
import { getMarkdownContent } from '../utils/getMarkdownContent';

export async function getStaticProps() {
  let content = '';
  try {
    content = getMarkdownContent('README.md'); // File is in the root directory
  } catch (error) {
    console.error('Error loading markdown content:', error);
  }
  return {
    props: {
      markdownContent: content || 'No content found.',
    },
  };
}

export default function Home({ markdownContent }) {
  const sections = [
    { label: 'CV', href: '/cv' },
    { label: 'Projects', href: '/projects' },
    { label: 'Academia', href: '/academia' },
  ];

  return (
    <div className="flex flex-col items-center text-center space-y-12 p-4 md:p-8">
      {/* Cube and Intro Text */}
      <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-full">
        <Cube />
        <div className="text-lg space-y-3">
          {/* Graceful handling of undefined or empty markdownContent */}
          {markdownContent
            ?.split('\n')
            .filter((line) => line.trim() !== '') // Ignore empty lines
            .map((line, idx) => (
              <p key={idx} className="text-gray-800">
                {line}
              </p>
            ))}
        </div>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
          {sections.map((section, idx) => (
            <li key={idx}>
              <Link href={section.href} legacyBehavior>
                <a className="block py-3 px-6 bg-white border border-gray-300 rounded-lg transition-colors duration-300 text-lg text-gray-800 hover:bg-gray-900 hover:text-white">
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
