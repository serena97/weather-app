// action is payload
import {FETCH_WEATHER} from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]) appends data to state. don't use push as it'll mutate the state whereas concat will make a new array everytime and return it
    return [action.payload.data, ... state] //prepends data to state
  }

  console.log('Action received', action)
  return state
}
