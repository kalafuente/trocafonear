import React from 'react'
import { Card, CardCircle, CardContent } from './CardsStyles';


const Cards = (props :any) => {
  return (
    <Card>
      <CardCircle>
        {props.order}
      </CardCircle>
      <CardContent>
        <img src={props.img} />
        {props.text}
      </CardContent>
    </Card>
  )
}

export default Cards