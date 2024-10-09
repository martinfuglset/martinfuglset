import '@/styles/globals.css';
import Layout from '@/components/Layout'; // Using the correct alias

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
