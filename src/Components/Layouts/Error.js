import "./Error.css";
import PropTypes from "prop-types";

const Error = ({ msg }) => {
  return (
    <div className="errorContainer">
    <div className="center"></div>
    <p>{msg}</p>
  </div>
  );
};

Error.propTypes = {
  msg: PropTypes.string,
};

export default Error;
