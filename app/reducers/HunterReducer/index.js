import { fromJS } from 'immutable';
import {
  CHANGE_HUNTER_RESOURCE,
  SET_HUNTER_RESOURCE,
  CHANGE_HUNTER_STAT,
  SET_HUNTER_STAT,
} from './constants';
import RestAction from '../../library/actions/rest';


const initialState = fromJS({
  name: 'Test Pilot 1',
  resources: {

    // Fields spend on cards
    stamina: 10,
    focus: 10,

    // Defence
    block: 0,
    parry: 0,
    dodge: 0,

    // Health
    health: 100,
  },
  stats: {
    // Attributes physical
    grit: 5,
    agility: 5,
    dexterity: 5,

    // Attributes mental
    perception: 5,
    will: 5,
    intellect: 5,

    // Other Attributes
    actions: 3,
    startingStamina: 10,
    startingFocus: 10,
  },
  actions: {
    defaultAction: 'rest',
    rest: new RestAction(),
  }
});

export default function hunterReducer(state = initialState, action) {
  switch (action.type) {
    /*
      ----

      Manipulate hunter's resources

      ----
    */
    case CHANGE_HUNTER_RESOURCE:
      return state.setIn(['resources', action.resource], state.getIn(['resources', action.resource]) + action.value);
    case SET_HUNTER_RESOURCE:
      return state.setIn(['resources', action.resource], action.value);
    /*
      ----

      Manipulate hunter's stats

      ----
    */
    case CHANGE_HUNTER_STAT:
      return state.setIn(['stats', action.resource], state.getIn(['stats', action.resource]) + action.value);
    case SET_HUNTER_STAT:
      return state.setIn(['stats', action.resource], action.value);
    /*
      ----

      Default

      ----
    */
    default:
      return state;
  }
}
