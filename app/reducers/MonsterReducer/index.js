import { fromJS } from 'immutable';
import {
  CHANGE_MONSTER_RESOURCE,
  SET_MONSTER_RESOURCE,
  CHANGE_MONSTER_STAT,
  SET_MONSTER_STAT,
} from './constants';
import BiteAction from "../../library/monster/actions/bite";

const initialState = fromJS({
  name: 'Test MonsterReducer 1',
  resources: {
    health: 100,
  },
  stats: {
    actions: 3,
    attack: 5,
  },
  actions: {
    bite: new BiteAction(),
  }
});

export default function monster(state = initialState, action) {
  switch (action.type) {
    /*
      ----

      Manipulate monster's resources

      ----
    */
    case CHANGE_MONSTER_RESOURCE:
      return state.setIn(['resources', action.resource], state.getIn(['resources', action.resource]) + action.value);
    case SET_MONSTER_RESOURCE:
      return state.setIn(['resources', action.resource], action.value);
    /*
      ----

      Manipulate monster's stats

      ----
    */
    case CHANGE_MONSTER_STAT:
      return state.setIn(['stats', action.resource], state.getIn(['stats', action.resource]) + action.value);
    case SET_MONSTER_STAT:
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
