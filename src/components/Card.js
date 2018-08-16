import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class SingleCard extends React.Component {

  render() {
    const {
        card: {
          id,
          name,
          description,
          price,
          img,
          is_boolean
        }
      } = this.props
    return (
           <Card sm="6">
             <CardBody>
               <CardTitle>{name}</CardTitle>
               <CardSubtitle>{price}</CardSubtitle>
             </CardBody>
             <CardImg width="100%" src={img} alt="Card image cap" />
             <CardBody>
               <CardText>{description}</CardText>
               <Link to="/snack">
                 <Button color="secondary" size="lg" block>
                   More
                 </Button>
               </Link>
             </CardBody>
           </Card>
    )
  }
}

export default SingleCard
