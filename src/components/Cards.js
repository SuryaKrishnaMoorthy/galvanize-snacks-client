import React from 'react'
import {connect} from 'react-redux'
import {CardColumns} from 'reactstrap';
import Card from './Card'

const Cards = ({props}) => {
    return (
    <CardColumns>
     {
        props.map(card => {
          return (<Card key={card.id} card={card}/>)
        })
      }
    </CardColumns>)
  }

  export default Cards
