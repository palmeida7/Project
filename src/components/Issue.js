import React from "react";
//import firebase, { db } from "../Config";
import { Link } from "react-router-dom";
import './Issue.css';




function Issue({issue}) {

  

  return (
    <div className="issue-entry">
      {issue.title} - {issue.summary}
      <code className="priority">Priority: {issue.priority}</code>{" "}
      <Link to={"/edit/" + issue.id}>Review</Link>
   
    </div>
  );
};

export default Issue;
