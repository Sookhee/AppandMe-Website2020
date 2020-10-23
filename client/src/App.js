import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style/utils.css';
import './App.css';
import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer/Footer';
import NotFound from './component/NotFound';
import About from './container/About/About';
import Member from './container/Members/Members';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <main>
            <Switch>
              <Route exact={true} path="/" component={About}/>
              <Route path="/members" component={Member}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
