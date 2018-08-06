import { fromJS } from 'immutable';
import {
  END_PHASE,
  END_TURN,
  GET_PHASES,
  PUT_ACTION_IN_PHASE,
} from './constants';

const initialState = fromJS({
  hunterInitiative: true,
  turn: 0,
  activePhase: 0,
  activeActionSlot: 0,
  phases: [],
});

export default function turnFlowReducer(state = initialState, action) {
  switch(action.type) {
    /*
      ----

      Manipulate action queue

      ----
    */
    case GET_PHASES:
      const newPhases = [
        {
          side: 'player',
          actionSlots: [
            {
              owner: 'hunter',
              empty: true,
              action: {},
            }
          ]
        },
        {
          side: 'enemy',
          actionSlots: [
            {
              owner: 'monster',
              empty: true,
              action: {},
            }
          ]
        },
        {
          side: 'player',
          actionSlots: [
            {
              owner: 'hunter',
              empty: true,
              action: {},
            },
            {
              owner: 'hunter',
              empty: true,
              action: {},
            }
          ]
        },
        {
          side: 'enemy',
          actionSlots: [
            {
              owner: 'monster',
              empty: true,
              action: {},
            },
            {
              owner: 'monster',
              empty: true,
              action: {},
            },
            {
              owner: 'monster',
              empty: true,
              action: {},
            }
          ]
        },
        {
          side: 'player',
          actionSlots: [
            {
              owner: 'hunter',
              empty: true,
              action: {},
            }
          ]
        }
      ];
      return state
        .set('phases', fromJS(newPhases));
    case PUT_ACTION_IN_PHASE:
      return state
        .setIn(['phases', state.get('activePhase'), 'actionSlots', state.get('activeActionSlot'), 'action'], action.action)
        .setIn(['phases', state.get('activePhase'), 'actionSlots', state.get('activeActionSlot'), 'empty'], false)
        .set('activeActionSlot', state.get('activeActionSlot') + 1);
    /*
      ----

      Manipulate turns and phases

      ----
    */
    case END_PHASE:
      return state
        .set('activeActionSlot', 0)
        .set('activePhase', state.get('activePhase') + 1);
    case END_TURN:
      return state
        .set('activePhase', 0)
        .set('turn', state.get('turn') + 1);
    /*
      ----

      Default

      ----
    */
    default:
      return state;
  }
}
