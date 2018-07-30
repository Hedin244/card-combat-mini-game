import { fromJS } from 'immutable';
import {
  END_PHASE,
  END_TURN,
  GET_NEW_ACTION_QUEUE,
  ADD_ACTION_TO_QUEUE,
  ACTIVATE_ACTION_QUEUE,
} from './constants';

const initialState = fromJS({
  hunterInitiative: true,
  actionQueue: [],
  activeActionNumber: 0,
  turn: 0,
  huntersPhase: true,
});

const emptyActionSlot = (id, owner) => ({
    id,
    empty: true,
    owner,
    action: {},
  });

export default function turnFlowReducer(state = initialState, action) {
  switch(action.type) {
    /*
      ----

      Manipulate action queue

      ----
    */
    case GET_NEW_ACTION_QUEUE:
      const hunterInitiative = state.get('hunterInitiative');
      const newActionQueue = [];
      for(let i = { h: action.hunterActions, m: action.monsterActions, all: 0 }; i.all < action.hunterActions + action.monsterActions;) {
        if(hunterInitiative && i.h > 0) {
          newActionQueue.push(emptyActionSlot(i.all, 'hunter'));
          i.all += 1;
          i.h -= 1;
        }
        if(i.m > 0) {
          newActionQueue.push(emptyActionSlot(i.all, 'monster'));
          i.all += 1;
          i.m -= 1;
        }
        if(!hunterInitiative && i.h > 0) {
          newActionQueue.push(emptyActionSlot(i.all, 'hunter'));
          i.all += 1;
          i.h -= 1;
        }
      }
      return state
        .set('actionQueue', fromJS(newActionQueue))
        .set('activeActionNumber', 0);
    case ADD_ACTION_TO_QUEUE:
      return state
        .setIn(['actionQueue', state.get('activeActionNumber'), 'action'], action.action)
        .setIn(['actionQueue', state.get('activeActionNumber'), 'empty'], false)
        .set('activeActionNumber', state.get('activeActionNumber') + 1);
    case ACTIVATE_ACTION_QUEUE:
      return state;
    /*
      ----

      Manipulate turns and phases

      ----
    */
    case END_PHASE:
      return state.set('huntersPhase', !state.get('huntersPhase'));
    case END_TURN:
      return state.set('turn', state.get('turn') + 1);
    /*
      ----

      Default

      ----
    */
    default:
      return state;
  }
}
