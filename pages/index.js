import Link from 'next/link';
import { SiFigma } from 'react-icons/si';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { getMarkdownContent } from '../utils/getMarkdownContent';
import ReactMarkdown from 'react-markdown';

export default function Home({ markdownContent }) {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/martinfuglset', icon: <FiGithub size={24} /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/martinfuglset', icon: <FiLinkedin size={24} /> },
    { label: 'Email', href: 'mailto:fuglsetm@gmail.com', icon: <FiMail size={24} /> },
    { label: 'Figma', href: 'https://figma.com/@martinfuglset', icon: <SiFigma size={24} /> }
  ];

  return (
    <div className="flex flex-col items-center space-y-2 p-4 md:p-8">
      {/* Introduction Box */}
      <div className="w-full max-w-2xl p-8">
        <ReactMarkdown
          components={{
            h3: ({node, ...props}) => <h3 className="text-2xl mt-8 mb-4 text-gray-800 font-medium" {...props} />,
            p: ({node, ...props}) => <p className="text-lg text-gray-700 mb-4" {...props} />
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>

      {/* Social Links - Each in its own box */}
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-2xl p-6 bg-gray-50 rounded-lg border border-transparent hover:border-black transition-all duration-300 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {link.icon}
            <span className="text-lg">
              {link.label === 'Figma' ? 'Check out my Figma' :
              link.label === 'LinkedIn' ? 'Connect on LinkedIn' :
               link.label === 'Email' ? 'Shoot me an email' :
               'Check out my GitHub'}
            </span>
          </div>
          <FiArrowUpRight size={24} />
        </a>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  let content = '';
  try {
    content = getMarkdownContent('README.md');
  } catch (error) {
    console.error('Error loading markdown content:', error);
  }
  return {
    props: {
      markdownContent: content || 'No content found.',
    },
  };
}
