import React from 'react';
import styled from 'styled-components';
import logoImage from '../../static/img/titan_logo.svg';

const FloatingNav = styled.div`
    position: absolute;
    top:0;
    z-index: 1;
    margin: 20px;
`;

const LogoImage = styled.img`
  width: 230px;
  height: auto;
    
  @media (max-width: 900px) {
    width: 140px;
    height: auto;
  }
`;

const TopNav = () => {
    return (
        <FloatingNav>
            <LogoImage src={logoImage} alt='logo'/>
        </FloatingNav>
    )
};

export default TopNav;
