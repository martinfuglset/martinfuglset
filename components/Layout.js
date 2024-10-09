import Head from 'next/head';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      <div className="flex flex-col md:flex-row">
        {/* Left Side Panel - Only Visible on Desktop */}
        <div className="hidden md:flex flex-col w-full md:w-1/4 bg-white dark:bg-black border-r border-gray-300 dark:border-gray-700 p-10">
          <Header />
          <Navigation />
          <Footer />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
          {children}
        </main>
      </div>
    </div>
  );
}
