import React from 'react'
import styled from 'styled-components'
import CardProps from '../components/Static/CardProps'
import data from '../pages/data.json'
import JumiacardProps from '../components/Static/JumiacardProps'

const Pricing = () => {
  return (
    <div>
        <Section>
            <SectionWrapp>
                <PPlan>
                    <h1>Choose your pricing plan</h1>
                </PPlan>
                <Cards>
                    <CardProps/>
                    <CardProps/>
                    <CardProps/>
                    <CardProps/>
                    <CardProps/>
                    <CardProps/>
                </Cards>
            </SectionWrapp>
        </Section>
        <JumiaSection>
            <JumiaSectionWrapp>
                <TopSelling>
                    <Text>
                    Top selling items
                    </Text>
                </TopSelling>
                <Cardss>
                <>
                    {
                    data?.map((Jumiaprops)=> (
                        <JumiacardProps 
                        one={Jumiaprops.one} 
                        two={Jumiaprops.two}
                        three={Jumiaprops.three}
                        four={Jumiaprops.four}
                        />
                    ))
                }
                </>
                   
                </Cardss>
            </JumiaSectionWrapp>
        </JumiaSection>
        
    </div>
  )
}

export default Pricing

const Cardss = styled.div`
height: 80%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;
const Text = styled.div`
color: black;
font-size: 29px;
margin-left: 20px;
`;
const TopSelling = styled.div`
height: 20%;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const JumiaSectionWrapp = styled.div`
height: 80%;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: white;
border-radius: 8px;
`;
const JumiaSection = styled.div`
height: 70vh;
width: 100%;
background-color: rgb(176,119,216);
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
`;

const Cards = styled.div`
height: 75%;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
`;
const PPlan = styled.div`
height: 15%;
width: 70%;
text-align: center;
h1{
    font-size: 55px;
    font-weight: bold;
    color: blue;
}
`;
const SectionWrapp = styled.div`
height: 100%;
width: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Section = styled.div`
min-height: 100vh;
width: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;