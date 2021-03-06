import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CreateAccountPage,
  EmailConfirmationLanderPage,
  SignInPage,
  ProtectedRoute,
  useAuth,
} from "../auth";
import { ReservationsListPage } from "../reservations";
import { RestaurantDetailPage } from "../restaurants";
import { EditProfilePage } from "../user";
import "./App.css";

export function App() {
  const { isLoading, user } = useAuth();
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/create-account">
          <CreateAccountPage />
        </Route>
        <ProtectedRoute
          isAuthed={!!user}
          isLoading={isLoading}
          path="/edit-profile"
        >
          <EditProfilePage />
        </ProtectedRoute>
        <Route path="/email-confirmation/success">
          <EmailConfirmationLanderPage success />
        </Route>
        <Route path="/email-confirmation/failure">
          <EmailConfirmationLanderPage />
        </Route>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path="/" exact>
          <ReservationsListPage />
        </ProtectedRoute>
        {/* <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/search'>
          <SearchPage />
        </ProtectedRoute> */}
        <ProtectedRoute
          isAuthed={!!user}
          isLoading={isLoading}
          path="/restaurants/:id"
        >
          <RestaurantDetailPage />
        </ProtectedRoute>
        {/* <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/write-a-review/:id'>
          <WriteAReviewPage />
        </ProtectedRoute>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/review/thank-you'>
          <WriteAReviewThankYouPage />
        </ProtectedRoute> */}
      </Switch>
    </Router>
  );
}
