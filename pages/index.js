import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      <main className="flex flex-col justify-start flex-1 px-10 text-left w-full max-w-3xl">
        <h1 className="text-lg text-black">
          Martin Fuglset
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          <span className="text-gray-400">Gott würfelt nicht –</span> Analytical mind and systematic thinker, crafting innovative solutions by rigorous design principles.
        </p>

        <div className="flex mt-8 space-x-6">
          <a
            href="https://github.com/martinfuglset"
            className="px-6 py-3 text-base font-medium border border-black hover:bg-black hover:text-white transition duration-200"
            aria-label="Visit my GitHub"
          >
            GitHub &rarr;
          </a>
          <a
            href="https://www.linkedin.com/in/martinfuglset/"
            className="px-6 py-3 text-base font-medium border border-black hover:bg-black hover:text-white transition duration-200"
            aria-label="Visit my LinkedIn"
          >
            LinkedIn &rarr;
          </a>
          <a
            href="mailto:fuglsetm@gmail.com"
            className="px-6 py-3 text-base font-medium border border-black  hover:bg-black hover:text-white transition duration-200"
            aria-label="Send me an email"
          >
            Email &rarr;
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Martin Fuglset. All rights reserved.
      </footer>
    </div>
  );
}
