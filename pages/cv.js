// pages/cv.js
import Layout from '../components/Layout';
import ExpandableSection from '../components/ExpandableSection';
import ExpandableBlock from '../components/ExpandableBlock';
import { calculateDuration } from '../utils/calculateDuration';

export default function Home() {
  return (
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
            startDate="Jul 2024" 
            endDate="" 
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
  );
}
