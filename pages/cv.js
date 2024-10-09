// pages/cv.js
import Layout from '../components/layout';
import { useState } from 'react';

// Helper function to calculate the duration in years and months
function calculateDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate.toLowerCase() === 'present' ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return `${years > 0 ? years + ' yrs ' : ''}${months > 0 ? months + ' mos' : ''}`.trim();
}

export default function Home() {
  return (
    <Layout>
      <section className="w-3/4 mx-auto">
        {/* Experience Section */}
        <ExpandableSection title="Experience">
          <ExpandableBlock 
            title="Consultant" 
            subtitle="Private firm" 
            startDate="Aug 2020" 
            endDate="Present" 
            duration={calculateDuration("2020-08-01", "Present")} 
          />
          <ExpandableBlock 
            title="Data Engineer" 
            subtitle="Intrix AS" 
            startDate="Sep 2023" 
            endDate="Jun 2024" 
            duration={calculateDuration("2023-09-01", "2024-06-01")} 
          />
          <ExpandableBlock 
            title="Data Analyst" 
            subtitle="Equinavia" 
            startDate="Jun 2018" 
            endDate="Jul 2020" 
            duration={calculateDuration("2018-06-01", "2020-07-01")} 
            location="Connecticut, United States" 
          />
        </ExpandableSection>

        {/* Education Section */}
        <ExpandableSection title="Education">
          <ExpandableBlock 
            title="University of Oslo" 
            subtitle="Årsstudium, Computer Science (informatikk)" 
            startDate="Aug 2024" 
            endDate="Jun 2025" 
          />
          <ExpandableBlock 
            title="BI Norwegian Business School" 
            subtitle="BSc, Business and Economics (Siviløkonom)" 
            startDate="Aug 2020" 
            endDate="Jun 2023" 
          />
        </ExpandableSection>

        {/* Licenses & Certifications Section */}
        <ExpandableSection title="Licenses & Certifications">
          <ExpandableBlock 
            title="McKinsey Forward Program" 
            subtitle="McKinsey & Company" 
            duration="Issued Jul 2024" 
            credentialLink="https://www.credly.com/badges/392dff5b-6f69-4d52-9a47-90cbd0356b47/linked_in_profile" 
          />
          <ExpandableBlock 
            title="Python for Data Science, AI & Development" 
            subtitle="IBM"
            duration="Issued Jun 2021" 
            credentialID="JDHV5LVZZXLK" 
            credentialLink="https://www.coursera.org/account/accomplishments/certificate/JDHV5LVZ2XLK" 
          />
        <ExpandableBlock 
            title="Bloomberg Market Concepts" 
            subtitle="Bloomberg"
            duration="Issued Oct 2020" 
            credentialID="160233366970" 
          />
        </ExpandableSection>
      </section>
    </Layout>
  );
}

function ExpandableSection({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-base mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function ExpandableBlock({ title, subtitle, startDate, endDate, duration, location, credentialID, credentialLink }) {
    const [isOpen, setIsOpen] = useState(false);
  
    // Helper function to determine if a date is available
    const displayDateRange = startDate && endDate;
    const displayDuration = duration && duration.length > 0;
  
    return (
      <div
        className={`bg-gray-50 p-4 rounded cursor-pointer transition-colors ease-in-out duration-400 border border-transparent hover:bg-white hover:border-gray-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-base">{title}</p>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
          <div className="text-sm text-gray-500">{isOpen ? '−' : '+'}</div> {/* En dash used for minus */}
        </div>
        <div
          className={`overflow-hidden transition-all ease-in-out duration-400 ${
            isOpen ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <div className="mt-2">
            {/* Conditionally render dates and duration */}
            <p className="text-sm text-gray-500">
              {displayDateRange ? `${startDate} – ${endDate}` : startDate || endDate}
              {displayDateRange && displayDuration ? ' · ' : ''}
              {displayDuration && `${duration}`}
            </p>
            {location && <p className="text-sm text-gray-500">{location}</p>}
            {credentialID && <p className="text-sm text-gray-500">Credential ID: {credentialID}</p>}
            {credentialLink && (
              <a href={credentialLink} className="text-sm text-blue-500 hover:underline">
                Show credential
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
  
