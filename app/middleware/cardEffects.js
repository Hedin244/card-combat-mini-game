import { clearPlayedCard } from "../reducers/CardsReducer/actions";

export const cardEffects = store => next => action => {
  if(action.type === 'PUT_CARD_INTO_PLAYING') {
    // Put card into playing array
    next(action);

    // Play card's effects
    store.getState().cards.getIn(['playingCards', -1])[action.method](store.getState().cards.getIn(['playingCards', -1]), store.getState()).map(effect => {
      store.dispatch(effect());
    });

    // Clear played card
    store.dispatch(clearPlayedCard({ card: action.card }));

  } else {
    next(action);
  }
};
