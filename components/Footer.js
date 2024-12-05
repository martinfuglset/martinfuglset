export default function Footer() {
  const links = [
    { href: "https://github.com/martinfuglset", label: "GitHub" },
    { href: "https://www.linkedin.com/in/martinfuglset/", label: "LinkedIn" },
    { href: "mailto:fuglsetm@gmail.com", label: "Email" },
  ];

  return (
    <footer className="mt-8 text-lg flex flex-col items-center md:items-start text-center md:text-left space-y-4">
    
      <div className="flex flex-row md:flex-col md:space-y-2 space-x-4 md:space-x-0">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="link-item group"
          >
            {link.label}
            <span className="hidden md:inline-block ml-2 transition-transform duration-300 transform group-hover:-rotate-45">
              →
            </span>
          </a>
        ))}
      </div>

      <div className="text-sm">
        <p>
          &copy; {new Date().getFullYear()}, Martin Fuglset.
          <br className="hidden md:inline-block" />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
