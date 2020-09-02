import React, {useState} from 'react';
import './App.css';
import IssueList from './components/IssueList';
import AddIssueForm from './components/AddIssueForm';

import Home from './components/Home';
import Login from './components/Login';


import { BrowserRouter as Router, Route } from 'react-router-dom';



//import firebase from './Config';

// firebase.firestore().collection('issues').add({
//   title: 'Server Down',
//   priority: 'high',
//   summary: 'Did you turn it on and off'
// })


function App(){
  const [user, setUser] = useState(null);
  return(
    <Router>
      <div className="App">
        <h1>Project Restart</h1>
        <Login setUser={setUser} user={user}/>
      </div>
      <>
        {user && <Home />}
      </>
    </Router>
  );
}

export default App;