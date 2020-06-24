import React from "react";
import styled from "styled-components";
import RecommendationsList from "./RecommendationsList";
const RecomendationsContainer = styled.div`
  font-size: 1rem;
  min-height: 100%;
  max-width: 100px;
  margin: 0 auto;
  min-width: 80%;
  padding-top: 2rem;
  font-family: 'Roboto', sans-serif;
  p {
    text-align: left;
    font-weight: bold;
    padding: 0 1%;
    font-family: 'Roboto', sans-serif;
  }
`;
export default function Recomendations() {
  return (
    <RecomendationsContainer>
      <RecommendationsList />
    </RecomendationsContainer>
  );
}
