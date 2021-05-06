import React from 'react';
import Navigation from './Navigation';

class UserDatabase extends React.Component {
     render() {
          return (
               <div className="content">
                    <Navigation />
                    <div className="main-container user-database">
                         <h1>This is a user database</h1>
                    </div>
               </div>     
          )
     }
}

export default UserDatabase;