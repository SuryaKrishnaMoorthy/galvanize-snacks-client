import React from 'react'
import Jumbo from './Jumbotron'
import Reviews from '../containers/Reviews'
import { Media } from 'reactstrap';

const Snack = ({props}) => {
  const jumboStyle = {
    height: {
      height: "20vh"
    },
    title: 'snack name'
  }
  return (
  <section>
    <Jumbo props={jumboStyle}/>
    <div>
      <Media>
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    </div>
      <hr className="my-2"/>
      <Reviews/>
  </section>
)}

export default Snack
