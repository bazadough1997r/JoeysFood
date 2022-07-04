import "./RecipesCard.css";

const RecipesCard = (props) => {
  const {children} = props
  return (
    <div className="recipesContainer">
      {children}
    </div>
  );
};

export default RecipesCard;
