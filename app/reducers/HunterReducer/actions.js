import {
  CHANGE_HUNTER_RESOURCE,
  SET_HUNTER_RESOURCE,
  CHANGE_HUNTER_STAT,
  SET_HUNTER_STAT,
} from './constants'

// Manipulate hunter's resources

export function changeHunterResource(data) {
  return {
    type: CHANGE_HUNTER_RESOURCE,
    resource: data.resource,
    value: data.value,
  }
}

export function setHunterResource(data) {
  return {
    type: SET_HUNTER_RESOURCE,
    resource: data.resource,
    value: data.value,
  }
}

// Manipulate hunter's stats

export function changeHunterStat(data) {
  return {
    type: CHANGE_HUNTER_STAT,
    stat: data.stat,
    value: data.value,
  }
}

export function setHunterStat(data) {
  return {
    type: SET_HUNTER_STAT,
    stat: data.stat,
    value: data.value,
  }
}
