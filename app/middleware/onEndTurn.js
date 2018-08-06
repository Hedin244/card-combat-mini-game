import { discardHand, moveCard } from '../reducers/CardsReducer/actions';
import { setHunterResource } from '../reducers/HunterReducer/actions';
import { getPhases } from '../reducers/TurnFlowReducer/actions';

export const onEndTurn = store => next => action => {
  if(action.type === 'END_TURN') {

    // End of turn effects
    const phases = store.getState().turnFlow.get('phases');
    phases.map(phase => {
      phase.get('actionSlots').map(actionSlot => {
        if(!actionSlot.get('empty')) {
          actionSlot.get('action').onActivate(actionSlot.get('action'), store.getState()).map(effect => {
            store.dispatch(effect());
          });
        }
      })
    });
    store.dispatch(setHunterResource({ resource: 'stamina', value: 10 }));
    store.dispatch(discardHand());

    // End turn action
    next(action);

    // Start of new turn
    store.dispatch(getPhases({ hunterActions: store.getState().hunter.getIn(['stats', 'actions']), monsterActions: store.getState().monster.getIn(['stats', 'actions']) }));

    for(let i = 0; i < 5; i += 1) {
      store.dispatch(moveCard({ from: 'drawDeck', to: 'handCards' }));
    }
  } else {
    next(action);
  }
};
