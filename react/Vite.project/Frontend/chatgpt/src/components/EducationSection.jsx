import EducationCard from "./EducationCard";

const institutions = [
  { name: "Central University", type: "Higher Education" },
  { name: "Tech Institute", type: "Technical Training" },
  { name: "Elementary Academy", type: "Primary School" },
];

export default function EducationSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Education Institutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {institutions.map((edu, i) => (
          <EducationCard key={i} name={edu.name} type={edu.type} />
        ))}
      </div>
    </div>
  );
}