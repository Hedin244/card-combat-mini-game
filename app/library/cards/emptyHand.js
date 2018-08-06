import Card from '../../models/card';
import { changeHunterResource } from "../../reducers/HunterReducer/actions";
import { moveCard } from "../../reducers/CardsReducer/actions";
import { putActionInPhase } from "../../reducers/TurnFlowReducer/actions";
import PunchAction from '../actions/punch';

export default function EmptyHandCard() {
  const punch = new PunchAction();
  return (
    new Card({
      name: 'Empty Hand',
      description: 'ACTION: Deal 10 damage to a monster.',
      keyWords: ['basic', 'unarmed'],
      type: 'skill',

      costs: { stamina: 2 },
      mods: {},

      actionPutter: true,
      actions: { punch },

      playValidation: [],
      onPlay: play,
    })
  );
}

const play = (card) => [
  () => changeHunterResource({ resource: 'stamina', value: -card.costs.stamina }),
  () => putActionInPhase({ action: card.actions.punch }),
  () => moveCard({ card , from: 'handCards', to: 'discardedCards' }),
];
