import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../../utilities/axiosWithAuth";
import StrainCard from "./StrainCard";
import styled, { css } from "styled-components";
import { strains } from "../../actions"
import { getToken } from "../../utilities"
import axios from "axios";



const StrainsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 8vw;
  padding-top: 16vh;
  font-size: 1rem;
  font-family: "Script MT";
  min-height: 100%;
  min-width: 80%;
  max-width: 80%;
  p {
    text-align: left;
    font-weight: bold;
    padding: 0 1%;
  }
`;
const StrainListControl = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Script MT";
`;
const StrainCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-family: "Script MT";
`;
const SButton = styled.button`
  background: forestgreen;
  min-height: 15vh;
  min-width: 15vw;
  border: 1px solid forestgreen;
  border-radius: 30px 10px 30px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-family: "Script MT";
  ${props =>
    props.primary &&
    css`
      background: Purple;
      border: 1px solid Purple;
    `}

  ${props =>
    props.tertiary &&
    css`
      background: red;
      border: 1px solid red;
    `}
`;


const Strains = (props) =>  {
  // state = { strains: [],
 
  // }
  const [strains, setStrains] = useState([]);
  const [type, setType] = useState("Indica");
  const [filteredStrains, setFilteredStrains] = useState([]);

 
  const token = getToken();

  axiosWithAuth().get('/api/cannabis/',  {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
.then(data=> console.log(data.data))

    

   


   
 
    return (
      
      <StrainsContainer>
       <StrainListControl>
         {/* <SButton name="indica" onClick={onClick}> */}
           {/* Indica
         </SButton> */}
         <SButton primary name="hybrid" onClick={() => setType("Hybrid")}>
           Hybrid
         </SButton>
         <SButton tertiary name="sativa" onClick={() => setType("Sativa")}>
           Sativa
         </SButton>
       </StrainListControl>
       <h3> All {type} strains listed below:</h3>
       <StrainCardContainer>
       {strains.slice(0, 100).map(strain => {
          return (
            <StrainCard
              key={strain.id}
              sName={strain.name}
              race={strain.race}
              id={strain.id}
            />
          );
        })}
      </StrainCardContainer>
    </StrainsContainer>
    )
  }

export default Strains;   
