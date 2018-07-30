import Card from '../../models/card';
import { changeHunterResource } from "../../reducers/HunterReducer/actions";
import { moveCard } from "../../reducers/CardsReducer/actions";

const cost = 5;

const play = (card) => {
  return [
    () => { return changeHunterResource({ resource: 'stamina', value: -card.staminaCost }) },
    () => { return  moveCard({ from: 'drawDeck', to: 'handCards' }) },
    () => { return moveCard({ from: 'drawDeck', to: 'handCards' }) },
    () => { return moveCard({ from: 'drawDeck', to: 'handCards' }) },
    () => { return moveCard({ card , from: 'handCards', to: 'discardedCards' }) },
  ]
};

const draw = () => {
  return [
    () => { return changeHunterResource({ resource: 'stamina', value: 1 }) },
    () => { return changeHunterResource({ resource: 'stamina', value: 1 }) },
  ];
};

export default function FocusCard() {
  return (
    new Card({
      id: '',
      name: 'Focus',
      type: 'skill',
      text: `Draw 3 cards.`,
      costs: {
        stamina: cost,
      },

      onPlayActive: true,
      onPlay: play,

      onDrawActive: true,
      onDraw: draw,
    })
  );
}
