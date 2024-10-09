export default function Footer() {
  return (
    <footer className="mt-8 text-lg">
      <div className="flex flex-col space-y-2">
        <a href="https://github.com/martinfuglset" className="link-item text-gray-800 dark:text-gray-300 dark:hover:text-white">
          GitHub <span className="arrow">→</span>
        </a>
        <a href="https://www.linkedin.com/in/martinfuglset/" className="link-item text-gray-800 dark:text-gray-300 dark:hover:text-white">
          LinkedIn <span className="arrow">→</span>
        </a>
        <a href="mailto:fuglsetm@gmail.com" className="link-item text-gray-800 dark:text-gray-300 dark:hover:text-white">
          Email <span className="arrow">→</span>
        </a>
      </div>
      <div className="mt-4 text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()}, Martin Fuglset</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
