import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-8 text-lg text-gray-500 dark:text-gray-400">
      <h1 className="movable-link text-lg text-gray-800 dark:text-gray-300">
        <Link href="/">Martin Fuglset</Link>
      </h1>
      <p className="mt-5">
        Studying business and data science / computer science.
      </p>
    </header>
  );
}
