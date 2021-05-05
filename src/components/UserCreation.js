import React from 'react';
import Navigation from './Navigation';

class UserCreation extends React.Component {
     render() {
          return (
               <div className="content">
                    <Navigation />
                    <div className="user-creation">
                         <h1>This is user creation</h1>
                    </div>
               </div>     
          )
     }
}

export default UserCreation;