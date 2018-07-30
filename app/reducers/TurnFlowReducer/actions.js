import {
  END_PHASE,
  END_TURN,
  GET_NEW_ACTION_QUEUE,
  ADD_ACTION_TO_QUEUE,
  ACTIVATE_ACTION_QUEUE,
} from './constants';

// Manipulate action queue

export function getNewActionQueue(data) {
  return {
    type: GET_NEW_ACTION_QUEUE,
    hunterActions: data.hunterActions,
    monsterActions: data.monsterActions,
  };
}

export function addActionToQueue(data) {
  return {
    type: ADD_ACTION_TO_QUEUE,
    action: data.action,
  };
}

export function activateActionQueue() {
  return {
    type: ACTIVATE_ACTION_QUEUE,
  };
}

// Manipulate turns and phases

export function endPhase() {
  return {
    type: END_PHASE,
  };
}

export function endTurn() {
  return {
    type: END_TURN,
  };
}
