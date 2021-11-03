import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "./components/home/LandingPage";
import Footer from "./components/main/Footer";
import { useState } from "react";
import Auth from "./auth/Auth";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const updateToken = (newToken) => {
    if (newToken === undefined) {
      return;
    } else {
      localStorage.setItem("sessionToken", newToken);
      setSessionToken(newToken);
    }
  };

  return (
    <div className="app">
      <LandingPage />,
      <Router>
        <Switch>
          <Auth updateToken={updateToken} />,
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
