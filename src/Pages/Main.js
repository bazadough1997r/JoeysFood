import { useEffect, useState } from "react";
import { searchRecipes, getRecipes } from "../Services";
import {
  RecipesCard,
  RecipeCard,
  SearchBar,
  Error,
  NotFound,
  RecipesList,
} from "../Components";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [random, setRandom] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await getRecipes();
    if (data?.message) {
      setError(true);
      setErrorMsg(data?.message);
    } else {
      setRandom(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [error]);

  const changeHandler = async (event) => {
    setQuery(event.target.value);
    const data = await searchRecipes(event.target.value);
    setResults(data);
  };

  const clickHandler = (id) => {
    navigate(`/recipe/:${id}`);
  };

  const mappingSearchResults = () => {
    return results.map((recipe) => {
      return (
        <div
          className="recipeCardDiv"
          key={recipe?.id}
          onClick={() => clickHandler(recipe?.id)}
        >
          <RecipeCard recipe={recipe} />
        </div>
      );
    });
  };

  const mappingRandom = () => {
    return random.map((recipe) => {
      return (
        <div
          className="recipeCardDiv"
          key={recipe?.id}
          onClick={() => clickHandler(recipe?.id)}
        >
          <RecipeCard recipe={recipe} />
        </div>
      );
    });
  };

  return (
    <div className="mainContainer">
      <SearchBar changeHandler={changeHandler} query={query} />
      {error ? <Error msg={errorMsg} /> : <></>}

      {results.length ? (
        <RecipesCard>{mappingSearchResults()}</RecipesCard>
      ) : results.length === 0 && query.length > 0 ? (
        <NotFound />
      ) : (
        <RecipesList mappingRandom={mappingRandom()} />
      )}
    </div>
  );
};

export default Main;
