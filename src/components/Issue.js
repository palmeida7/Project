import React from "react";
import { Link } from "react-router-dom";

const Issue = ({ issue }) => {
  return (
    <div className="issue-entry">
      {issue.title} - {issue.summary}
      <code className="priority">Priority: {issue.priority}</code>{" "}
      <Link to={"/edit/" + issue.id}>Edit</Link>
    </div>
  );
};

export default Issue;
