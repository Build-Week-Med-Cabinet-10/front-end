import React from 'react';
import styled from 'styled-components';
import location from '../../components/location.svg';
import logoImg from '../../components/weed.svg'


const MainBarDiv = styled.div
`
display: flex;
align-items: center;
flex-direction: row;
max-width: 40%;
height: 2rem;
margin-left: 2rem;
background-color: #ffffff;

`

const LogoDiv = styled.div 
`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 14rem;
height: 8rem;
padding-right: 2rem;
margin-top: 5rem;
margin-left: -2rem;
padding-left: 3rem;

        img {
            max-width: 3rem;
        }

`

const Title = styled.h1
`
font-family: 'Viga', sans-serif;
font-weight: 900;
text-transform: uppercase;
margin-top: -.3rem;

`

function MainBar() {

    


  return (

    

  <MainBarDiv>


    <LogoDiv>

    <img src={logoImg} />

    <Title>Med Cabinet</Title>


    </LogoDiv>

  



  </MainBarDiv>










  );
}

export default MainBar;
