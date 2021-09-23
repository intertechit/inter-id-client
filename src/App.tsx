import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Han from "./pages/Han";
import Home from "./pages/Home";
import KullaniciDuzenle from "./pages/KullaniciDuzenle";
import RozeteYorum from "./pages/RozeteYorum";
import RozetOnay from "./pages/RozetOnay";
import Sıralamalar from "./pages/Sıralamalar";
import TumRozetler from "./pages/TumRozetler";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/han" component={Han} />
        <Route exact path="/rozete-yorum" component={RozeteYorum} />
        <Route exact path="/" component={Home} />
        <Route exact path="/kullanici-duzenle" component={KullaniciDuzenle} />
        <Route exact path="/rozet-onay" component={RozetOnay} />
        <Route exact path="/siralamalar" component={Sıralamalar} />
        <Route exact path="/tum-rozetler" component={TumRozetler} />
      </Switch>
    </Router>
  );
}
