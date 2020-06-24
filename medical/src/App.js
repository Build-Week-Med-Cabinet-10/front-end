import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/header'
import CTA from './components/CTA'
import StrainCards from './components/Strains/strainCards'
import Footer from './components/Footer/Footer'
import {Route, Link} from 'react-router-dom'
import CreateUser from './components/signup/CreateUser'
import LoginForm from './components/Login'


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

        <StrainCards />

      </Route>


      <Route path="/register">

        <CreateUser />

      </Route>

        <Route path="/login">

          <LoginForm />

        </Route>
     

    <Footer />

    </App>
  );
}

export default App;
