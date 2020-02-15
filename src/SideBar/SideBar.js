import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    state = {
        contentMarginLeft: '0px',
        menuWidth: '0px',
        menuIconDisplay: 'initial',
        addSlideIn: ''
    }

    openSlideMenu = () => {
        this.setState({contentMarginLeft: '250px', menuWidth: '250px', menuIconDisplay: 'none', addSlideIn: 'roll-in-left'});
    }

    closeSlideMenu = () => {
        this.setState({contentMarginLeft: '0px', menuWidth: '0px', menuIconDisplay: 'initial', addSlideIn: ''});
    }
    render(){
        let contentM = this.state.contentMarginLeft;
        let menuWidth = this.state.menuWidth;
        let menuIDisplay = this.state.menuIconDisplay;
        return(
            <div id='content' style={{marginLeft: contentM}}>
                <span className='slide'>
                    <i onClick={this.openSlideMenu} style={{fontSize: '40px', display: menuIDisplay}} className='fa fa-bars'></i>
                </span>

                <div id='menu' className='nav' style={{width: menuWidth}}>
                    <div id='xDiv'>
                        <a href='#' onClick={this.closeSlideMenu}>
                            <i style={{fontSize: '40px'}} className='fa fa-times'></i>
                        </a>
                    </div>
        
                    <ul>
                        <li>
                            <Link to='/' className={this.state.addSlideIn}>Home</Link>
                        </li>

                        <li>
                            <Link to='/about' className={this.state.addSlideIn}>About</Link>
                        </li>

                        <li>
                            <Link to='/contact' className={this.state.addSlideIn}>Contact</Link>
                        </li>

                        <li>
                            <Link to='/portofolio' className={this.state.addSlideIn}>Portofolio</Link>
                        </li>

                        <li>
                            <Link to='/portofolio' className={this.state.addSlideIn}>Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;