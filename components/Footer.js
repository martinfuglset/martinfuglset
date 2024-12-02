export default function Footer() {
  return (
    <footer className="mt-8 text-lg flex flex-col items-center md:items-start text-center md:text-left space-y-4">
      {/* Links Section */}
      <div className="flex flex-row md:flex-col md:space-y-2 space-x-4 md:space-x-0">
        <a
          href="https://github.com/martinfuglset"
          className="link-item text-gray-800 hover:text-black group"
        >
          GitHub
          <span className="hidden md:inline-block ml-2 transition-transform duration-300 transform group-hover:-rotate-45">
            →
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/martinfuglset/"
          className="link-item text-gray-800 hover:text-black group"
        >
          LinkedIn
          <span className="hidden md:inline-block ml-2 transition-transform duration-300 transform group-hover:-rotate-45">
            →
          </span>
        </a>
        <a
          href="mailto:fuglsetm@gmail.com"
          className="link-item text-gray-800 hover:text-black group"
        >
          Email
          <span className="hidden md:inline-block ml-2 transition-transform duration-300 transform group-hover:-rotate-45">
            →
          </span>
        </a>
      </div>

      {/* Attribution Section */}
      <div className="text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()}, Martin Fuglset.
          <br className="hidden md:inline-block" />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
