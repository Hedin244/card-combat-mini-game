import {
  returnDiscardPile,
  shuffleDeck,
  putCardIntoPlaying,
} from '../reducers/CardsReducer/actions';

export const onDrawEffect = store => next => action => {
  if(action.type === 'MOVE_CARD' && action.from === 'drawDeck') {
    if(store.getState().cards.get('drawDeck').size > 0) {

      // Draw card
      if(!action.card) {
        const card = store.getState().cards.getIn(['drawDeck', 0]);
        if(card.onDrawActive) {
          store.dispatch(putCardIntoPlaying({ card, method: 'onDraw' }));
        }
      } else if(action.card.onDrawActive) {
        store.dispatch(putCardIntoPlaying({ card: action.card, method: 'onDraw' }));
      }

    } else if(store.getState().cards.get('discardedCards').size > 0) {

      // Reshuffle discard pile into draw deck
      store.dispatch(returnDiscardPile());
      store.dispatch(shuffleDeck);

    } else {

      // No more cards to draw
      console.log('EMPTY DECK');
    }
  }
  next(action);
};
