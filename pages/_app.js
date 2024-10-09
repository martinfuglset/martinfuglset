import "@/styles/globals.css";
import { isMobile } from 'react-device-detect'; // Import mobile detection
import DesktopLayout from '../components/layout'; // Import your desktop layout
import MobileLayout from '../components/layout_mobile'; // Import your mobile layout

export default function App({ Component, pageProps }) {
  // Determine the layout based on whether the device is mobile or not
  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
