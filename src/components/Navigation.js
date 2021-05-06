import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import logo from '../assets/images/logo_white.svg';


class Navigation extends React.Component {
     render() {
          console.log('tesdst');
          return (
               <div className="navigation">
                    <img src={logo} alt="logo"></img>
                    <h1>Navigation</h1>
                    <div className="menu">
                         <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                         <NavLink to="/userdatabase" activeClassName="is-active">User Database</NavLink>
                         <NavLink to="/usercreation" activeClassName="is-active">User Creation</NavLink>
                    </div>
               </div>
          )
     }
}

export default Navigation;