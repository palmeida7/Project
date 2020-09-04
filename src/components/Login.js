import React, { useContext } from "react";
//import fire from '../config/Config';
import "../App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { AuthContext } from "../store";
import { Redirect } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
  });
}

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: (authResult) => <Redirect to="/" />,
  },
};

// const logOut = () => {
//   firebase
//     .auth()
//     .signOut()
//     .then(function () {
//       console.log("Come again!");
//     })
//     .catch(function () {
//       console.log("Error");
//     });
// };

const Login = () => {
  const { userData } = useContext(AuthContext);

  if (userData) {
    return <Redirect to="/" />;
  } else {
    return (
      <>
        <div className="proj-log"><h1>Project Restart</h1></div>
        <div className="display-log"><h1>Login or Sign Up</h1></div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </>
    );
  }
};

// class Login extends React.Component {
//     state={signedOn:false}

//     componentDidMount = () => {
//         firebase.auth().onAuthStateChanged(user => {
//             this.setState({signedOn:!!user})
//             console.log("user", user)
//         })

//     }

//     render(){
//         return(
//             <div>
//                 {this.state.signedOn ? (
//                     <>
//                     <div>Logged In</div>
//                     <button onClick={()=>firebase.auth().signOut()}>Log Out</button>
//                     <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
//                     </>
//                     ) : (
//                         <StyledFirebaseAuth
//                         uiConfig={this.uiConfig}
//                         firebaseAuth={firebase.auth()}
//                         />
//                     )}
//             </div>
//         )
//     }
// }

export default Login;
