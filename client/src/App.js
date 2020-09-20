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
import Mypage from './component/Mypage';
import FAQ from './component/FAQ';
import AdminOnly from './component/AdminOnly';

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
              <Route path="/mypage" component={Mypage}/>
              <Route path="/faq" component={FAQ}/>
              <Route path="/adminonly" component={AdminOnly}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
