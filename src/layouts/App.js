import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
// import logo from './logo.svg';
import '../styles/App.scss';

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <div className="App">
            <aside>
              <Navigation />
            </aside>
            <main>
              <Page />
            </main>
            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </Router>
      </>
    );
  }

}

export default App;
