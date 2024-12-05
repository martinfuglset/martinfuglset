import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-8 text-lg">
        <p className="movable-link text-lg">
          <Link href="/">Martin Fuglset</Link>
        </p>
    </header>
  );
}
