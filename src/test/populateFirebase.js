const firebase = require("firebase");
require("firebase/firestore");

const {
  reservations,
  restaurants,
  dateAvailabilities,
  reviews,
} = require("./testData");

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

const db = firebase.firestore();

function populateCollection(collectionName, items) {
  return Promise.all(
    items.map((item) => {
      const { id, ...data } = item;
      return db.collection(collectionName).doc(id).set(data);
    })
  );
}

Promise.all([
  populateCollection("reservations", reservations),
  populateCollection("restaurants", restaurants),
  populateCollection("reviews", reviews),
  populateCollection("dateAvailabilities", dateAvailabilities),
])
  .then(() => {
    console.log("Done!");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
  });
