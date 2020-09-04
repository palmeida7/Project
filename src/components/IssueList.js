import React from 'react';
import Issues from './Issues';
import './IssueList.css';




const IssueList = () => {
    
    return (
        <div className="issue-div">
            <h2>Issue List</h2>
            <Issues />
        </div>
    )
}

export default IssueList;