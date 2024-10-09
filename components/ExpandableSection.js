// components/ExpandableSection.js
export default function ExpandableSection({ title, children }) {
    return (
      <div className="mb-8">
        <h2 className="text-lg mb-4">{title}</h2>
        <div className="space-y-4">{children}</div>
      </div>
    );
  }
  