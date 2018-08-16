import React from 'react'
import Jumbo from './Jumbotron'
import Reviews from '../containers/Reviews'

const Snack = ({props}) => {
  const jumboStyle = {
    height: {
      height: "20vh"
    },
    title: 'snack name'
  }
  return (<section>
    <Jumbo props={jumboStyle}/>
    <div>
            snack info
      <hr className="my-2"/>
      <Reviews />
    </div>
  </section>)
}

export default Snack
