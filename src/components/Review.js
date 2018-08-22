import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { editReview } from '../state/actions'
import ReactStars from 'react-stars'
import {Button, ButtonGroup, Row, Col,  Container, Form, FormGroup, Label, Input } from 'reactstrap';

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateReview: false
    }
  }

  toggleUpdate = () => {
    this.setState({
      updateReview: !this.state.updateReview
    });
  }

  updateReview = (snackId, reviewId, title, text, rating) => {
    this.props.editReview(snackId, reviewId, title, text, rating)
  }


  render() {

    const {
      review: {
        title,
        text,
        rating
      }
    } = this.props

    let updatedRating = this.props.review.rating
    const ratingChanged = (newRating) => {
      updatedRating = newRating
    }


    return (
    <Container id="review-block">
      {
        this.state.updateReview
          ? <Form className="form-horizontal well" onSubmit={event => {
                event.preventDefault();
                this.updateReview(this.props.review.snack_id, this.props.review.id, event.target.title.value, event.target.text.value, updatedRating);
                this.toggleUpdate();
              }}>
              <div>
                <h4>Edit Review</h4>
              </div>
              <FormGroup>
                <Label for="rating" sm={2}>Rating:
                </Label>
                <ReactStars count={5} name="rating" id="rating" value={rating} onChange={ratingChanged} half={false} size={24} color2={'#ffd700'} required/>
              </FormGroup>
              <FormGroup row>
                <Label for="title" sm={2}>Title</Label>
                <Col sm={9}>
                  <Input type="textarea" defaultValue={title} required="required" name="title" id="title"/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="title" sm={2}>Description</Label>
                <Col sm={9}>
                  <Input type="textarea" defaultValue={text} required="required" name="text" id="text"/>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{
                    size: 10,
                    offset: 2
                  }}>
                  <Button outline color="success">Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          : null
      }

      {
        !this.state.updateReview
          ? <div>
              <Row>
                <h4 id="review-title">{title}</h4>
              </Row>
              <Row  id="review-block-rate">
                <ReactStars count={5} value={rating} edit={false} size={24} color2={'#ffd700'}/>
              </Row>
              <Row>{text}</Row>
            <br/>
              <ButtonGroup>
                <Button outline color="warning" size="sm" onClick={this.toggleUpdate}>Edit Review</Button>
              </ButtonGroup>
            </div>
          : null
      }
    </Container>)
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({editReview}, dispatch)

export default connect(null, mapDispatchToProps)(Review)
