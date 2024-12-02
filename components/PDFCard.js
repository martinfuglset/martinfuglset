// components/PDFCard.js
export default function PDFCard({ file }) {
    return (
      <a
        href={file.path}
        target="_blank"
        rel="noopener noreferrer"
        className="m-4" // Outer container with margin for spacing
      >
        <div className="flex flex-col items-center space-y-4 border border-gray-300 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-200 w-64 overflow-hidden">
          <div className="w-full h-48 bg-gray-50 flex items-center justify-center">
            <p className="text-gray-600">PDF Preview Placeholder</p>
          </div>
          <p className="text-gray-700 px-4 py-2 text-center">{file.name}</p>
          {/* Additional Context */}
          <p className="text-gray-500 px-4 pb-4 text-sm text-center">{file.context}</p>
        </div>
      </a>
    );
  }
  