import styled from 'styled-components'

export const Card = styled.div`
 border-radius: 25px;
 box-sizing: border-box;
 width: 300px;
  height: 247px;
  box-shadow: 0 20px 40px 0 rgba(97, 89, 76, 0.15);
  padding: 10px;
  background-color: #ffffff;
  @media (max-width: 768px) {
    margin-bottom: 30px;
    }
`

export const CardCircle = styled.span`
    text-align: center;
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
    width: 70px;
    height: 70px;
    margin: 20px 0;
  }
  font-weight: 600;
   font-size: 19px;
  color: #696969;
 
`