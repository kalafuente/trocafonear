import styled from 'styled-components'

export const HomeTitle = styled.h3`
    display: block;
    margin: 0;
    font-size: 35px;
    font-weight: 800;
    color: black;
    margin-top: 20px;
    @media (max-width: 768px) {
    font-size: 30px;
    }
`
export const HomeText = styled.p`
     font-size: 17px;
    color: black;
    max-width: 750px;
    margin-top: 30px;

`

export const Item = styled.nav`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    flex-direction: column-reverse;
    margin-bottom: 130px;

    img {
        width: 90%;
        min-width: 330px;
        max-width: 400px;
    }
`
export const SubItem = styled.div`
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const MenuItem = styled.div`
`


export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto 120px;
    @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    }
`

export const DescriptionTitle = styled.h3`
font-size: 35px;
color: #4d649b;

`

export const DescriptionSubtitles = styled.h5`
font-size: 19px;
color: #696969;

`


export const OtherInfoWrapper = styled.div`
background-color: #fafafa;
`