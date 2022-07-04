import "./RecipeInfo.css";

const RecipeInfo = ({recipe, toParagraph}) => {
  return (
    <div className="recipeDetailsContainer">
      <div className="recipeBasicInfoContainer">
        <img
          src={
            recipe?.image ||
            "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
          }
          alt="Recipe's Result"
          loading="lazy"
        />
      </div>
      <h3>{recipe?.title || ""}</h3>
      {recipe?.summary?.length ? (
        <div className="recipeSummary">
          <p>
            <b>Summary</b>
          </p>
          {toParagraph(recipe?.summary)}
        </div>
      ) : (
        <></>
      )}
      {recipe?.instructions?.length ? (
        <div className="recipeSummary">
          <p>
            <b>Instructions</b>
          </p>
          {toParagraph(recipe?.instructions)}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RecipeInfo;
