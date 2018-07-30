import Card from '../../models/card';
import { changeHunterResource } from "../../reducers/HunterReducer/actions";
import { moveCard } from "../../reducers/CardsReducer/actions";

const cost = 0;

const play = (card) => {
  return [
    () => { return changeHunterResource({ resource: 'stamina', value: 2 }) },
    () => { return moveCard({ card , from: 'handCards', to: 'discardedCards' }) },
  ]
};

export default function RestCard() {
  return (
    new Card({
      id: '',
      name: 'Rest',
      type: 'skill',
      text: `Add 2 Stamina.`,
      costs: {
        stamina: cost,
      },

      mods: {
        health: false,
      },

      onPlayActive: true,
      onPlay: play,
    })
  );
}
