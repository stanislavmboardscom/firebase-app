import { initializeApp, getApps, getApp } from "firebase/app";

const app = !getApps().length
  ? initializeApp({
      apiKey: "",
      appId: "",
      authDomain: "",
      databaseURL: "",
      gtmId: "",
      measurementId: "",
      messagingSenderId: "",
      projectId: "",
      storageBucket: "",
    })
  : getApp();

export default app;
