import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ReactStars from 'react-stars'
import {
  Button,
  ButtonGroup,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

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

  render() {
    const ratingChanged = (newRating) => {
      console.log(newRating)
    }

    const {
      review: {
        title,
        text,
        rating,
        user_id
      }
    } = this.props
    return (<Container id="review-block">
      {
        this.state.updateReview
          ? <Form className="form-horizontal well" onSubmit={event => {
                event.preventDefault();
                this.props.updateReview(this.props.review.id, event.target.title.value, event.target.description.value, event.target.rating.value);
                this.toggleUpdate();
              }}>
              <div>
                <h4>Edit Review</h4>
              </div>
              <FormGroup id="review-block-rate">
                <Label for="rating" sm={2}>Rating:
                </Label>
                <ReactStars count={5} value={rating} onChange={ratingChanged} half={false} size={24} color2={'#ffd700'}/>
              </FormGroup>
              <FormGroup id="review-title" row="row">
                <Label for="title" sm={2}>Title</Label>
                <Col sm={9}>
                  <Input type="textarea" defaultValue={title} required="required" name="title" id="title"/>
                </Col>
              </FormGroup>
              <FormGroup row="row">
                <Label for="title" sm={2}>Description</Label>
                <Col sm={9}>
                  <Input type="textarea" defaultValue={text} required="required" name="text" id="text"/>
                </Col>
              </FormGroup>
              <FormGroup check="check" row="row">
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
                <h4>{title}</h4>
              </Row>
              <Row>
                <ReactStars count={5} value={rating} edit={false} size={24} color2={'#ffd700'}/>
              </Row>
              <Row>{text}</Row>
              <ButtonGroup>
                <Button outline color="warning" size="sm" onClick={this.toggleUpdate}>Edit Review</Button>
              </ButtonGroup>
            </div>
          : null
      }
    </Container>)
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Review)
