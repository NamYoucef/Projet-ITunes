import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App';
import Modalcart from './pages/Modalcart';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route path="/"><App/></Route>
        </Switch>
        <Switch>
          <Route path="/panier"><Modalcart/></Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
