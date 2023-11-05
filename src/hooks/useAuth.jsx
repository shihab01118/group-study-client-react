import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const authentications = useContext(AuthContext);

    return authentications;
};

export default useAuth;