<<<<<<< HEAD
import react from 'react';
import { useState, useEffect } from 'react'




function StrainCards() {

    fetch("https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/strains", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com",
		"x-rapidapi-key": "1329c33f5dmshd8d569b40720847p153a4fjsn88ef2266672c"
	}
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

    return (



        null



    )









}

export default StrainCards;
=======
import React from "react";
import styled, { css } from "styled-components";
import marijuana from "../assets/medical.jpg";
const StrainCardTemp = styled.div`

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid black;
  max-width: 20%;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: #0b9444;

    p {
      color: #ffffff;
    }

`;

const TypeMar = styled.div`

  background-color: #0bb565;
  color: #ffffff;
  width: calc(100% - 1rem) ;
  font-weight: bold;
  font-size: 0.9rem;
  padding: .5rem;
  font-family: 'Roboto', sans-serif;
 `;


const StrainCard = props => {
  return (
    <StrainCardTemp>
      <TypeMar>
        Type: {props.type} 
      </TypeMar>
      
      <img src={marijuana} alt="flower_photo" width="100%" height="100%" />
      <p> {props.strainName} </p>
    </StrainCardTemp>
  );
};
export default StrainCard;
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7
