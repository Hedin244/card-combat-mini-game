import {
  MOVE_CARD,
  ADD_CARD,
  REMOVE_CARD,
  PLAY_CARD,
  PUT_CARD_INTO_PLAYING,
  CHANGE_PLAYED_CARD,
  CLEAR_PLAYED_CARD,
  DISCARD_HAND,
  RETURN_DISCARD_PILE,
  SHUFFLE_DECK,
} from './constants';

// Single card manipulation

export function moveCard(data) {
  return {
    type: MOVE_CARD,
    from: data.from,
    to: data.to,
    card: data.card,
  }
}

export function addCard(data) {
  return {
    type: ADD_CARD,
    to: data.to,
    card: data.card,
  }
}

export function removeCard(data) {
  return {
    type: REMOVE_CARD,
    from: data.from,
    card: data.card,
  }
}

// Playing cards manipulation

export function playCard(data) {
  return {
    type: PLAY_CARD,
    card: data.card,
    method: data.method,
  };
}

export function putCardIntoPlaying(data) {
  return {
    type: PUT_CARD_INTO_PLAYING,
    card: data.card,
    method: data.method,
  }
}

export function changePlayedCard(data) {
  return {
    type: CHANGE_PLAYED_CARD,
    card: data.card,
  }
}

export function clearPlayedCard(data) {
  return {
    type: CLEAR_PLAYED_CARD,
    card: data.card,
  }
}

// Card stacks manipulation

export function discardHand() {
  return {
    type: DISCARD_HAND,
  };
}

export function returnDiscardPile() {
  return {
    type: RETURN_DISCARD_PILE,
  };
}

export function shuffleDeck() {
  return {
    type: SHUFFLE_DECK,
  };
}


