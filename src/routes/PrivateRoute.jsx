import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();
    
    if (loading) {
        return <Loading />;
      }
    
      if (user) {
        return children;
      }
    
      return <Navigate to="/login" state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoute;