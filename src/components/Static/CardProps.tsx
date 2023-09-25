import React from "react";
import styled from "styled-components";
import {AiOutlinePlus} from "react-icons/ai"


const CardProps = () => {
  return (
    <div>
        <FirstCard>
            <FirstCardWrapp>
                <One>
                    <h2>Free</h2>
                </One>
                <Two>
                    <p style={{fontSize:"18px"}}>Start building stunning websites — <br /> for free.</p>
                </Two>
                <Three>
                    <h2 style={{fontSize:"33px"}}> 0 </h2> 
                    <h3 style={{color:"rgb(120,110,130)"}}>USD / month </h3>
                </Three>
                <Four>
                    <p>+14-day free trial. Most Pro features available.</p>
                </Four>
                <Five>
                    <AiOutlinePlus/>
                    <p> All features </p>
                </Five>
                <Six>
                    <Button>
                        Choose Plan
                    </Button>
                </Six>
            </FirstCardWrapp>
        </FirstCard>
    </div>
  )
}

export default CardProps


const Button = styled.button`
height: 80%;
width: 40%;
color: white;
background-color: rgb(45,101,231);
border: none;
border-radius: 8px;
margin-top: 5px;
`;
const Six = styled.div`
height: 15%;
width: 100%;
`;
const Five = styled.div`
height: 17%;
width: 100%; 
display: flex;
justify-content: flex-start;
align-items: center;
gap: 5px;
`;
const Four = styled.div`
height: 17%;
width: 100%; 
`;
const Three = styled.div`
height: 17%;
width: 100%;
color:  #3e78ff;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 5px;
`;
const Two = styled.div`
height: 17%;
width: 100%;
color: rgb(63, 63, 63);
`;
const One = styled.div`
height: 17%;
width: 100%;
color: #3e78ff;
font-size: 24px;
gap: 5px;
`;
const FirstCardWrapp = styled.div`
height: 80%;
width: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const FirstCard = styled.div`
height: 450px;
width: 400px;
background-color: white;
border: 1px solid rgb(45,101,231);
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
&:hover{
    color: white;
    background-color: rgb(45,101,231);
}
`;