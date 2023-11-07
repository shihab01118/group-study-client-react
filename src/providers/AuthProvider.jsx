import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, imageURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageURL,
    });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
      // if user exist then issue a token
      if (currentUser) {
        axios
          .post("http://localhost:5000/api/v1/auth/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            const data = res.data;
            console.log("token response", data);
          });
      } else {
        axios.post("http://localhost:5000/api/v1/auth/logout", loggedUser, {withCredentials: true})
        .then(res => {
          const data = res.data;
          console.log(data);
        })
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    loginUser,
    googleSignIn,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
