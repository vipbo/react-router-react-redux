import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './Home'
import Counter from '../container/Counter'
import TestPage from './TestPage'

export default class App extends Component {
render(){

  return (
    <div className="App">

        <Router>
            <Link to='/counter'>counter</Link> <br/> <br/>
            <Link to = '/test'>test </Link>

            <Route path="/"  component={Home} exact />
            <Route path="/counter" component={Counter} exact {...this.props} />
            <Route path="/test" component={TestPage} exact />
        </Router>
    </div>
  );
}
}

