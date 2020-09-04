import React from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import EditIssueForm from "./components/EditIssueForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/edit/:id" component={EditIssueForm} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
