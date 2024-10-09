// components/ExpandableBlock.js
import { useState } from 'react';

export default function ExpandableBlock({
  title,
  subtitle,
  startDate,
  endDate,
  duration,
  location,
  credentialID,
  credentialLink,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-gray-50 dark:bg-gray-900 p-4 rounded cursor-pointer transition-colors ease-in-out duration-400 border border-transparent hover:bg-white dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-base text-gray-900 dark:text-gray-100">{title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
        <div className="text-sm text-gray-500">{isOpen ? '−' : '+'}</div>
      </div>
      <div
        className={`overflow-hidden transition-all ease-in-out duration-400 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className="mt-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {startDate} – {endDate} {duration && ` · ${duration}`}
          </p>
          {location && <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>}
          {credentialID && (
            <p className="text-sm text-gray-500 dark:text-gray-400">Credential ID: {credentialID}</p>
          )}
          {credentialLink && (
            <a href={credentialLink} className="text-sm text-gray-700 hover:underline dark:text-gray-200">
              Show credential
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
