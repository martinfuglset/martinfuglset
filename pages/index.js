// pages/index.js
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <Header></Header>
      <Navigation></Navigation>
    </div>
  );
}
