import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/header'
import CTA from './components/CTA'
import Footer from './components/Footer/Footer'
import {Route, Link} from 'react-router-dom'


function App() {

  const App = styled.div
  `max-width: 1200px;
   margin: 0 auto; 
  `


  return (
    <App>

     <Header />

      <Route exact path="/">

        <CTA />

      </Route>
     

    <Footer />

    </App>
  );
}

export default App;
