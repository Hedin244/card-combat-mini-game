import { fromJS } from 'immutable';
import shuffle from 'immutable-shuffle';
import {
  MOVE_CARD,
  ADD_CARD,
  REMOVE_CARD,
  PUT_CARD_INTO_PLAYING,
  CHANGE_PLAYED_CARD,
  CLEAR_PLAYED_CARD,
  DISCARD_HAND,
  RETURN_DISCARD_PILE,
  SHUFFLE_DECK,
} from './constants';
import EmptyHandCard from '../../library/cards/emptyHand'

function getStartingDeck() {
  const startingDeck = [];
  for (let i = 0; i < 20; i += 1) {
    const rand = Math.floor(Math.random() * 3) + 1;
    let newCard;
    switch (rand) {
      default:
      case 1:
        newCard = new EmptyHandCard();
        newCard.id = i + 1;
        startingDeck.push(newCard);
        break;
      case 2:
        newCard = new EmptyHandCard();
        newCard.id = i + 1;
        startingDeck.push(newCard);
        break;
      case 3:
        newCard = new EmptyHandCard();
        newCard.id = i + 1;
        startingDeck.push(newCard);
        break;
    }
  }
  return startingDeck;
}

const validateCardsCosts = (card, state) => {
  let validation = false;
  Object.keys(card.costs).map(value => {
    if(value >= state.hunter.getIn(['resources', value]) ) { validation = true; }
  });
  return validation;
};

const initialState = fromJS({
  drawDeck: getStartingDeck(),
  discardedCards: [],
  droppedCards: [],
  handCards: [],
  activeActionNumber: 0,
  playingCards: [],
  deckCardsIdCount: 6,
  cardsPlayValidations: [validateCardsCosts],
});

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    /*
      ----

      Single card manipulation

      ----
    */
    case MOVE_CARD:
      if(action.from === 'drawDeck' && !action.card) {
        return state
          .set(action.to, state.get(action.to).push(state.getIn(['drawDeck', 0])))
          .set('drawDeck', state.get('drawDeck').shift());
      } else {
        return state
          .set(action.from, state.get(action.from).filter(card => {
            return card.id !== action.card.id
          }))
          .set(action.to, state.get(action.to).push(action.card));
      }
    case ADD_CARD:
      const newCardToAdd = action.data.card;
      newCardToAdd.id = state.get('deckCardsIdCount');
      return state
        .set('deckCardsIdCount', state.get('deckCardsIdCount') + 1)
        .set(action.to, action.to.push(newCardToAdd));
    case REMOVE_CARD:
      return state
        .set(action.from, state.get(action.from).filter(card => { return card.id !== action.card.id }));
    /*
      ----

      Playing cards manipulation

      ----
    */
    case PUT_CARD_INTO_PLAYING:
      return state
        .set('playingCards', state.get('playingCards').push(action.card));
    case CHANGE_PLAYED_CARD:
      return state
        .setIn(['playingCards', -1], action.card);
    case CLEAR_PLAYED_CARD:
      return state
        .set('playingCards', state.get('playingCards').filter(card => { return card.id !== action.card.id }));
    /*
      ----

      CardsReducer stacks manipulation

      ----
    */
    case DISCARD_HAND:
      return state
        .set('discardedCards', state.get('discardedCards').concat(state.get('handCards')))
        .set('handCards', fromJS([]));
    case RETURN_DISCARD_PILE:
      return state
        .set('drawDeck', state.get('drawDeck').concat(state.get('discardedCards')))
        .set('discardedCards', fromJS([]));
    case SHUFFLE_DECK:
      return state
        .set('drawDeck', shuffle(state.get('drawDeck')));
    /*
      ----

      Default

      ----
    */
    default:
      return state;
  }
}
