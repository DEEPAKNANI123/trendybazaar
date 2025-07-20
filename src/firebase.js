// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDoC_PdWeA0ruqAR0SSGljbbYacnDvU4M",
  authDomain: "trendybazaar-a342f.firebaseapp.com",
  projectId: "trendybazaar-a342f",
  storageBucket: "trendybazaar-a342f.appspot.com",
  messagingSenderId: "930656698426",
  appId: "1:930656698426:web:577a74111f67e59fd9f503"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
