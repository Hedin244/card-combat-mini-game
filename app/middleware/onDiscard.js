import { putCardIntoPlaying } from '../reducers/CardsReducer/actions';

export const onDiscard = store => next => action => {
  if(action.type === 'MOVE_CARD' && action.to === 'discardedCards') {

    // Discard card
    if(action.card.onDiscardActive) {
      store.dispatch(putCardIntoPlaying({ card: action.card, method: 'onDiscard' }));
    }
  }
  next(action);
};
