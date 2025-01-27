import Link from 'next/link';

export default function Navigation() {
  const sections = [
    { label: 'CV', href: '/cv' },
    { label: 'Projects', href: '/projects' },
    { label: 'Academia', href: '/academia' }
  ];

  return (
    <nav className="w-full">
      <ul className="flex flex-row justify-center space-x-4 md:space-x-6">
        {sections.map((section, idx) => (
          <li key={idx}>
            <Link
              href={section.href}
              className="text-lg py-2 px-4 hover:bg-gray-100 rounded-full transition-colors duration-300"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
