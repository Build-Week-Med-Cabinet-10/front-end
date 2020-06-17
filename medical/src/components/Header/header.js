import React from 'react';
import styled from 'styled-components'
import fonts from '../../components/fonts.css'

import Locator from './locator'
import Login from './loginPromo'


function Header() {

    const HeaderDiv = styled.div
    `
    
    `

    const PromoBar = styled.div
    `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b9444;
    height: 2rem;
    font-weight:
    `

    const PromoBarInner = styled.div 
    `
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 2rem auto;
    color: white;
    font-family: 'Roboto Condensed', sans-serif;

    `
    
  return (

    

   



    <HeaderDiv>
        <PromoBar >

            <PromoBarInner> 

                <Locator />
                
            
            </PromoBarInner>

        </PromoBar >



    </HeaderDiv>











  );
}

export default Header;
