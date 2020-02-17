import styled from "styled-components";
import {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Oswald', sans-serif;
  height: 95vh;
  font-family: 'Oswald', sans-serif;
  background-color: rgb(251,251,251);
  font-weight: 700;
`;

export const SideMenu = styled.div`
  flex-direction: column;
  max-width: 150px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-right: 1px lightgray solid;
  border-bottom: 1px lightgray solid;
`;

export const MainMenu = styled.div`
  flex-grow: 10;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Logo = styled.div` 
`;

export const SubLogo = styled.div`
  font-size: 11px;
  color: black;
  font-weight: 400;
  color: #F3E0BE;
  margin-left: 12px;
`;

export const Date = styled.span`
  font-size: 10px;
  font-weight: 400;
`;

export const Separator = styled.div`
  height: 10px;
  border-bottom: 1px lightgray solid;
  border-top: 1px lightgray solid;
`;

export const Content = styled.div`
  opacity: 0.8;
  transition: opacity 2.25s ease-in;
  -moz-transition: opacity 2.25s ease-in;
  -webkit-transition: opacity 2.25s ease-in;
   margin-right: 400px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; 
`;

export const AnimatedText = styled.div`
  width: 400px;
  padding-right: 10px;
  display: inline-block;
  opacity: 0.9;
  animation: ${fadeIn} 2s linear;
`;

export const SubMenuContext = styled.div`
  font-size: 14px;
  color: darkgray;
  font-weight: 400;
`;

export const Image = styled.img`
  border-radius: 20%;
  height: 250px;
  width: 250px;
  src: ${props => props.src};
  opacity: 0.8;
  animation: ${fadeIn} 2s linear;

`;

export const Item = styled.div`
  color: rgb(55,55,55);
  width: 200px;
  font-size: 48px;
  margin-bottom: 60px;
  transform: rotate(-90deg);
  border-bottom: 1px gray solid;
  
  &:hover {
    color: black;
    cursor: pointer;
    font-size: 52px;
    transition: font-size 0.5s ease-in-out;
  }
`;

export const GoldSpan = styled.span`
  color: #F3E0BE;
`;

