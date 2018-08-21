import axios from 'axios'
export const GET_ALL_SNAX = 'GET_ALL_SNAX'
export const GET_FEATURED_SNAX = 'GET_FEATURED_SNAX'
export const GET_ONE_SNAX = 'GET_ONE_SNAX'
export const POST_REVIEW = 'POST_REVIEW'
export const EDIT_REVIEW = 'EDIT_REVIEW'
export const ADD_SNACK = 'ADD_SNACK'
export const EDIT_SNACK = 'EDIT_SNACK'

export const getAllSnax = () => {
  return(dispatch) => {
    axios.get('https://galvanize-snacks-api.herokuapp.com/api/snacks')
    .then((response) => {
      dispatch({type: GET_ALL_SNAX, payload: response.data.data})
    })
  }
}

export const getOneSnax = (id) => {
  return(dispatch) => {
    axios.get(`https://galvanize-snacks-api.herokuapp.com/api/snacks/${id}`)
    .then((response) => {
      dispatch({type: GET_ONE_SNAX, payload: response.data})
    })
  }
}

export const getFeaturedSnax = () => {
  return(dispatch) => {
    axios.get(`https://galvanize-snacks-api.herokuapp.com/api/snacks/featured`)
    .then((response) => {
      dispatch({type: GET_FEATURED_SNAX, payload: response.data.data})
  })
}
}

export const postReview = (snackId, title, text, rating) => {
  return(dispatch) => {
    axios.post(`https://galvanize-snacks-api.herokuapp.com/api/snacks/${snackId}/reviews`, {title, text, rating})
    .then(() => dispatch(getOneSnax(snackId)))
  }
}

export const editReview = (snackId, reviewId, title, text, rating) => {
  return(dispatch) => {
    axios.patch(`https://galvanize-snacks-api.herokuapp.com/api/snacks/${snackId}/reviews/${reviewId}`, {title, text, rating})
    .then(() => dispatch(getOneSnax(snackId)))
  }
}

export const addSnack = (name, description, price, img, is_perishable) => {
  is_perishable = JSON.parse(is_perishable)
  return(dispatch) => {
    axios.post(`https://galvanize-snacks-api.herokuapp.com/api/snacks/`, {name, description, price, img, is_perishable})
    .then((response) => {
       dispatch(getOneSnax(response.data.data[0].id))
    })
  }
}

export const editSnack = (snackId, name, description, price, img, is_perishable) => {
  console.log(snackId, name, description, price, img, is_perishable)
  is_perishable = JSON.parse(is_perishable)
  return(dispatch) => {
    axios.patch(`https://galvanize-snacks-api.herokuapp.com/api/snacks/${snackId}`, {name, description, price, img, is_perishable})
    .then((response) => {
       dispatch(getOneSnax(snackId))
    })
  }
}
