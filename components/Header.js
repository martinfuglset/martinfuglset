import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-8 text-lg text-gray-800">
      <div className="flex items-center space-x-3">
        <img 
          src="/profile.jpg" 
          alt="Profile Image" 
          className="w-10 h-10 rounded-full"
        />
        <h1 className="movable-link text-lg text-gray-800">
          <Link href="/">Martin Fuglset</Link>
        </h1>
      </div>
    </header>
  );
}
