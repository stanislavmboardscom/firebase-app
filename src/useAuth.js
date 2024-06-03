import { useContext, useMemo } from "react";
import FirebaseAuthContext from "./providers/FirebaseAuthContext";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./useFirebaseAuth";

export const useFirebaseAuth = () => {
  const { user, isLoggedIn, loaded } = useContext(FirebaseAuthContext);

  const signIn = (data) => {
    const persistence = data.remember
      ? browserLocalPersistence
      : browserSessionPersistence;

    return setPersistence(auth, persistence).then(() =>
      signInWithEmailAndPassword(auth, data.email, data.password),
    );
  };

  const doSignOut = () => signOut(auth);

  return useMemo(
    () => ({
      user,
      isLoggedIn,
      loaded,
      doSignOut,
      signIn,
    }),
    [user, isLoggedIn, loaded],
  );
};

export const useAuth = () => {
  const { user, isLoggedIn, loaded, signIn, doSignOut } = useFirebaseAuth();

  return useMemo(() => {
    return {
      user,
      isLoggedIn,
      loaded,
      signIn,
      signOut: doSignOut,
    };
  }, [user, isLoggedIn, loaded, signIn, doSignOut]);
};
