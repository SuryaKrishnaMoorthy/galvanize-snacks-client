import React from 'react'
import {Container} from 'reactstrap';
import Review from './Review'

const Reviews = ({props}) => {

    return (<Container>
      {props.map(review => <Review key={review.id} review={review}/>)}
    </Container>)
  }

  export default Reviews
