import Action from '../../models/action';
import { changeHunterResource } from "../../reducers/HunterReducer/actions";

export default function RestAction() {
  return new Action({
    name: 'Rest',
    description: `Restore hunter's ${ 1 } stamina, ${ 1 } focus and ${ 5 } health.`,
    type: 'utility',
    onActivate: activate,
    mods: {
      staminaGain: 1,
      focusGain: 1,
      healthGain: 5,
    }
  })
}

const activate = (action) => [
    () => changeHunterResource({ resource: 'stamina', value: action.mods.staminaGain }),
    () => changeHunterResource({ resource: 'focus', value: action.mods.focusGain }),
    () => changeHunterResource({ resource: 'health', value: action.mods.healthGain }),
];
