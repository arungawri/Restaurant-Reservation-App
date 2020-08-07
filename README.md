Tech Stack : React + Firebase

Aim: Making Local Reservations Fast And Simple

1.  The application needs some way to create an authenticate users and to prevent unauthenticated users from visiting any pages, besides the login and create account pages. => Firebase auth

2.  The application needs some way to store and access all the data for resources, such as users, restaurants, reservations, and reviews. => Firestore

3.  The application should allow the user to edit their profile information such as their name, bio and profile picture. => Firestore

4.  The application should allow users to make reservations at restaurants, taking into account the available times that the restaurant has. In other words, our application will need to keep track of the availability that certain restaurants have on a given day.

5.  The application should be able to send emails to users. For the time being, this will just be email address verification and reset password emails. => Firebase's serverless cloud functions

6.  The application should allow users to submit reviews for restaurants.

7.  The application should allow users to search for restaurants based on different criteria. Currently, we're only going to allow users to search by restaurant name.

8.  The application needs a way to store all the users profile photos, all the photos for restaurants and all of the photos that users upload along with their reviews so that they can be accessed by our site. => Firebase Cloud storage
