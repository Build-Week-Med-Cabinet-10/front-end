import React from 'react';
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import { Button } from 'reactstrap';



    function DashBoard() {


        const DashContain = styled.div
        `
        display:flex;
        flex-direction: row;
        width: 100%;    
        `

            const DashCard = styled.div
            `
            display: flex;
            flex-direction: column;
            width: 100%; 
            max-width: 1200px; 
            margin: 2rem auto;     
            `

                const DashCardRow = styled.div
                `
                display: flex;
                flex-direction: row;
                width: 100%;
                align-items: space-between;
                justify-content: space-between;

                `




        return (
            
            <DashCard>

                <DashCardRow>

                    <button>hello</button>
                    <button>hello</button>
                </DashCardRow>


            </DashCard>


        )

    }
    export default DashBoard