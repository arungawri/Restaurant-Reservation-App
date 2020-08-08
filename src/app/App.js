import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CreateAccountPage,
  EmailConfirmationLanderPage,
  SignInPage,
} from "../auth";
import "./App.css";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/create-account">
          <CreateAccountPage />
        </Route>
        {/* <Route path="/edit-profile">
          <EditProfilePage />
        </Route> */}
        <Route path="/email-confirmation/success">
          <EmailConfirmationLanderPage success />
        </Route>
        <Route path="/email-confirmation/failure">
          <EmailConfirmationLanderPage />
        </Route>
        {/* <Route path="/" exact>
          <ReservationsListPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/restaurants/:id">
          <RestaurantDetailPage />
        </Route>
        <Route path="/write-a-review/:id">
          <WriteAReviewPage />
        </Route>
        <Route path="/review/thank-you">
          <WriteAReviewThankYouPage />
        </Route> */}
      </Switch>
    </Router>
  );
}
