export default function SectorCard({ title, description }) {
  return (
    <div className="p-5 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
}