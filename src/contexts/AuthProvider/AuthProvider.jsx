import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const userPasswordUpdate = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };

  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userSignOut = () => {
    localStorage.removeItem("genius-token");
    setLoading(true);
    return signOut(auth);
  };

  const deleteUserAccount = () => {
    return deleteUser(auth.currentUser);
  };

  const verifyUserEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const authInfo = {
    user,
    loading,
    googleSign,
    createUser,
    userSignOut,
    signInUser,
    verifyUserEmail,
    updateUserProfile,
    deleteUserAccount,
    userPasswordUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
