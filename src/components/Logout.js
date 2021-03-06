import React from "react";
import { auth } from "../Config";
import { useHistory } from "react-router";

export default () => {
  const history = useHistory();
  const handleLogout = async () => {
    await auth.signOut();
    history.push("/login");
  };

  return <button type="button" class="btn btn-primary" onClick={handleLogout}>Logout</button>;
};
