import { createContext } from "react";

export default createContext({
  isLoggedIn: false,
  user: null,
  loaded: false,
});
