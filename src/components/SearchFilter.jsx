/* eslint-disable react/prop-types */
import {useState} from "react"

import "./SearchFilter.css";

const SearchFilter = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by country or university..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-filter__input"
      />
    </div>
  );
};

export default SearchFilter;
