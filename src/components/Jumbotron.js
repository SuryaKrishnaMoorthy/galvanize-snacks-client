import {Jumbotron, Button} from 'reactstrap';
import React from 'react';

export default class Jumbo extends React.Component {
  render() {
    return (<div>
      <Jumbotron>
        <div className="img"></div>
        <div className="container">
        <h1 className="display-3">Snackers Realm</h1>
        <hr className="my-2"/>
        <p className="lead">
          The Ultimate Snackers Database
        </p>
        <p className="lead">
          <Button color="primary">Browse</Button>
        </p>
      </div>
      </Jumbotron>
    </div>)
  }
}
