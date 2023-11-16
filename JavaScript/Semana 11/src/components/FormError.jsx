import PropTypes from "prop-types";

const FormError = ({ error }) => { //recibe el componente error
    return (
        <>
            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oops! </span>
                    {error.message}
                </p>
            )}
        </>
    );
};

FormError.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }),
};
export default FormError;