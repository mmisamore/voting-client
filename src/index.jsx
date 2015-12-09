import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import Voting from './components/Voting';
import Results from './components/Results';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});

const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer} />
  <Route path="/" component={VotingContainer} />
</Route>;


ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

