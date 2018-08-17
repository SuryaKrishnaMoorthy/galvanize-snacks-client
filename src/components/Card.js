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
      const link = `/snack/${id}`
    return (
           <Card sm="6" className="col-lg-4 col-md-2 col-sm-2">
             <CardBody>
               <CardTitle>{name}</CardTitle>
               <CardSubtitle>${price}</CardSubtitle>
             </CardBody>
             <CardImg id="card_img" width="100%" src={img} alt="Card image cap" />
             <CardBody>
               <CardText>{description}</CardText>
               <Link to={link}>
                 <Button color="info" size="lg" block>
                   More Info
                 </Button>
               </Link>
             </CardBody>
           </Card>
    )
  }
}

export default SingleCard
