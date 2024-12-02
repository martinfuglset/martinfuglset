// pages/academia.js
import PDFCard from '@/components/PDFCard';

export default function Academia() {
  const pdfFiles = [
    { name: 'Final assessment', path: '/pdfs/EBA.pdf', context: 'EBA 3420 Databases' },
  ];

  return (
    <div className="min-h-screen px-4 py-8">
      {/* PDF Gallery */}
      <div className="flex flex-wrap justify-center">
        {pdfFiles.map((file, idx) => (
          <PDFCard key={idx} file={file} />
        ))}
      </div>
    </div>
  );
}
