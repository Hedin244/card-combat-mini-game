import Action from '../../models/action';
import { changeMonsterResource } from "../../reducers/MonsterReducer/actions";

export default function PunchAction() {
  return new Action({
    name: 'Punch',
    description: `Deal ${ 10 } damage.`,
    type: 'attack',
    onActivate: activate,
    mods: {
      damageDone: 10,
    }
  })
}

const activate = (action) => [
    () => changeMonsterResource({ resource: 'health', value: -action.mods.damageDone }),
];
