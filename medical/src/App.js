import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/header'
import CTA from './components/CTA'
import Footer from './components/Footer/Footer'
// import CreateUser from './components/signup/CreateUser'
// import Login from './components/login/Login'
// import Dashboard from './components/Dashboard/Dashboard'
import Recommendations from './components/Recommendations/RecommendationsList';
import WelcomePage from "./components/WelcomePage"
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

      {/* <Route exact path="/">

        <CTA />

      </Route>


      <Route path="/register">

        <CreateUser />

      </Route>

        <Route path="/login">

          <Login />

        </Route>

        <Route path="/dashboard">

          <DashBoard userName="Tom Sawyer"/>

        </Route>

        <Route path="/strains">


            <Recommendations />


        </Route> */}
        
     <WelcomePage username="Tom Sawyer"/>

    <Footer />

    </App>
  );
}

export default App;
