import React, {Component} from 'react'
import SnackForm from '../components/SnackForm'
import Jumbo from '../components/Jumbotron'
import {Container} from 'reactstrap';

export default class AddSnack extends Component {
  render() {
    const jumboStyle = {
      height: {
        height: "30vh"
      },
      title: 'Add Snack',
      subtitle: `Can't wait to see what you come up with..`
    }
    return (
    <section>
      <Jumbo props={jumboStyle}/>
      <div id="form">
        <SnackForm />
      </div>
    </section>)
  }
}
