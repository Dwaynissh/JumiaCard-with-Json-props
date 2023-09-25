import styled from "styled-components"
import assets from "../../assets/dribbble-removebg-preview.png"
import ButtonProps from "./ButtonProps"

const Header = () => {
  return (
    <div>
        {/* <Main> */}
        <Leader>
          <HeaderWrapper>
            <Navigation>
              <Nav1>
              Find talent
              </Nav1>
              <Nav2>
              For designers
              </Nav2>
              <Nav3>
              Inspiration
              </Nav3>
              <Nav4>
              Learn design
              </Nav4>
              <Nav5>
              Go Pro
              </Nav5>
            </Navigation>
            <Logo>
              <img src= {assets} alt="" height="110" width="140"/>
            </Logo>
            <Buttons>
              <Login>
                Log in &nbsp; &nbsp;  •
              </Login>
              {/* <Btn>
                Sign Up
              </Btn> */}
              <ButtonProps text="Sign Up"/>
            </Buttons>
          </HeaderWrapper>
        </Leader>
        {/* </Main> */}
    </div>
  )
}

export default Header

// HEADER STYLING BELOW AND ALL DONE

const Btn = styled.div`
height: 50px;
width:  110px;
background-color: white;
color: black;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
`;

const Login = styled.div`
`;

const Buttons= styled.div`
height: 80px;
width: 35%;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 20px;
`;

const Logo= styled.div`
height: 80px;
width: 20%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
`;

const Nav5 = styled.div`
&:hover{
  color: rgb(89, 88, 108);
 }
`;

const Nav4 = styled.div`
&:hover{
  color: rgb(89, 88, 108);
 }
`;

const Nav3 = styled.div`
&:hover{
  color: rgb(89, 88, 108);
 }
`;

const Nav2 = styled.div`
&:hover{
  color: rgb(89, 88, 108);
 }
`;

const Nav1 = styled.div`
&:hover{
  color: rgb(89, 88, 108);
 }
`;
const Navigation= styled.div`
height: 80px;
width: 35%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
color: rgb(13,12,34);
font-weight: 500;
cursor: pointer;
`;

const HeaderWrapper= styled.div`
height: 80px;
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Leader= styled.div`
height: 90px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

// const Main= styled.div`
// height: 100vh;
// width: 100%;
// background-color: rgb(248,247,244);
// `;
