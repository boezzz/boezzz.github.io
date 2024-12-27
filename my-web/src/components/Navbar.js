import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

// navigation header
export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      click: false,
      button: true
    };
  }

  handleClick = () => {
    this.setState({ click: !this.state.click });
  };

  closeMobileMenu = () => {
    this.setState({ click: false });
  };

  showButton = () => {
    if (window.innerWidth <= 960) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
  };

  componentDidMount() {
    this.showButton();
    window.addEventListener('resize', this.showButton);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.showButton);
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={this.closeMobileMenu}>
            <img width="55" height="55" src='asset/images/stamp_logo.png' alt='stamp logo'/>
          </Link>

          <div className='menu-icon' onClick={this.handleClick}>
            <i className = {this.state.click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </div>

          <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'} onClick={this.closeMobileMenu}>

            <li className='nav-item'>
              <Link 
                to='/' 
                className='nav-links' 
                onClick={this.closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Blog
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/resume'
                className='nav-links'
                onClick={this.closeMobileMenu}
              >
                Resume/CV
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    );
  }
}
