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
  margin-top: 2rem;
  align-items: center;


  p {
    text-align: left;
    font-weight: bold;
    
  }
`;
const StrainListControl = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Roboto";
  max-width: 80%;
`;

const StrainCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  width: 100%;
`;

const StrainButton = styled.button
`
background-color: #0DCA71;
min-width: 12rem;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
margin: 2rem;

color: white;
box-shadow: 6px 6px 0px #555555;
font-family: roboto;

        &&:hover {
          background-color: #0bb565;
          right: calc(2rem - 3px);
          margin-top: 5px;
          margin-bottom: -5px;
          box-shadow: 3px 3px 0px #555555;
          margin-top: calc(2rem + 6px);
        
        }


        span {
          font-size: 1.2rem;
        }
`;



export default function StrainList(props) {
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

    

   


   
 
  const filterList = name => {
    const filteredList = strains.filter(strain =>
      strain.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredStrains(filteredList);
  }; 

  // const api = 'https://med-cabinet-backend.herokuapp.com'; 
  // const token = getToken(); /*take only token and save in token variable*/
  // axios.get(`https://med-cabinet-backend.herokuapp.com=&:${token}`)
  // .then(res => {
  // console.log(res);
  // // .catch((error) => {
  // //   console.log(error)
  // });

    const getStrains = () => {
      axios
  
        .get(
          `https://strainapi.evanbusse.com/VUGyzwt/strains/search/race/${type}`
        )
  
        .then(response => {
          setStrains(response.data);
          setFilteredStrains(strains);
        })
  
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    useEffect(() => {
      getStrains();
    }, [type]);
    useEffect(() => {
      filterList(props.nameToSearch);
    }, [props.nameToSearch]);

  if (filteredStrains.length > 0) {
    return (
      <StrainsContainer>
        <StrainListControl>
          <StrainButton name="indica" onClick={() => setType("Indica")}>
            Indica
          </StrainButton>
          <StrainButton name="hybrid" onClick={() => setType("Hybrid")}>
            Hybrid
          </StrainButton>
          <StrainButton name="sativa" onClick={() => setType("Sativa")}>
            Sativa
          </StrainButton>
        </StrainListControl>
        <h3> Recommended {type} strains listed below:</h3>
        <StrainCardContainer>
          {filteredStrains.map(strain => {
            return (
              <StrainCard
                key={strain.id}
                strainName={strain.name}
                race={strain.race}
                id={strain.id}
              />
            );
          })}
        </StrainCardContainer>
      </StrainsContainer>
    );
  }
  
  return (
    <StrainsContainer>
      <StrainListControl>
        <StrainButton name="indica" onClick={() => setType("Indica")}>
          Indica
        </StrainButton>
        <StrainButton primary name="hybrid" onClick={() => setType("Hybrid")}>
          Hybrid
        </StrainButton>
        <StrainButton tertiary name="sativa" onClick={() => setType("Sativa")}>
          Sativa
        </StrainButton>
      </StrainListControl>
      <h3> Recommended {type} strains listed below:</h3>
      <StrainCardContainer>
        {strains.slice(0, 8).map(strain => {
          return (
            <StrainCard
              key={strain.id}
              strainName={strain.name}
              race={strain.race}
              id={strain.id}
            />
          );
        })}
      </StrainCardContainer>
    </StrainsContainer>
  );
}
