import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/`);
  };
  return (
    <header className="mainHeaderContainer">
      <img
        src={process.env.PUBLIC_URL + "/assets/recipesLogo.png"}
        alt="Joey's Food Logo"
        onClick={clickHandler}
        loading="lazy"
      />
        <hr />
    </header>
  );
};

export default Header;
