import React, {useState, useEffect} from 'react';
import Issues from './Issues';
import './IssueList.css';

import firebase from '../Config';

function useIssues(){
    const [issue, setIssue] = useState([]);

    useEffect(() =>{
        const unsubscribe = firebase
            .firestore()
            .collection('issues')
            .onSnapshot((snapshot) => {
                const newIssues = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }))
                setIssue(newIssues)
        })
        return () => unsubscribe()
    }, []);

    return issue

}

const IssueList = () => {
    const issues = useIssues()
    const [radio, setRadio] = useState("high");
    return (
        <div className="issue-div">
            <h2>Issue List</h2>
            <>
                <legend>Priority: </legend>
            </>
            <div className="input-div">
                <input type="radio" id="high" name="priority" checked={radio === "high"} value="high" onChange={(e)=>{setRadio(e.target.value)}} />
                <label for="high">High</label><br />
                <input type="radio" id="medium" name="priority" value="medium" />
                <label for="female">Medium</label><br />
                <input type="radio" id="low" name="priority" value="low" />
                <label for="other">Low</label>
            </div>
            <div>
                <input type="button" id="reset" name="priority" value="reset" />
            </div>
            <Issues />
        </div>
    )
}

export default IssueList;