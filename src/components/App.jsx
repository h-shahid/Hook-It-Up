import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Users from "./Users";
import UserID from "./UserID";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Link to="/" className="btn btn-primary m-5">
        Home
        </Link>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/:id/details" component={UserID} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
