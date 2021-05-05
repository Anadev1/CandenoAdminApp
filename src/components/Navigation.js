import React from 'react';
import logo from '../assets/images/logo_white.svg';


class Navigation extends React.Component {
     render() {
          console.log('tesdst');
          return (
               <div className="navigation">
                    <img src={logo} alt="logo"></img>
                    <h1>Navigation</h1>
               </div>
          )
     }
}

export default Navigation;