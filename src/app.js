import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserDatabase from './components/UserDatabase';
import UserCreation from './components/UserCreation';
import NotFoundPage from './components/NotFoundPage';
import 'normalize.css/normalize.css';
import './styles/styles.css';


const routes = (
     <BrowserRouter>
          <Switch>
               <Route path="/" component={Dashboard} exact={true} />
               <Route path="/userdatabase" component={UserDatabase} />
               <Route path="/usercreation" component={UserCreation} />
               <Route component={NotFoundPage} />
          </Switch>
     </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));