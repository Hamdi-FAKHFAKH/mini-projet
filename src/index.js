import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import FormCountClient from "components/Body/FormCountClient";
// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Connexion from "components/Body/Connexion";
import Service from "components/Body/Service";
import FormEntrepriser from "components/Body/FormEntrepriser";
import Contact from "components/Body/Contact";
import Profile from './components/Body/Profile';
/*import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

// others
/*<Route
path="/nucleo-icons"
render={(props) => <NucleoIcons {...props} />}
/>
<Route
path="/landing-page"
render={(props) => <LandingPage {...props} />}
/>
<Route
path="/profile-page"
render={(props) => <ProfilePage {...props} />}
/>
<Route
path="/register-page"
/>*/
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/inscrit" render={(props) => <FormCountClient {...props} />}/>
      <Route path="/connexion" render={(props) => <Connexion {...props} />}/>
      <Route path="/service" render={(props) => <Service {...props} />}/>
      <Route path="/entreprise" render={(props) => <FormEntrepriser {...props} />}/>
      <Route path="/contact" render={(props) => <Contact {...props} />}/>
      <Route path="/profile" render={(props) => <Profile {...props} />}/>
      <Redirect to="/index" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
