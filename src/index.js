import React from "react";
import ReactDOM from "react-dom";

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var firebaseConfig = {
  apiKey: "AIzaSyAK3wNPKFCmGbIrDpVDYb_ZEaeD8EbBgYQ",
  authDomain: "restaurant-reservations-app.firebaseapp.com",
  databaseURL: "https://restaurant-reservations-app.firebaseio.com",
  projectId: "restaurant-reservations-app",
  storageBucket: "restaurant-reservations-app.appspot.com",
  messagingSenderId: "962725841954",
  appId: "1:962725841954:web:312564dd297d8f71ee4e7b",
  measurementId: "G-VW3DR1528M",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
