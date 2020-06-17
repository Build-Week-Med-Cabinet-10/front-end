import React from 'react';
import styled from 'styled-components';



const LoginDiv = styled.div
`
display: flex;
flex-direction: row;
min-width: 16rem;

max-width: 20%;

        img {
          width: 1rem;
          margin-right: 1rem;
        }

        span {
          text-transform: uppercase;
          font-weight: 900;
          font-size: .9rem;
        }

`


const LoginContain = styled.div
`
position: absolute;
height: 3rem;
display: flex;
justify-content: space-between;
right: 2rem;
top: -.5rem;
`

const LoginPrompt = styled.div
`
display: flex;
height: 2rem;
align-items: center;
min-width: 6rem;


          &&:hover {
            box-sizing: border-box;
            border-top: 4px solid transparent;
            border-bottom: 4px solid #FDCB02;
          }


`

const SignUpBanner = styled.div
`
background-color: #0DCA71;
min-width: 12rem;
height: 3rem;
display: flex;
justify-content: center;
right: 2rem;
top: -.5rem;
padding-top: 2rem;
color: white;
box-shadow: 6px 6px 0px #555555;

        &&:hover {
          background-color: #0bb565;
          right: calc(2rem - 3px);
          margin-top: 5px;
          box-shadow: 3px 3px 0px #555555;
        
        }


        span {
          font-size: 1.2rem;
        }
`

function LoginPromo() {

  return (

    


    
   <LoginDiv>

     <LoginPrompt>
        <span>login</span>
     </LoginPrompt>


        <LoginContain>

            <SignUpBanner>
              <span>Sign UP</span>
            </SignUpBanner>

        </LoginContain>


   </LoginDiv>










  );
}

export default LoginPromo;
