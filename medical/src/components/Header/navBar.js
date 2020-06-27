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

<Link to="/dashboard/strains" id="strainsLink">Strains</Link>
<Link to="/dashboard/providers" id="mmjDoctorsLink">MMJ Doctors</Link>
<Link to="/dashboard/stores" id="storesLink">Stores</Link>
<Link to = "/dashboard/preferences" id="prefsLink">Preferences</Link>
                
                

            </NavContain>

    );


}

export default NavBar;