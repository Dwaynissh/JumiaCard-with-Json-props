import styled from "styled-components";
import React,{FC} from "react"
import {AiOutlinePlus} from "react-icons/ai"


type Jumiaprops = {
    one: string
    two: string
    three: any
    four: any
    backgroundImage?: string;
}

const JumiacardProps = ({one, two, three, four, backgroundImage}: Jumiaprops) => {
  return (
    <div>
         <JumCard>
            <ImageHolder>
                <Firstline>
                        <SmallBox>
                            <Htexxt> {one} </Htexxt>
                        </SmallBox>
                </Firstline>
            </ImageHolder>
            <Majortext>
                <MajortextWrapp>
                    <Mtext>
                        {two}
                    </Mtext>
                </MajortextWrapp>
            </Majortext>
            <Price>
                <PriceWrapp>
                    <PText>
                        <Naira>{three}</Naira>
                    </PText>
                </PriceWrapp>
            </Price>
            <Slashed>
                <SlashedWrapp>
                    <Stext>
                        <Pounds>{four}</Pounds>
                    </Stext>
                </SlashedWrapp>
            </Slashed>
        </JumCard>
    </div>
  )
}

export default JumiacardProps

const Pounds = styled.div`
font-size: 13px;
text-decoration: line-through;
`;
const Stext = styled.div`

`;
const SlashedWrapp = styled.div`
height: 100%;
width: 90%;
`;
const Slashed = styled.div`
height: 10%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const Naira = styled.div`
font-weight: bold;
`;
const PText = styled.div`

`;
const PriceWrapp = styled.div`
height: 100%;
width: 90%;
`;
const Price = styled.div`
height: 10%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const Mtext = styled.div`
font-size: 17px;
`;
const MajortextWrapp = styled.div`
height: 100%;
width: 90%;
`;
const Majortext = styled.div`
height: 10%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Htexxt = styled.div`
color: rgb(246,139,89);
font-size: 20px;
`;
const SmallBox = styled.div`
height: 60%;
width: 30%;
border-radius: 8px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const Firstline = styled.div`
height: 30%;
width: 90%;
margin-top: 10px;
display: flex;
justify-content: flex-end;
align-items: center;
`;
const ImageHolder = styled.div`
height: 70%;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
background-color: lawngreen;
border-radius: inherit;
`;
const JumCard = styled.div`
height: 350px;
width: 250px;
margin: 5px;
border-radius: 8px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
&:hover{
transition: transform 0.2s ease-in-out;
transform: translateY(-2px);
cursor: pointer;
}
`;