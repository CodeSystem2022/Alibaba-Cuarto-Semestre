import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Navigate, Outlet } from "react-router-dom";
//import PropTypes from "prop-types"; // Importa PropTypes para resplver problema del children en UserProvider.jsx

const LayoutRequireAuth = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container mx-auto px-4">
            <Outlet />
        </div>
    );
};

// Agrega la validación de props
/*LayoutRequireAuth.propTypes = {
    children: PropTypes.node.isRequired // Valida que se pase 'children' como prop
  };*/

export default LayoutRequireAuth;