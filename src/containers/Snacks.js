import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAllSnax} from '../state/actions'
import {Button} from 'reactstrap';
import Jumbo from '../components/Jumbotron'
import Cards from '../components/Cards'

class Snacks extends Component {

  componentDidMount() {
    this.props.getAllSnax()
  }

  render() {
    const jumboStyle = {
      height: {
        height: "40vh"
      },
      title: 'Snackers Realm',
      subtitle: 'The Ultimate Snackers Database'
    }
    return (
    <section>
      <Jumbo props={jumboStyle}/>
      <div className="text-right">
        <p className="lead">
          <Link to="/addsnack">
            <Button outline color="success">
              Add Snack
            </Button>
          </Link>
        </p>
        <hr className="my-2"/>
      </div>
      <Cards props={this.props.snackList}/>
    </section>)
  }
}

const mapStateToProps = ({snackList}) => ({snackList})
const mapDispatchToProps = dispatch => bindActionCreators({
  getAllSnax
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Snacks)
