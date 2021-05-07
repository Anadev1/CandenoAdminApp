import React from 'react';
import MainCta from './MainCta';
import Navigation from './Navigation';

class UserDatabase extends React.Component {
     render() {
          return (
               <div className="content">
                    <Navigation />
                    <div className="main-container">
                         <div className="page-header">
                              <h1 className="page-title">Users</h1>
                              <MainCta title="Create User" />
                         </div>

                         <div className="database-container">
                              
                         </div>
                         
                    </div>
               </div>     
          )
     }
}

export default UserDatabase;