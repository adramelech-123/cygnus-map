import { useState, useMemo } from "react";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { EducationCard } from "../components/EducationCard.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import { myMarkers } from "../data/markers.js";
import "./Database.css";

const DatabaseView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMarkers = useMemo(() => {
    return myMarkers.filter(
      (card) =>
        card.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.university.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <Navbar />
      <div className="database-container">
        <SearchFilter onSearchChange={handleSearchChange} />
        <div className="database-grid">
          {filteredMarkers.map((card, index) => (
            <EducationCard
              key={index}
              country={card.country}
              university={card.university}
              program_name={card.program_name}
              degree_lvl={card.degree_lvl}
              field={card.field}
              prog_url={card.prog_url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DatabaseView;
