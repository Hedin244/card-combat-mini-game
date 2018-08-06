import {
  END_PHASE,
  END_TURN,
  GET_PHASES,
  PUT_ACTION_IN_PHASE,
} from './constants';

// Manipulate action queue

export function getPhases(data) {
  return {
    type: GET_PHASES,
    hunterActions: data.hunterActions,
    monsterActions: data.monsterActions,
  };
}

export function putActionInPhase(data) {
  return {
    type: PUT_ACTION_IN_PHASE,
    action: data.action,
    owner: data.owner ? data.owner : 'hunter',
  };
}

// Manipulate turns and phases

export function endPhase() {
  return {
    type: END_PHASE,
  };
}

export function endTurn(data) {
  return {
    type: END_TURN,
    last: data ? data.last : false,
  };
}
