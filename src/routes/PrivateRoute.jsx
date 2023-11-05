import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import loading_animation from '../assets/animations/loading_animation.json';
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();
    
    if (loading) {
        return (
          <div className="h-screen flex justify-center items-center">
            <Lottie className="h-40" animationData={loading_animation}></Lottie>
          </div>
        );
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