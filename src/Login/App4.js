import React, {useState, useEffect} from 'react';
import fire from './Firebase';
import Login from './Login';
import './Style.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Footer } from '../News/components';
import { Navbar2 } from '../NewsLogged/components';
import Home from '../News/components/Home';
import Home2 from '../NewsLogged/components/Home';
import App2 from '../Clima/App2';
import App21 from '../ClimaLogged/App2';
import App3 from '../Coronavirus/App3';
import App31 from '../CoronavirusLogged/App3';
import LOGIN from './ElLogin';



const App4 = () => {
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

    return(
        
            (user ? (

        <Router>
            
        <Navbar2 handleLogOut={handleLogOut}/>
        <Route path='/News2' exact component={Home2} />
        <Route path='/Weather2' exact component={App21} />
        <Route path='/Coronavirus2' exact component={App3} />
        <Footer />
        </Router>

            ):(

        <Router>
            
        <Navbar />
        <Route path='/News' exact component={Home} /> 
        <Route path='/Weather' exact component={App2} />
        <Route path='/Coronavirus' exact component={App31} />
        <Route path='/LOGIN' exact component={LOGIN} />
        <Footer />
        </Router>
            ))
            
    
    );
}

export default App4;