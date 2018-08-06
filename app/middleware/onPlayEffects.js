import { putCardIntoPlaying } from "../reducers/CardsReducer/actions";

export const onPlayEffects = store => next => action => {
  if(action.type === 'PLAY_CARD') {

    // Validation of card's costs
    if(cardValidation(action.card, store.getState())) {

      // Card's costs are met
      const turnState = store.getState().turnFlow;

      // Not action cards play
      store.dispatch(putCardIntoPlaying(action));
    } else {

      // Card's costs are NOT met
      console.error('Card Cant be played.');
    }
  } else {
    next(action);
  }
};

const cardValidation = (card, state) => {
  const validationFunctions = state.cards.get('cardsPlayValidations').toArray();
  for(let i = 0; i < validationFunctions.size; i += 1) {
    if(!validationFunctions[i](card, state)) { return false; }
  }
  return true;
};
