import React from 'react';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';
import "../Header/navLinks.css"






function NavBar() {

    const NavContain = styled.div
    `

    display: flex;
    align-items: space-between;
    justify-content: flex-start;
    margin-left: 1rem;
    margin-top: 5.5rem;
    align-items: center;
    height: 8rem;
    width: 60%;

    `






    return (
        
            <NavContain>

<Link to="/Strains" id="strainsLink">Strains</Link>
<Link to="/Providers" id="mmjDoctorsLink">MMJ Doctors</Link>
<Link to="/Stores" id="storesLink">Stores</Link>
                
                

            </NavContain>

    );


}

export default NavBar;