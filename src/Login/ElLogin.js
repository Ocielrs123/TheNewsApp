import React, {useState, useEffect} from 'react';
import Login from './Login';
import fire from './Firebase';

function LOGIN({props}) {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const [passerror, setPasserror] = useState('');
  const [hasacc, setHasacc] = useState(false);


  const clearInputs = () => {
    setEmail('');
    setPass('');
}

const clearErrors = () => {
    setEmailerror('');
    setPasserror('');
}

const handleLogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .catch((err) =>{
        switch(err.code){
            case "auth/invlaid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                setEmailerror(err.message);
                break;
            case "auth/wrong-password":
                setPasserror(err.message);
                break;
        }
    });
};

const handleSignUp = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .catch((err) =>{
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
                setEmailerror(err.message);
                break;
            case "auth/weak-password":
                setPasserror(err.message);
                break;
        }
    });
};

const handleLogOut = () =>{
    fire
    .auth()
    .signOut();
};

const authListener = () =>{
    fire.auth().onAuthStateChanged(user =>{
      if(user){
          clearInputs();
          setUser(user);
      }else{
         setUser(""); 
      }  
    });
};



useEffect (() => {
    authListener();
}, [])
  return (
    <div>
        <Login 
            email={email}
            setEmail={setEmail}
            pass={pass}
            setPass={setPass}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasacc={hasacc}
            setHasacc={setHasacc}
            emailerror={emailerror}
            passerror={passerror}
        />
        
    </div>
    
  );
}
export default LOGIN;

