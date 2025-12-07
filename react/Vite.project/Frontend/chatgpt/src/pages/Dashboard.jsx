import Header from "../components/Header";
import PlanetStats from "../components/PlanetStats";
import SectorsSection from "../components/SectorsSection";
import EducationSection from "../components/EducationSection";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlanetStats />
        <SectorsSection />
        <EducationSection />
      </div>
      <Footer />
    </div>
  );
}