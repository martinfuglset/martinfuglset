import Head from 'next/head';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-black transition-colors duration-500">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      {/* Left Side Panel - Sticky */}
      <aside className="hidden md:flex flex-col w-full md:max-w-xs bg-white dark:bg-black border-r border-gray-300 dark:border-gray-700 p-10 sticky top-0 h-screen">
        <Header />
        <Navigation />
        <Footer className="mt-auto" /> {/* Footer pushed to the bottom */}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
