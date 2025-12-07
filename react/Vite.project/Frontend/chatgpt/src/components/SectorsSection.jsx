import SectorCard from "./SectorCard";

const sectors = [
  { title: "Technology", description: "AI, automation & digital systems." },
  { title: "Agriculture", description: "Smart farming & food sustainability." },
  { title: "Energy", description: "Renewable & planetary power grids." },
  { title: "Healthcare", description: "Advanced medical & biotech systems." },
  { title: "Transportation", description: "Hyperloop & sky transit systems." },
  { title: "Commerce", description: "Planet-wide trade & economy." },
];

export default function SectorsSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Planet Sectors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sectors.map((s, index) => (
          <SectorCard key={index} title={s.title} description={s.description} />
        ))}
      </div>
    </div>
  );
}