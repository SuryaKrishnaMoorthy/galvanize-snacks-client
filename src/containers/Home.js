import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getFeaturedSnax} from '../state/actions'


import {Container, Row, Col} from 'reactstrap';
import Cards from '../components/Cards'
import Jumbo from '../components/Jumbotron'

class Home extends Component {
  componentDidMount() {
    this.props.getFeaturedSnax()
  }

  render() {
    const jumboStyle = {
      height: {
        height: "90vh"
      },
      title: 'Welcome Snackers',
      subtitle: 'We Are The Ultimate Snackers Database'
    }

    return (
    <Container fluid>
      <Jumbo props={jumboStyle}/>

      <section id="who" className="container-fluid">
        <h1>Who We Are</h1>
      </section>

      <section id="what" className="container-fluid">
        <Row>
          <Col>
            <h1>What We Do</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="circle"></div>
          </Col>
          <Col>
            <div className="circle"></div>
          </Col>
          <Col>
            <div className="circle"></div>
          </Col>
        </Row>
      </section>

      <section id="featured-products" className="container-fluid">
        <h1>Featured Products</h1>
          <Cards props={this.props.featuredSnacks}/>
      </section>
    </Container>)
  }
}

const mapStateToProps = ({featuredSnacks}) => ({featuredSnacks})
const mapDispatchToProps = dispatch => bindActionCreators({
  getFeaturedSnax
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
