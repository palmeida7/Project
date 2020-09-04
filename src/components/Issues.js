import React, {useState, useEffect} from 'react';
//import IssueList from './IssueList';
import firebase from '../Config';
import Issue from './Issue';


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

const Issues = () =>{
    const issues = useIssues()

    return (
        <ul class="list-group"> 
        {issues.map((issue, idx)=>
        <li class="list-group-item" key={idx}>
            <Issue issue={issue}/>
        </li>
        )}
    </ul>
    )
}

export default Issues;

