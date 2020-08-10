import { firebase } from "firebase/app";

export const getRestaurant = aysnc id => {
    const restaurantDoc = await firebase.firestore()
        .collection("restaurant")
        .doc(id)
        .get();

    const restaurant = restaurantDoc.data();

    return {
        ...restaurant,
        id
    }
}