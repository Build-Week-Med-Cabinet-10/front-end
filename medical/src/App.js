import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/header'
import CTA from './components/CTA'
import Footer from './components/Footer/Footer'
import CreateUser from './components/signup/CreateUser'
import LoginForm from './components/Login'
import DashBoard from './components/Dashboard/Dashboard'
import Recommendations from './components/Recommendations/RecommendationsList'
function App() {

  const App = styled.div
  `
   display: flex;
   flex-direction: column;
   align-items: space-between;
 
   min-height: 100vh;
   max-width: 1200px;
   margin: 0 auto; 
  `


  return (
    <App>

     <Header />

      <Route exact path="/">

        <CTA />

      </Route>


      <Route path="/register">

        <CreateUser />

      </Route>

        <Route path="/login">

          <LoginForm />

        </Route>

        <Route path="/dashboard">

          <DashBoard userName="Tom Sawyer"/>

        </Route>

        <Route path="/strains">


            <Recommendations />


        </Route>
     

    <Footer />

    </App>
  );
}

export default App;
