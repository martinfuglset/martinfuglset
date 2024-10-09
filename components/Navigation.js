import Link from 'next/link';

export default function Navigation() {
  const sections = [
    { label: 'Curriculum Vitae', href: '/cv' },
    { label: 'Design Principles', href: '/design-principles' }
  ];

  return (
    <nav className="mt-10 mb-auto">
      <ul className="space-y-4">
        {sections.map((section, idx) => (
          <li key={idx}>
            <Link
              href={section.href}
              className="movable-link text-lg text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
