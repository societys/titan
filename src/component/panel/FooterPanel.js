import React from 'react'
import styled from 'styled-components';
import logoImage from '../../static/img/titan_logo.svg';
import {
    Visibility,
    Button
} from 'semantic-ui-react'

export const FooterPanel = () => {

    function handleTopPassed() {
        console.log('mounted');
    }

    return (
        <Visibility
            onTopPassed={handleTopPassed}
        >
            <FooterPanelMain>
                <LogoImage src={logoImage} alt='logo'/>
                <div>
                    <Button circular color='facebook' icon='facebook' />
                    <Button circular color='twitter' icon='twitter' />
                    <Button circular color='linkedin' icon='linkedin' />
                    <Button circular color='instagram' icon='instagram' />
                </div>
            </FooterPanelMain>
        </Visibility>
    );
}

const FooterPanelMain = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    padding:10px;
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const LogoImage = styled.img`
`;
