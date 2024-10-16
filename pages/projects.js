// pages/projects.js
import Layout from '../components/Layout';
import ExpandableSection from '../components/ExpandableSection';
import ExpandableBlock from '../components/ExpandableBlock';

export default function Projects() {
  return (
      <section className="w-3/4 mx-auto">
        {/* Web Development Projects Section */}
        <ExpandableSection title="Web Development Projects">
          <ExpandableBlock 
            title="Portfolio Website" 
            subtitle="Personal Project" 
            startDate="Jan 2024" 
            endDate="Feb 2024" 
            description="Designed and developed a personal portfolio website using Next.js, Tailwind CSS, and deployed on Vercel. The site features dynamic content rendering, a blog section, and responsive design."
          />
          <ExpandableBlock 
            title="E-commerce Platform" 
            subtitle="Freelance Project" 
            startDate="Jun 2023" 
            endDate="Sep 2023" 
            description="Built an end-to-end e-commerce platform using React, Node.js, and Stripe for payment processing. Integrated product management, user authentication, and cart functionality."
          />
        </ExpandableSection>

        {/* Data Science Projects Section */}
        <ExpandableSection title="Data Science Projects">
          <ExpandableBlock 
            title="Sales Forecasting Model" 
            subtitle="Company X" 
            startDate="Mar 2023" 
            endDate="May 2023" 
            description="Developed a machine learning model to predict monthly sales for a retail company using Python and Scikit-learn. Achieved a 92% accuracy rate with the final model."
          />
          <ExpandableBlock 
            title="Customer Segmentation Analysis" 
            subtitle="Intrix AS" 
            startDate="Sep 2022" 
            endDate="Nov 2022" 
            description="Performed clustering analysis on customer data to identify distinct segments and tailored marketing strategies. Used Python, Pandas, and K-Means for the project."
          />
        </ExpandableSection>

        {/* Open Source Contributions Section */}
        <ExpandableSection title="Open Source Contributions">
          <ExpandableBlock 
            title="React Native Library" 
            subtitle="Open Source" 
            startDate="Feb 2024" 
            endDate="Present" 
            description="Contributed to an open-source library aimed at simplifying form validation in React Native applications. Submitted multiple pull requests, including one major feature addition."
          />
          <ExpandableBlock 
            title="Data Visualization Tool" 
            subtitle="Open Source" 
            startDate="Aug 2023" 
            endDate="Oct 2023" 
            description="Developed a data visualization plugin for an open-source JavaScript charting library. Implemented new chart types and enhanced performance for large datasets."
          />
        </ExpandableSection>
      </section>
  );
}
