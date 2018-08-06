export const onActionPut = store => next => action => {
  if(action.type === 'PUT_ACTION_IN_PHASE') {
    const turnState = store.getState().turnFlow;
    const activeActionSlot = turnState.getIn([
      'phases',
      turnState.get('activePhase'),
      'actionSlots',
      turnState.get('activeActionSlot')
    ]);
    if(activeActionSlot && activeActionSlot.get('owner') === action.owner) {
      next(action);
    } else {
      console.error('No action slots available');
    }
  } else {
    next(action);
  }
};
