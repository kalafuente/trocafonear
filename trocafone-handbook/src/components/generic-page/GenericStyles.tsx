import styled from 'styled-components'

export const Item = styled.div`
    padding: 40px 130px;
    display: flex;
`
export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const DescriptionContainer = styled.div`
    text-align: center;
`
export const Title = styled.h3`
    display: block;
    margin: 0;
    font-size: 60px;
    color: #4d649b;
    @media (max-width: 768px) {
    font-size: 30px;
    }
`
export const Subtitle = styled.h2`
    font-size: 35px;
    color: #404040;
`
export const Text = styled.p`
    display: block;
    font-size: 20px;
    line-height: 1.5em;
`
