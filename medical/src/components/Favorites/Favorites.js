import React, { useState, useEffect } from "react";
import axios from "axios";
import StrainCard from "../Strains/StrainCard";
import styled from "styled-components";

const StrainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  min-height: 100%;
  min-width: 99%;
  font-family: 'Roboto', sans-serif;

    p {
        text-align: left;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }

    h3 {
        text-align: center;
    }
`;

const StrainController = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: 'Roboto', sans-serif;
`;

const StrainCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

const StrainButton = styled.button`
background-color: #0DCA71;
min-width: 12rem;
height: 6rem;
display: flex;
justify-content: center;
padding-top: 2rem;
margin-top: 2rem;

color: white;
box-shadow: 6px 6px 0px #555555;
font-family: roboto;
font-size: 1.5rem;

        &&:hover {
          background-color: #0bb565;
          right: calc(2rem - 3px);
          margin-top: 5px;
          box-shadow: 3px 3px 0px #555555;
          margin-bottom: -6px;
          margin-top: 2rem;
         
        
        }


        span {
          font-size: 1.2rem;
        }
`;

const StrainMaster = styled.div 
`
display: flex;
flex-wrap: wrap;
widt: 25%;
flex-direction: column;
`

const DeleteButton = styled.button 
`


margin: 0 auto;
padding: .5rem;
border: 0;
color: white;
font-weight: 700;
text-transform: uppercase;
background: grey;
border-top: 1px solid black;


`

export default function FavoritesList() {
  const [strains, setStrains] = useState([]);
  const [race, setRace] = useState("Indica");
  useEffect(() => {
    const getStrains = () => {
      
        axios

        .get(
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/race/${race}`
          
        )

        .then(response => {
          setStrains(response.data);
          console.log(response.data)
        })

        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getStrains();
  }, [race]);

  return (

    <StrainContainer>

      <StrainCardContainer>
        {strains.slice(200, 204).map(i => {
          return (
            <>

    

            <StrainCard
              key={i.id}
              strainName={i.name}
              type={i.race}
              id={i.id}
            >
            </StrainCard>

            <DeleteButton>X</DeleteButton>
            
           

         

            </>
          );
        })
        }


      </StrainCardContainer>
    </StrainContainer>
  );
}
