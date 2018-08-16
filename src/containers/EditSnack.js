import React, {Component} from 'react'
import SnackForm from '../components/SnackForm'
import Jumbo from '../components/Jumbotron'
import {Container} from 'reactstrap';

export default class EditSnack extends Component {
  render() {
    const jumboStyle = {
      height: {
        height: "30vh"
      },
      title: 'Edit Snack',
      subtitle: ''
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
