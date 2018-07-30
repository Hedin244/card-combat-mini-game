import Card from '../../models/card';
import { changeMonsterResource } from "../../reducers/MonsterReducer/actions";
import { changeHunterResource } from "../../reducers/HunterReducer/actions";
import { addActionToQueue } from "../../reducers/TurnFlowReducer/actions";
import { moveCard } from "../../reducers/CardsReducer/actions";

const cost = 2;
const damage = 10;

const play = (card) => {
  return [
    () => { return changeHunterResource({ resource: 'stamina', value: -card.staminaCost }) },
    () => { return addActionToQueue({ action: card.actions.deepSlash }) },
    () => { return moveCard({ card , from: 'handCards', to: 'discardedCards' }) },
  ]
};

const deepSlashActivate = (action) => {
  return [
    () => { return changeMonsterResource({ resource: 'health', value: action.damage }) },
  ]
};

export default function SlashCard() {
  return (
    new Card({
      id: '',
      name: 'Slash',
      type: 'attack',
      text: `ACTION: Deal 10 damage to a monster.`,
      costs: {
        stamina: cost,
      },

      actionPutter: true,
      onPlay: play,

      actions: {
        deepSlash: {
          name: 'Deep Slash',
          activate: deepSlashActivate,
          damage,
        },
      }
    })
  );
}
