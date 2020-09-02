import React from 'react';

const Issue = ({issue}) => {
    return(
        <div className="issue-entry">
                    {issue.title} - {issue.summary}
                    <code className="priority">Priority: {issue.priority}</code>
        </div>
    )
}

export default Issue;