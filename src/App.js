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
        <Particles 
              params={{
            		particles: {
                  number: {
                    value: '50'
                  },
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                position: 'fixed',
                top: '0',
                bottom: '0',
                right: '0',
                left: '0',
                zIndex: '-1'
              }}
            />
            <Route exact path='/about' component ={About}/>
            <Route exact path='/contact' component ={Contact}/>
            <Route exact path='/portofolio' component ={Portofolio}/>
        </Layout>
      </div>
    );
  }
}

export default App;
