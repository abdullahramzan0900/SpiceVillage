import { FaSearch } from "react-icons/fa";
import "../styles/searchbar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="searchbar">
      <FaSearch className="searchbar-icon" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search dishes, drinks or combinations..."
      />
    </div>
  );
};

export default SearchBar;
