import axios from 'axios'
export const GET_ALL_SNAX = 'GET_ALL_SNAX'
export const GET_FEATURED_SNAX = 'GET_FEATURED_SNAX'
export const GET_ONE_SNAX = 'GET_ONE_SNAX'


const featuredCards = [
  {
    id: 1,
    img: 'https://foodsogoodmall.com/wp-content/uploads/2014/05/Pan-Seared-Oven-Roasted-Veal-Chops.jpg',
    name: 'Slide 1',
    price: 'Welcome to Galvanize Snacks!',
    description: 'Where you can find all your most eaten snacks'
  }, {
    id: 2,
    img: 'https://foodsogoodmall.com/wp-content/uploads/2014/05/Pan-Seared-Oven-Roasted-Veal-Chops.jpg',
    name: 'Slide 1',
    price: 'Welcome to Galvanize Snacks!',
    description: 'Where you can find all your most eaten snacks'
  }, {
    id: 3,
    img: 'https://foodsogoodmall.com/wp-content/uploads/2014/05/Pan-Seared-Oven-Roasted-Veal-Chops.jpg',
    name: 'Slide 1',
    price: 'Welcome to Galvanize Snacks!',
    description: 'Where you can find all your most eaten snacks'
  }
]



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
      dispatch({type: GET_FEATURED_SNAX, payload: featuredCards})
  }
}
