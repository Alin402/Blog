import React from 'react';
import SideBar from './SideBar/SideBar';
import SocialMedia from './SocialMedia/SocialMedia';

class Layout extends React.Component {
    render(){
        return(
            <div>
                <div style={{height: '50px', width: '100%', marginTop: '20px'}}>
                    <SideBar />

                    <div id='SocialMContainer'>
                        <SocialMedia />
                    </div>
                </div>

                {this.props.children}
            </div>
        );
    }
}

export default Layout;