import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      <main className="flex-1 flex flex-col p-8 max-w-5xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
