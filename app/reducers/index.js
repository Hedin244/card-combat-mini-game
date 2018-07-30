// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import turnFlow from './TurnFlowReducer';
import cards from './CardsReducer';
import hunter from './HunterReducer';
import monster from './MonsterReducer';

const rootReducer = combineReducers({
  monster,
  hunter,
  turnFlow,
  cards,
  router
});

export default rootReducer;
