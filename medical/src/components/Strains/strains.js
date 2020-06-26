import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../../utilities/axiosWithAuth";
import StrainCard from "./StrainCard";
import styled, { css } from "styled-components";
import { user } from "../../actions"
import { getToken } from "../../utilities"



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
class Strains extends React.Component {
  state = { strains: [] }

  componentDidMount() {
    this.getStrainsList();
  }

  getStrainsList = e => {
    const token = JSON.parse(localStorage.getItem('token'))

    axiosWithAuth()
      .get('api/auth/cannabis')
      .then(res => {
        console.log(res);
        this.setState({ strains: res.data })
      })
      .catch(error =>
        console.log(error)
      )
  };
  render () {
    return (
      
      <StrainsContainer>
       <StrainListControl>
         <SButton name="indica" onClick={() => setType("Indica")}>
           Indica
         </SButton>
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
              strainName={strain.name}
              race={strain.race}
              id={strain.id}
            />
          );
        })}
      </StrainCardContainer>
    </StrainsContainer>
    )
  }
}
export default Strains;
// export default function StrainList(props) {
//   const [strains, setStrains] = useState([]);
//   const [type, setType] = useState("Indica");
//   const [filteredStrains, setFilteredStrains] = useState([]);

//   const filterList = name => {
//     const filteredList = strains.filter(strain =>
//       strain.name.toLowerCase().includes(name.toLowerCase())
//     );
//     setFilteredStrains(filteredList);
//   };
//   const getStrains = () => {
//     // const token = JSON.parse(localStorage.getItem('token'))
//     // axios({
//     //   "method":"POST",
//     //   "url":"https://med-cabinet-backend.herokuapp.com//api/auth/cannabis/",
//     //   "headers":{
//     //   "content-type":"application/x-www-form-urlencoded",
//     //   "x-rapidapi-host":"StrainraygorodskijV1.p.rapidapi.com",
//     //   "x-rapidapi-key":"273bc202dbmsh49d80387c5f7502p14618ajsne8e81cda88a7",
//     //   "useQueryString":true
//     //   },"data":{
      
//     //   }
//     //   })
//   getToken();
//     axiosWithAuth()
//       .get('/api/auth/cannabis/')
//       .then((response)=>{
//         console.log(response.data)
//       })
//       .catch((error)=>{
//         console.log(error)
//       })
//   };
//   useEffect(() => {
//     getStrains();
//   }, [type]);
//   useEffect(() => {
//     filterList(props.nameToSearch);
//   }, [props.nameToSearch]);

//   if (filteredStrains.length > 0) {
//     return (
//       <StrainsContainer>
//         <StrainListControl>
//           <SButton name="indica" onClick={() => setType("Indica")}>
//             Indica
//           </SButton>
//           <SButton primary name="hybrid" onClick={() => setType("Hybrid")}>
//             Hybrid
//           </SButton>
//           <SButton tertiary name="sativa" onClick={() => setType("Sativa")}>
//             Sativa
//           </SButton>
//         </StrainListControl>
//         <h3>All {type} strains listed below:</h3>
//         <StrainCardContainer>
//           {filteredStrains.map(strain => {
//             return (
//               <StrainCard
//                 key={strain.id}
//                 sName={strain.name}
//                 race={strain.race}
//                 id={strain.id}
//               />
//             );
//           })}
//         </StrainCardContainer>
//       </StrainsContainer>
//     );
//   }
//   return (
//     <StrainsContainer>
//       <StrainListControl>
//         <SButton name="indica" onClick={() => setType("Indica")}>
//           Indica
//         </SButton>
//         <SButton primary name="hybrid" onClick={() => setType("Hybrid")}>
//           Hybrid
//         </SButton>
//         <SButton tertiary name="sativa" onClick={() => setType("Sativa")}>
//           Sativa
//         </SButton>
//       </StrainListControl>
//       <h3> All {type} strains listed below:</h3>
//       <StrainCardContainer>
//         {strains.slice(0, 100).map(strain => {
//           return (
//             <StrainCard
//               key={strain.id}
//               sName={strain.name}
//               race={strain.race}
//               id={strain.id}
//             />
//           );
//         })}
//       </StrainCardContainer>
//     </StrainsContainer>
//   );
// }
