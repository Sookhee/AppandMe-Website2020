import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style/utils.css';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import NotFound from './component/NotFound';
import Home from './component/Home';
import About from './component/About';
import Members from './component/Members';
import Apply from './component/Apply';
import FNA from './component/FNA';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <main>
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/members" component={Members}/>
              <Route path="/apply" component={Apply}/>
              <Route path="/fna" component={FNA}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
          <Footer/>
      </Router>

    </div>
  );
}

export default App;
