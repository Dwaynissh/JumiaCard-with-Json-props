import styled from "styled-components";
import ButtonProps from "../components/Static/ButtonProps";
import vid from "../assets/dribblevideo.mp4"

const Hero = () => {
  return (
    <div>
      <Background>
        <Video src={vid} autoPlay loop muted/>
        <Container>
          <HeroHolder>
              <Herocards>
                <ButtonProps text ='Discover' bg = 'white' col = 'black' fs = '17px'/>
                <ButtonProps text ='Animation' bg = 'rgb(13,8,28)' col = 'white' fs = '17px'/>
                <ButtonProps text ='Branding' bg = 'rgb(13,8,28)' col = 'white' fs = '17px'/>
                <ButtonProps  text ='illustration' bg = 'rgb(13,8,28)' col = 'white' fs = '17px'/>
                <ButtonProps  text ='Mobile' bg = 'rgb(13,8,28)' col = 'white' fs = '17px'/>
                <ButtonProps  text ='Print' bg = 'rgb(13,8,28)' col = 'white' fs = '17px'/>
                <ButtonProps  text ='Product Design' bg = 'rgb(13,8,28)' col = 'white' fs = '17px'/>
                <ButtonProps  text ='Typography' bg = 'rgb(13,8,28)' col = 'white' fs = '17px'/>
                <ButtonProps  text ='Web Design' bg = 'rgb(13,8,28)' col = 'white' fs = '17px'/>
              </Herocards>  
              <HeroTexts>
                <TextBox>
                  <Explore>
                  Explore the world’s leading <br />
                  design portfolios
                  </Explore>
                  <Millions>
                    Millions of designers and agencies around the world showcase their portfolio work
                    <br /> on Dribbble - the home to the world’s best design and creative professionals
                  </Millions>
                  <Search>
                  </Search>
                  <Trending>
                    Trending searches
                  </Trending>
                </TextBox>
              </HeroTexts>
            </HeroHolder>
        </Container>
      </Background>
      
    </div>
  )
}

export default Hero

const Trending = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
color: white;
`;
const Search = styled.div`
height: 65px;
width: 80%;
background-color: white;
color: black;
border-radius: 40px;
margin-left: 80px;
`;
const Millions = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 17px;
color: white;
`;
const Explore = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 35px;
font-weight: bold;
color: white;
`;
const TextBox = styled.div`
height: 400px;
width: 750px;
`;
const HeroTexts = styled.div`
height: 450px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Herocards = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;

&:hover{
  color: white;
  cursor: pointer;
 }
`;
const HeroHolder = styled.div`
  height: 550px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
height: 80vh;
width: 100%;
position: absolute;
background-color: #0e0e0e46;
display: flex;
justify-content: center;
align-items: center;
`;

const Video = styled.video`
height: 80vh;
width: 100%;
position: absolute;
object-fit: cover;
`;
const Background = styled.div`
height: 80vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;
// HERO STYLING ABOVE AND ALL DONE
