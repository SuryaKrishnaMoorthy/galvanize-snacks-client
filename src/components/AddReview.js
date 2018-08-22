import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import ReactStars from 'react-stars'

class AddReview extends React.Component {

  render() {

    let reviewRate;
    const ratingChanged = (newRating) => {
      reviewRate = newRating
    }

    return (<Container>
      <Form className="form-horizontal well" onSubmit={event => {
          event.preventDefault();
          this.props.handleAddReview(event.target.title.value, event.target.text.value, reviewRate);
          this.props.toggleAdd();
        }}>
        <div>
          <h4>Add Review</h4>
        </div>
        <FormGroup>
          <Label for="rating" sm={2}>
            Rating:</Label>
          <ReactStars count={5} value={ratingChanged} onChange={ratingChanged} half={false} size={24} color2={'#ffd700'} required="required"/>
        </FormGroup>

        <FormGroup row="row">
          <Label for="title" sm={2}>Title</Label>
          <Col sm={9}>
            <Input type="textarea" required="required" name="title" id="title"/>
          </Col>
        </FormGroup>

        <FormGroup row="row">
          <Label for="description" sm={2}>Description</Label>
          <Col sm={9}>
            <Input type="textarea" required="required" name="text" id="text"/>
          </Col>
        </FormGroup>
        <FormGroup check="check" row="row">
          <Col sm={{
              size: 10,
              offset: 2
            }}>
            <Button outline="outline" color="success">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>);
  }
}

export default AddReview;
