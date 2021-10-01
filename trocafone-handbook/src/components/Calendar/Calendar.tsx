import React from 'react'
import CalendarItem from './CalendarItem/CalendarItem'
import { MainEvent, TitleCalendar } from './CalendarStyles'


const Calendar = () => {
  return (
    <>
      <TitleCalendar>Hoy</TitleCalendar>
      <MainEvent color='#ede8ff'>
        <CalendarItem time="9hs" event="Bienvenida a Trocafone!"></CalendarItem>
      </MainEvent>
      <MainEvent color='#daeaff'>
        <CalendarItem time="10hs" event="Reunión con HelpDesk"></CalendarItem>
      </MainEvent>
      <MainEvent color='#fcf1cd'>
        <CalendarItem time="11hs" event="Reunión con CTO"></CalendarItem>
      </MainEvent>
      <MainEvent color='#fbeae5'>
        <CalendarItem time="12hs" event="Almuerzo con equipo!"></CalendarItem>
      </MainEvent>
      <MainEvent color='#e3f1df'>
        <CalendarItem time="15hs" event="Reunión con Finanzas"></CalendarItem>
      </MainEvent>
    </>
  )
}

export default Calendar