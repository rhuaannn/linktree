import PropTypes from "prop-types";
import "./Style.css";

const Button = ({ title, link}) => {
  return (
    <>
      <div className="button">
      <a href={link} className="button">
      <button className="btn">{title}</button>
      </a>
      </div>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
