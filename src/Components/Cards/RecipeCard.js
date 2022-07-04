import "./RecipeCard.css";
import PropTypes from "prop-types";

const RecipeCard = ({ recipe }) => {
  const { title, image } = recipe;
  return (
    <div className="cardBoxContainer">
      <img
        src={
          image ||
          "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
        }
        alt="Recipe's Result"
        loading="lazy"
      />
      <h3>{title}</h3>
    </div>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default RecipeCard;
