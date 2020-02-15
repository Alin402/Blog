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
      <div style={{height: '2000px'}}>
        <Layout>
            <Route exact path='/Blog/about' component ={About}/>
            <Route exact path='/Blog/contact' component ={Contact}/>
            <Route exact path='/Blog/portofolio' component ={Portofolio}/>
        </Layout>
      </div>
    );
  }
}

export default App;
