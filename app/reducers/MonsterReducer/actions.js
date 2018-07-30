import {
  CHANGE_MONSTER_RESOURCE,
  SET_MONSTER_RESOURCE,
  CHANGE_MONSTER_STAT,
  SET_MONSTER_STAT,
} from "../MonsterReducer/constants";

// Manipulate monster's resources

export function changeMonsterResource(data) {
  return {
    type: CHANGE_MONSTER_RESOURCE,
    resource: data.resource,
    value: data.value,
  }
}

export function setMonsterResource(data) {
  return {
    type: SET_MONSTER_RESOURCE,
    resource: data.resource,
    value: data.value,
  }
}

// Manipulate monster's stats

export function changeMonsterStat(data) {
  return {
    type: CHANGE_MONSTER_STAT,
    stat: data.stat,
    value: data.value,
  }
}

export function setMonsterStat(data) {
  return {
    type: SET_MONSTER_STAT,
    stat: data.stat,
    value: data.value,
  }
}
