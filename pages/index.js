import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Martin Fuglset</title>
        <meta name="description" content="Welcome to the personal homepage of Martin Fuglset, a [Your Profession]." />
        <meta property="og:title" content="Martin Fuglset" />
        <meta property="og:description" content="Martin Fuglset's personal homepage." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Martin Fuglset" />
        <meta name="twitter:description" content="Welcome to my personal homepage." />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
      </Head>

      <main className="flex flex-col justify-start flex-1 px-10 text-left w-full max-w-3xl">
        <h1 className="text-lg text-black">
          Martin Fuglset
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          <span><em>Gott würfelt nicht</em></span> – Analytical mind crafting innovative solutions grounded in rigorous design principles.
        </p>


        <div className="flex mt-8 space-x-6">
          <a
            href="https://github.com"
            className="px-6 py-3 text-base font-medium border border-black rounded-md hover:bg-black hover:text-white transition duration-200"
            aria-label="Visit my GitHub"
          >
            GitHub &rarr;
          </a>
          <a
            href="https://linkedin.com"
            className="px-6 py-3 text-base font-medium border border-black rounded-md hover:bg-black hover:text-white transition duration-200"
            aria-label="Visit my LinkedIn"
          >
            LinkedIn &rarr;
          </a>
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 text-base font-medium border border-black rounded-md hover:bg-black hover:text-white transition duration-200"
            aria-label="Send me an email"
          >
            Email Me &rarr;
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Martin Fuglset. All rights reserved.
      </footer>
    </div>
  );
}
