import { useEffect, useMemo, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import auth from "../useFirebaseAuth";

import AuthContext from "./FirebaseAuthContext";

export const useFirebaseAuthStateChangedListener = () => {
  const [firstCheck, setFirstCheck] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, async (userData) => {
      console.log("onAuthStateChanged", userData);
      if (userData) {
        try {
          setUser(() => userData);
        } catch (e) {
          // eslint-disable-next-line
          console.log(e);
        }
      } else {
        setUser(null);
      }

      setFirstCheck(() => false);
    });
  }, []);

  return { user, loaded: !firstCheck };
};

const FirebaseAuthProvider = ({ children }) => {
  const { user, loaded } = useFirebaseAuthStateChangedListener();

  const authState = useMemo(
    () => ({ user, isLoggedIn: !!user, loaded }),
    [user, loaded],
  );

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
