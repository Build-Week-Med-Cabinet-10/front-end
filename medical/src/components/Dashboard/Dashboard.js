import React from 'react';
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import { Button } from 'reactstrap';
import UserImage from '../assets/user-placeholder.jpg'
import FavoritesList from '../Favorites/Favorites';



    function DashBoard(props) {


        const DashContain = styled.div
        `
        display:flex;
        flex-direction: row;
        width: 100%;     
        `

        const DashImg = styled.img
        `
        display: inline-block;
        width: 20rem;
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
            min-width: 20rem;

                span {
                    color: #ffffff;
                    font-weight: 700;
                    text-transform: uppercase;
                    padding: .5rem;
                    text-align: center;
                    background: #0b9444;
                }
            
            
            `

            const CardInfoHolder = styled.div
            `
                display: flex;
                flex-direction: column;
                min-height: 100%;
                width: 100%;
                margin: 4rem;
                margin-bottom: 0rem;
                align-items: center;
                justify-content: space-between;
                margin-top: 0rem;


            `

            const UserTitle = styled.div
            `
            display: flex;
            flex-drection: column;
            flex-grow: 1;
            align-items: center;
            justify-content: center;
            span {
                color: #333333;
                font-size: 1.5rem;
                font-weight: 700;
            }
            `

            const CardInfo = styled.div
            `
            display: flex;
            flex-direction: column;
            padding: 0;
            align-items: center;
            width: calc(100% - 28rem);
            height: 200px;
            width: 100%;
            background: lightgrey;
            border: 3px solid grey; 
            box-sizing: border-box;


                h3 {
                    font-weight: 700;
                    font-size: 1.2rem;
                    margin: 0;
                    margin-top: 1rem;
                }
            
            `

            const StrainDiv = styled.div
            `
            display: flex;
            flex-direction: row;
            align-items: space-evenly;
            justify-content: space-around;
            width: calc(100% - 4rem);
            margin: 4rem;

            `



        return (
            

            <DashContain>
                
                <DashCard>

                    <DashCardRow>

                        <UserCard>
                            <DashImg src={UserImage} />

                        <span>{props.userName}</span>

                        </UserCard>



                        <CardInfoHolder>


                            <UserTitle>
                                
                                <span>Welcome back {props.userName}!</span>
                            
                            </UserTitle>

                            <CardInfo>

                                <h3>Your favorite strains</h3>

                                <StrainDiv>

                                    <FavoritesList />
                                    



                                </StrainDiv>


                                

                            </CardInfo>


                        </CardInfoHolder>

                    </DashCardRow>


                </DashCard>

            </DashContain>

        )

    }
    export default DashBoard