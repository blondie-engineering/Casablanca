import styled, {keyframes} from "styled-components";

const rotating = keyframes`
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}`;

export const RotatingImage = styled.img`
   src: ${props => props.src};
   height: 60px;
   width: 60px;
   margin-left: 45px;
   animation: ${rotating} 2s infinite linear;
`;


export const Icons = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
