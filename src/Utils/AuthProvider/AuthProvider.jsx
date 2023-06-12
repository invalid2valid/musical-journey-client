import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../FireBase/FireBase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  // create user by email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user by email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //user logout
  const logOut = () => {
    return signOut(auth);
  };

  //update user's photo and name
  const updateNamePhoto = (name, photo) => {
    // console.log(name, photo, "from function");
    updateProfile(auth.currentUser, {
      displayName: `${name}`,
      photoURL: `${photo}`,
    });
  };

  //github login/sign up
  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //google login/sign up
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // watching the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //context api data
  const authInfo = {
    user,
    createUser,
    signIn,
    setUser,
    logOut,
    googleLogIn,
    loading,
    updateNamePhoto,
    reload,
    setReload,
  };
  // console.log(user);
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
