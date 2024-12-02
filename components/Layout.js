import Head from 'next/head';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white transition-colors duration-500">
      <Head>
        <title>Martin Fuglset</title>
      </Head>

      {/* Left Side Panel - Hidden on Small Screens */}
      <aside className="hidden md:flex flex-col md:w-64 bg-white border-r border-gray-300 p-10 sticky top-0 h-screen">
        <Header />
        <Navigation />
        <Footer className="mt-auto" />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col p-4 md:p-8 bg-white text-black transition-colors duration-500 overflow-y-auto">
        {/* Header in Mobile View */}
        <div className="flex md:hidden justify-center mb-4">
          <Header />
        </div>

        {/* Content */}
        <div className="flex-1 w-full max-w-full"> {/* Ensure full width */}
          {children}
        </div>

        {/* Footer in Mobile View */}
        <div className="flex md:hidden justify-center mt-4">
          <Footer />
        </div>
      </main>
    </div>
  );
}
