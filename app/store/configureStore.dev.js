import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

import { onDrawEffect } from '../middleware/onDraw';
import { onDiscard } from '../middleware/onDiscard';
import { onPlayEffects } from '../middleware/onPlayEffects';
import { onActionPut } from '../middleware/onActionPut';
import { onEndTurn } from '../middleware/onEndTurn';
import { cardEffects } from '../middleware/cardEffects';
import { onEndPhase } from '../middleware/onEndPhase';

import * as cardActions from '../reducers/CardsReducer/actions';
import * as hunterActions from '../reducers/HunterReducer/actions';
import * as monsterActions from '../reducers/MonsterReducer/actions';

const history = createHashHistory();

const configureStore = (initialState?: 0) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Game Specific Middleware
  middleware.push(onDrawEffect);
  middleware.push(onDiscard);
  middleware.push(onPlayEffects);
  middleware.push(onActionPut);
  middleware.push(onEndTurn);
  middleware.push(cardEffects);
  middleware.push(onEndPhase);

  // Thunk Middleware
  middleware.push(thunk);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...cardActions,
    ...hunterActions,
    ...monsterActions,
    ...routerActions
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
        actionCreators
      })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(
      '../reducers',
      () => store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
};

export default { configureStore, history };
