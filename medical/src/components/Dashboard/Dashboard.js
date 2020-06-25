import React from 'react';
// import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import { Button } from 'reactstrap';
import UserImage from '../../components/assets/user-placeholder.jpg'



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
                height: 100%;
                align-items: space-between;
                justify-content: space-between;
                `

            const UserCard = styled.div
            `
            display: flex;
            flex-direction: column;
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

            const StrainForms = styled.div
            `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            background-color: #dcdcdc;
            height: calc(100% - 2rem);
            width: calc(100% - 4rem);
            margin: 2rem 4rem;
            border: 2px solid #555555;
            padding: 2rem;
            box-sizing: border-box;
            `

            const FavoriteStrains = styled.div
            `
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 1rem;
            `

        return (
            

            <DashContain>
                
                <DashCard>

                    <DashCardRow>

                        <UserCard>
                            <DashImg src={UserImage} />
                            <span>Hello</span>
                        </UserCard>

                        <StrainForms>

                          Place code here

                          <FavoriteStrains>

                          </FavoriteStrains>

                        </StrainForms>

                    </DashCardRow>


                </DashCard>

            </DashContain>

        )

    }
    export default DashBoard
