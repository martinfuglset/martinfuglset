import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-8 text-lg text-gray-500 dark:text-gray-400">
      <h1 className="text-lg text-gray-800 dark:text-gray-300">
        <Link href="/">Martin Fuglset</Link>
      </h1>
      <p className="mt-5">
        Gott würfelt nicht – Analytical mind and systematic thinker, crafting innovative solutions by rigorous design principles.
      </p>
    </header>
  );
}
