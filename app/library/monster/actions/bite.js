import Action from '../../../models/action';
import { changeHunterResource } from "../../../reducers/HunterReducer/actions";

export default function BiteAction() {
  return new Action({
    name: 'Bite',
    description: `Deal ${ 10 } damage.`,
    type: 'attack',
    onActivate: activate,
    mods: {
      damageDone: 10,
    }
  })
}

const activate = (action) => [
  () => changeHunterResource({ resource: 'health', value: -action.mods.damageDone }),
];
