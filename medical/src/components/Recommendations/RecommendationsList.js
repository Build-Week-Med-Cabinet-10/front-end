import React, { useState, useEffect } from "react";
import axios from "axios";
import StrainCard from "../Strains/StrainCard";
<<<<<<< HEAD
import styled from "styled-components";
=======
import styled, {css} from "styled-components";
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7

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
<<<<<<< HEAD
=======


>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7
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
<<<<<<< HEAD
margin-top: 2rem;
=======
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7

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
<<<<<<< HEAD
          margin-top: 2rem;
=======
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7
         
        
        }


        span {
          font-size: 1.2rem;
        }
`;

export default function RecommendationList() {
  const [strains, setStrains] = useState([]);
<<<<<<< HEAD
  const [race, setRace] = useState("Indica");
=======
  const [type, setType] = useState("Indica");
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7
  useEffect(() => {
    const getStrains = () => {
      
        axios

        .get(
<<<<<<< HEAD
          `https://strainapi.evanbusse.com/kvNFH0z/strains/search/race/${race}`
          
=======
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/race/${type}`
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7
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
<<<<<<< HEAD
  }, [race]);
=======
  }, [type]);
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7

  return (

    <StrainContainer>

      <StrainController>

<<<<<<< HEAD
        <StrainButton name="indica" onClick={() => setRace("Indica")}>
          Indica
        </StrainButton>

        <StrainButton name="hybrid" onClick={() => setRace("Hybrid")}>
          Hybrid
        </StrainButton>

        <StrainButton name="sativa" onClick={() => setRace("Sativa")}>
=======
        <StrainButton name="indica" onClick={() => setType("Indica")}>
          Indica
        </StrainButton>

        <StrainButton name="hybrid" onClick={() => setType("Hybrid")}>
          Hybrid
        </StrainButton>

        <StrainButton name="sativa" onClick={() => setType("Sativa")}>
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7
          Sativa
        </StrainButton>

      </StrainController>

<<<<<<< HEAD
      <h3>We recommended the {race} strains listed below:</h3>
      <StrainCardContainer>
        {strains.slice(200, 240).map(i => {
          return (
            <StrainCard
              key={i.id}
              strainName={i.name}
              type={i.race}
              id={i.id}
=======
      <h3>We recommended the {type} strains listed below:</h3>
      <StrainCardContainer>
        {strains.slice(200, 240).map(strain => {
          return (
            <StrainCard
              key={strain.id}
              strainName={strain.name}
              type={strain.race}
              id={strain.id}
>>>>>>> 594cbeafeed4df82d09c86b81bab4463ac64c9c7
            />
          );
        })
        }

      </StrainCardContainer>
    </StrainContainer>
  );
}
