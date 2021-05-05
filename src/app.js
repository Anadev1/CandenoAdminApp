import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import './styles/styles.css';

class AdminApp extends React.Component {
     render() {
          return (
               <div>
                    <Navigation />
               </div>
          )
     }
}

ReactDOM.render(<AdminApp />, document.getElementById('app'));