import Link from 'next/link';

export default function Academia() {
  const pdfFiles = [
    { name: 'Final assessment', path: '/pdfs/EBA.pdf', context: 'EBA 3420 Databases' }
  ];

  return (
    <div className="min-h-screen px-4 py-8">
      {/* PDF Gallery */}
      <div className="flex flex-wrap justify-center">
        {pdfFiles.map((file, idx) => (
          <Link
            key={idx}
            href={file.path}
            target="_blank"
            rel="noopener noreferrer"
            className="m-4" // Outer container with margin for spacing
          >
            <div className="flex flex-col items-center space-y-4 border border-gray-300 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200 w-64 overflow-hidden"> {/* Separate border and shadow */}
              <div className="w-full h-48 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400">PDF Preview Placeholder</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 px-4 py-2 text-center">
                {file.name}
              </p>
              {/* Additional Context */}
              <p className="text-gray-500 dark:text-gray-400 px-4 pb-4 text-sm text-center">
                {file.context}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
