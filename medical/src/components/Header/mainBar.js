import React from 'react';
import styled from 'styled-components';
import location from '../../components/location.svg';
import logoImg from '.././assets/weed.svg';
import NavBar from '../../components/Header/navBar'
import {Link, Route} from 'react-router-dom'


const MainBarDiv = styled.div
`
display: flex;
align-items: center;
flex-direction: row;
width: calc(100% - 2rem);
height: 8rem;
padding-left: 2rem;
margin-top: -2rem;
background-color: #ffffff;

`

const LogoDiv = styled.div 
`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 14rem;
height: 6rem;
margin: 1rem;
padding-right: 2rem;
margin-top: -1rem;
margin-left: -2rem;
padding-left: 3rem;

        img {
            max-width: 3rem;
        }

        button {
          background-color: transparent;
          border: 0;
        }

`

const Title = styled.h1
`
font-family: 'Viga', sans-serif;
font-weight: 900;
text-transform: uppercase;
margin-top: -.3rem;
margin-bottom: 0;

`

function MainBar() {

    


  return (

    

  <MainBarDiv>

    <Link to="/">
    <LogoDiv>

      
  
      <img src={logoImg} />

      <Title>Med Cabinet</Title>



      </LogoDiv>
      </Link>

    <NavBar />

  



  </MainBarDiv>










  );
}

export default MainBar;
