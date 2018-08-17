import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getOneSnax} from '../state/actions'
import {bindActionCreators} from 'redux'
import Jumbo from '../components/Jumbotron'
import Reviews from '../components/Reviews'
import {Media, Col, Row, ButtonGroup, Button} from 'reactstrap';
import ReactStars from 'react-stars'

class Snack extends Component {

  componentDidMount() {
    const snackId = this.props.history.location.pathname.split('/')[2]
    this.props.getOneSnax(snackId)
  }

  render() {
    const {
        singleSnack: {
          id,
          name,
          description,
          price,
          img,
          is_perishable,
          reviews
        }
      } = this.props
      let averages;
      reviews ? averages = reviews.map(ele => ele.rating).reduce((total, rate) => total + parseInt(rate), 0) / reviews.length : null

      const jumboStyle = {
        height: {
          height: "20vh"
        },
        title: name
      }

      const edit_link = `/editsnack/${id}`

    return (
    <section>
      <Jumbo props={jumboStyle}/>
      <div>
        <Media>
          <Col>
            <Media object="object" src={img} id="snack_image" alt="food image"/>
          </Col>
          <Row>
            <Media body="body">
              {description}
              <br/>
              <br/>
              ${price}
              <br/>
              <br/>
              <div id="perishable">{ is_perishable ? <span>Is Perishable</span> : <span>Is Not Perishable</span>}</div>
              <br/>
              <br/>
              <ReactStars count={5} value={averages} edit={false} size={24} color2={'#ffd700'}/>
              <br/>
              <br/>
              <br/>
              <div className="text-right">
                <Link to={edit_link}>
                  <Button size="sm" outline="outline" color="warning">
                    Edit Snack
                  </Button>
                </Link>
              </div>
            </Media>
          </Row>
        </Media>
      </div>
      <hr className="my-2"/>
      { this.props.singleSnack.reviews ? <Reviews props={this.props.singleSnack.reviews}/> : null }
    </section>
  )}
}

const mapStateToProps = ({singleSnack}) => ({singleSnack})
const mapDispatchToProps = dispatch => bindActionCreators({
getOneSnax
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Snack)
