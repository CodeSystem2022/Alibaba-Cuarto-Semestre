import PropTypes from "prop-types";
const Title = ({ text }) => (
    <h1 className="text-center my-5 text-2xl">{text}</h1>
);
Title.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Title;