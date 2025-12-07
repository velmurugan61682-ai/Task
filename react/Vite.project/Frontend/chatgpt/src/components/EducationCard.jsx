export default function EducationCard({ name, type }) {
  return (
    <div className="p-5 bg-gray-50 rounded-xl shadow-sm border">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">{type}</p>
    </div>
  );
}