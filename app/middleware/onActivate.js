export const onActivate = store => next => action => {
  if(action.type === 'ACTIVATE_ACTION_QUEUE') {

    const actionQueue = store.getState().turnFlow.get('actionQueue');
    actionQueue.map(activeAction => {
      if(!activeAction.get('empty')) {
        activeAction.get('action').onActivate(activeAction.get('action'), store.getState()).map(effect => {
          store.dispatch(effect());
        });
      }
    });
  }
  next(action);
};
