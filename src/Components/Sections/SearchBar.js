import "./SearchBar.css";
import PropTypes from "prop-types";

const SearchBar = ({ changeHandler, query }) => {
  return (
    <div className="searchBarContainer">
      <input
        placeholder="Search a recipe.."
        onChange={changeHandler}
        defaultValue={query}
      />
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string,
  changeHandler: PropTypes.func,
};

export default SearchBar;
