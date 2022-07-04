import RecipesCard from "../Cards/RecipesCard";
import PropTypes from "prop-types";

const RecipesList = ({ mappingRandom }) => {
  return <RecipesCard>{mappingRandom}</RecipesCard>;
};

RecipesList.propTypes = {
  mappingRandom: PropTypes.array,
};

export default RecipesList;
