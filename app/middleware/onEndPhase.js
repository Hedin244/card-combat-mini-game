import {
  addActionToQueue,
  endPhase
} from "../reducers/TurnFlowReducer/actions";


export const onEndPhase = store => next => action => {
  if(action.type === 'END_PHASE') {
    const state = store.getState();

    if (state.turnFlow.get('huntersPhase')) {

      // End of hunter's phase effects
      // check and fill unfilled actions
      let activeActionNumber = state.turnFlow.get('activeActionNumber');
      while(state.turnFlow.getIn(['actionQueue', activeActionNumber]) && state.turnFlow.getIn(['actionQueue', activeActionNumber]).get('owner') === 'hunter') {
        store.dispatch(addActionToQueue({ action: state.hunter.getIn(['actions', state.hunter.getIn(['actions', 'defaultAction'])]) }));
        activeActionNumber += 1;
      }

      next(action);

      // MonsterReducer's phase
      while(state.turnFlow.getIn(['actionQueue', activeActionNumber]) && state.turnFlow.getIn(['actionQueue', activeActionNumber]).get('owner') === 'monster') {
        store.dispatch(addActionToQueue({ action: state.monster.getIn(['actions', 'bite']) }));
        activeActionNumber += 1;
      }
      store.dispatch(endPhase());

    } else {

      // End of monster's phase effects
      // check and fill unfilled actions
      next(action);
    }
  } else {
    next(action);
  }
};
