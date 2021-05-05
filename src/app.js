import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Route, Switch} from 'react-router-dom';
import UserDatabase from './components/UserDatabase';
import UserCreation from './components/UserCreation';
import NotFoundPage from './components/NotFoundPage';
import 'normalize.css/normalize.css';
import './styles/styles.css';


class AdminApp extends React.Component {
     render() {
          return (
               <div className="admin-app">
                    <h1>Front page</h1>
               </div>
          )
     }
}

const routes = (
     <BrowserRouter>
          <Switch>
               <Route path="/" component={AdminApp} exact={true} />
               <Route path="/userdatabase" component={UserDatabase} />
               <Route path="/usercreation" component={UserCreation} />
               <Route component={NotFoundPage} />
          </Switch>
     </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));