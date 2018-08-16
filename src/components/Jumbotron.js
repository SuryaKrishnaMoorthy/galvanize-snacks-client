import {Jumbotron} from 'reactstrap';
import React from 'react'

const Jumbo = ({props}) => {
  return (
  <div>
    <Jumbotron style={props.height}>
      <div className="img"></div>
      <div className="container">
        <h1 className="display-3">{props.title}</h1>
        <hr className="my-2"/>
        <p className="lead">
          {props.subtitle}
        </p>
      </div>
    </Jumbotron>
  </div>
)}

export default Jumbo
