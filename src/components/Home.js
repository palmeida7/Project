import React, {useState, useEffect} from 'react';
import firebase from "firebase";
import IssueList from "./IssueList";
import AddIssueForm from "./AddIssueForm";
import Logout from "./Logout";
import Email from "./Email";
import './Home.css';


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

function Home() {
  const issues = useIssues()

  return (
    <div className="App-home">
      <div class="home-div" >
        <div className="logout-div">
          <Logout />
        </div>
        <div>
          <div className="proj-log"><h1>Project Restart</h1></div>
          <h1>Welcome Home, {firebase.auth().currentUser.displayName}</h1>
          <h3>There are {issues.length} unresolved issues.</h3>
        </div>
        <IssueList />
        <div className="hook-con">
          <div>
            <AddIssueForm />
          </div>
          
          <div className="email-con">
            <Email />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
