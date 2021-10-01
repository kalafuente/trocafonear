import React from 'react'
import { Link } from 'react-router-dom';
import { MenuContainer, MenuItem, SubItem, Image, LinkStyle } from './MenuStyles';

const Navigation: React.FunctionComponent<{}> = ({ }) => {
    return (
        <header>
            <MenuContainer>
                <MenuItem>
                    <Image><Link to="/handbook"><img src="https://www.trocafone.com/assets/img/global/common/trocafone.svg" alt="Logo" /></Link></Image>
                </MenuItem>
                <MenuItem>
                    <SubItem><Link to="/handbook/history"><LinkStyle>La historia</LinkStyle></Link></SubItem>
                    <SubItem  ><Link to="/handbook/values"><LinkStyle>Los valores</LinkStyle></Link></SubItem>
                    <SubItem ><Link to="/handbook/people"><LinkStyle>La gente</LinkStyle></Link></SubItem>
                    <SubItem><Link to="/handbook/first-steps"><LinkStyle>Los primeros pasos</LinkStyle></Link></SubItem>
                </MenuItem>
            </MenuContainer>
        </header>
    )
}

export default Navigation