import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const [user, setUser] = useState(null);

  //   Sign Up User with E-mail & Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Sign In User with E-mail & Password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Login User With Google
  const userGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Update User Profile
  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //   Manage User [onAuthStateChanged]
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        const loggedUser = { email: currentUser.email };
        axios.post("jwt", loggedUser).then((res) => {
          console.log(res.data);
        });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axios]);

  //   User Log Out Section
  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const values = {
    createUser,
    loginUser,
    userGoogleLogin,
    updateUser,
    handleLogOut,
    user,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
