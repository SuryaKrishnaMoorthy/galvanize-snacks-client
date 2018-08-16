import { combineReducers } from 'redux'
import { GET_ALL_SNAX, GET_ALL_REV, GET_FEATURED_SNAX} from './actions'

const INITIAL_VALUE = []

const reviewList = (state = [], action) => {
  switch(action.type){
    case GET_ALL_REV:
      return action.payload
    default:
      return state
  }
}

const snackList = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case GET_ALL_SNAX:
      return action.payload
    default:
      return state
  }
}

const featuredSnacks = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case GET_FEATURED_SNAX:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ snackList, reviewList, featuredSnacks})
