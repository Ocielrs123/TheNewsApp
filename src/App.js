import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Footer } from './News/components';
import { Navbar2 } from './NewsLogged/components';
import Home from './News/components/Home';
import Home2 from './NewsLogged/components/Home';
import App2 from './Clima/App2';
import App21 from './ClimaLogged/App2';
import App3 from './Coronavirus/App3';
import App31 from './CoronavirusLogged/App3';
import App4 from './Login/App4';


function App() {
  return (
    <Router>

 
        <Route path='/Login' exact component={App4} />


    </Router>
    
  );
}
export default App;
