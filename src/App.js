import React from 'react';
import './App.css';
import Layout from './layout';
import { Route } from 'react-router';
import About from './About/About';
import Contact from './Contact/Contact';
import Portofolio from './Portofolio/Portofolio';
import Particles from 'react-particles-js';

class App extends React.Component {
  render(){
    return(
      <div>
        <Layout>
            <Route exact path='/about' component ={About}/>
            <Route exact path='/contact' component ={Contact}/>
            <Route exact path='/portofolio' component ={Portofolio}/>
        </Layout>
      </div>
    );
  }
}

export default App;
