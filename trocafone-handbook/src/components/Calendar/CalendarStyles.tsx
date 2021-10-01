import styled from 'styled-components'

export const MainEvent = styled('div') <{ color : any }>`
margin: auto;
 width: 915px;
 height: 70px;
 background-color: ${props => props.color};
 box-sizing: border-box;
 text-align: left;
 margin: 15px auto;
 @media (max-width: 1100px) {
  width: 100%;
    }
`
export const TitleCalendar = styled.h3`
color: #a7a7a7;
font-size: 21px;
`
