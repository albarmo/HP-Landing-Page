import React from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Detail } from "./pages";
import { NavbarComponent } from "./components";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="app">
      <NavbarComponent menu={{ name: "propsname", path: "propsPath" }} />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
