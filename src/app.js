import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import 'normalize.css/normalize.css';
import './styles/styles.css';



class AdminApp extends React.Component {
     render() {
          return (
               <div className="admin-app">
                    <Navigation />
               </div>
          )
     }
}

class UserDatabase extends React.Component {
     render() {
          return (
               <div className="user-database">
                    <h1>This is a user database</h1>
               </div>
          )
     }
}

const routes = (
     <BrowserRouter>
          <div>
               <Route path="/" component={AdminApp} exact={true} />
               <Route path="/userdatabase" component={UserDatabase} />
          </div>
     </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));