import React from 'react'
import { ItemWrapper } from './CalendarItemStyles'


const CalendarItem = (props:any) => {
  return (
    <ItemWrapper>
      <span>
        {props.time}
      </span>
      <span>{props.event}</span>
    </ItemWrapper>
  )
}

export default CalendarItem