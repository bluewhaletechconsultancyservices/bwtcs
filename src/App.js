import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
