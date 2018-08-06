import {
  putActionInPhase,
  endTurn
} from "../reducers/TurnFlowReducer/actions";


export const onEndPhase = store => next => action => {
  if(action.type === 'END_PHASE') {
    const phases = store.getState().turnFlow.get('phases').toArray();
    const activePhase = store.getState().turnFlow.get('activePhase');

    if(phases[activePhase].get('side') === 'player') {

      // End Player's phase
      phases[activePhase].get('actionSlots').toArray().map(actionSlot => {
        if(actionSlot.get('empty')) {
          store.dispatch(putActionInPhase({ action: store.getState().hunter.getIn(['actions', store.getState().hunter.getIn(['actions', 'defaultAction'])]) }));
        }
      });
    } else {

      // End Enemy's phase
      phases[activePhase].get('actionSlots').toArray().map(actionSlot => {
        if(actionSlot.get('empty')) {
          store.dispatch(putActionInPhase({ owner: 'monster', action: store.getState().monster.getIn(['actions', 'bite']) }));
        }
      });
    }

    // Check if end turn
    if(activePhase === phases.length - 1) {
      next(action);
      store.dispatch(endTurn())
    } else {
      next(action);
    }
  } else {
    next(action);
  }
};
