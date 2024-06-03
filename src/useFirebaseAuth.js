import { getAuth } from "firebase/auth";
import appFirebase from "./appFirebase";

const auth = getAuth(appFirebase);

export default auth;
