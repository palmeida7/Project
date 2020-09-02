import React from 'react';
import firebase from 'firebase';
import IssueList from './IssueList';
import AddIssueForm from './AddIssueForm';

function Home(){
    return(
        <div className="App">
          <h1>Project Restart</h1>
          {/* <Login /> */}
          <IssueList />
          <AddIssueForm />
        </div>
    );
  }

export default Home;