import React from 'react';
import './About.css';
import img from '../Images/img.jpg';
import Tilt from 'react-tilt';

class About extends React.Component {
    state = {
        swingIn: '',
        slideIn: '',
        bounceIn: ''
    }

    componentDidMount(){
        this.setState(
            {
                swingIn: 'swing-in-top-fwd',
                bounceIn: 'bounce-in-right'
            });
    }

    render(){
        return(
            <div>
                <div className='container' id='mainDiv'>
                    <section>
                        <h1 className={this.state.swingIn} id='title'>About Me</h1>
                        <hr></hr>
                            <div style={{width: '90%', margin: '0 auto'}} className={this.state.slideIn}>
                                
                            </div>

                        <div id='scrollDown' className={this.state.bounceIn}>
                            <a href='#title2'><i className='fa fa-sort-down'></i></a>
                        </div>
                    </section>

                    <section>
                        <h1 style={{textAlign: 'center'}} className={this.state.swingIn} id='title2'>Next Section</h1>
                        <hr></hr>
                            <div style={{width: '90%', margin: '0 auto'}} className={this.state.slideIn}>
                                <p style={{fontSize: '20px'}}>
                                Proin posuere, diam sed convallis accumsan, sapien velit consectetur turpis, ut fermentum diam erat eget nibh. Nam iaculis, leo vitae pharetra rhoncus, nibh mi vulputate magna, id dapibus quam lacus vulputate justo. Donec sollicitudin dolor bibendum ipsum tempus, non interdum eros pretium. Morbi fringilla massa nibh, sit amet posuere nulla condimentum eu. Quisque lacinia augue eget felis luctus laoreet. Donec convallis arcu commodo, interdum ante vitae, malesuada mi. Pellentesque condimentum nulla vel dolor euismod, at sodales arcu molestie. In ullamcorper laoreet vulputate. Cras gravida sapien sapien, in ultricies felis rhoncus varius. Duis quis erat est. Cras vitae ipsum ac lectus vulputate iaculis ac at orci. Ut sed pretium odio. Sed mollis fringilla venenatis. Integer vestibulum semper metus, quis posuere nulla tincidunt a.

                                In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris auctor nunc eros, quis laoreet lorem pharetra ut. Nulla interdum quam vitae dui maximus, eget bibendum turpis pulvinar. Nullam euismod cursus molestie. Duis ultrices tortor nec augue mattis, eu lobortis orci aliquam. Nam porttitor dictum ante, eu rutrum ipsum tempus quis. In hac habitasse platea dictumst. Nunc at risus eros. Donec varius justo blandit sapien ullamcorper, laoreet tristique ante congue.
                                </p>
                            </div>

                        <div id='scrollDown' className={this.state.bounceIn}>
                            <i className='fa fa-sort-down'></i>
                        </div>
                    </section>      
                </div>
            </div>
        );
    }
}

export default About;