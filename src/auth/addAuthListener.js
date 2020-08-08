import firebase from "firebase/app";

export const addAuthLister = (callback) => {
  const onChange = (user) => {
    if (user) {
      callback({});
    } else {
      callback(null);
    }
  };

  return firebase.auth().onAuthStateChanged(onChange);
};
