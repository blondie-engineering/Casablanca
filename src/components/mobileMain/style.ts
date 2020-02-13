import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Oswald', sans-serif;
  background-color: rgb(255,255,255);
  font-weight: 700;
  justify-content: space-between; 
  text-align: center;
`;

export const Info = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
  font-size: 16px;
  text-align: center;
`;


const pulse = keyframes`
    from {
        width: 50px;
        height: 50px;
    }
    to {
        width: 100px;
        height: 100px;
    }
}`;

export const PulseImage = styled.img`
   margin: auto;
   border-radius: 30%;
   src: ${props => props.src};
   animation: ${pulse} 1.5s infinite alternate-reverse;
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const BottomImage = styled.img`
   src: ${props => props.src};
   max-width: 250px;
   max-height: 100px;
   margin: auto;
   margin-top: 20px;
   margin-bottom: -40px;
`;

export const BB = styled.div`
   margin-top: -50px;
   color: #F3E0BE;
`;

