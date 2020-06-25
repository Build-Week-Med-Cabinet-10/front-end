import React from 'react';
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import { Button } from 'reactstrap';
import UserImage from '../components/assets/user-placeholder.jpg'



    function DashBoard() {


        const DashContain = styled.div
        `
        display:flex;
        flex-direction: row;
        width: 100%;     
        `

        const DashImg = styled.img
        `
        display: inline-block;
        max-width: 100%;
        `

            const DashCard = styled.div
            `
            display: flex;
            flex-direction: column;
            width: 100%; 
            max-width: 1200px; 
            margin: 0rem auto;     
            `

                const DashCardRow = styled.div
                `
                display: flex;
                flex-direction: row;
                width: 100%;
                align-items: space-between;
                justify-content: space-between;
                `

            const UserCard = styled.div
            `
            display: flex;
            flex-direction: column;
            min-height: 300px;
            min-width: 200px;

                span {
                    color: #ffffff;
                    font-weight: 700;
                    text-transform: uppercase;
                    padding: .5rem;
                    text-align: center;
                    background: #0b9444;
                }  
            `

        return (
            

            <DashContain>
                
                <DashCard>

                    <DashCardRow>

                        <UserCard>
                            <DashImg src={UserImage} />

                         <span>{username}</span>

                        </UserCard>

                    </DashCardRow>


                </DashCard>

            </DashContain>

        )

    }
    export default DashBoard