import React from 'react';
import styled from 'styled-components';
import location from '../../components/location.svg';


const LocatorDiv = styled.div
`
display: flex;
align-items: center;
flex-direction: row;
width: 14rem;
height: 2rem;
padding-right: 2rem;
margin-left: -2rem;
padding-left: 4rem;
background-color: #0bb565;

        img {
          width: 1rem;
          margin-right: 1rem;
        }

        span {
          text-transform: uppercase;
          font-weight: 900;
          font-size: .9rem;
        }

`

function Locator() {

    


  return (

    

  <LocatorDiv>

    <img src={location} />

    <span>Find the relief you need</span>



  </LocatorDiv>










  );
}

export default Locator;
