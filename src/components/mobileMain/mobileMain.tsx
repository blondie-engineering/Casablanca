import React from 'react';
import {RotatingImage, Icons} from "../../utils/style";
import {Container, Info, PulseImage, Link, BottomImage, BB} from "./style";
import Banana from '../../media/banana.png';
import Sculpt from '../../media/sculpt.png';
import Signature from '../../media/signature.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export class MobileMain extends React.Component {

    render() {
        return (
            <Container>
                <Info>I was too lazy to make this site for small screens.</Info>
                <RotatingImage style={{margin: 'auto'}} src={Banana}/>
                <Info>So for full experience, and not #404 kind of look.</Info>
                <PulseImage src={Sculpt}/>
                <Info>Visit this place on wider screen or check me out on:</Info>
                <Icons>
                    <div style={{cursor: 'pointer'}} onClick={() => window.open("https://linkedin.com")}><FaLinkedin size={48}/></div>
                    <div style={{cursor: 'pointer'}} onClick={() => window.open("https://github.com/WalczakPaulo")}><FaGithub size={48}/></div>
                </Icons>
                <BottomImage src={Signature} />
                <Info>Walczak Paweł, Warsaw Targówek 2020</Info>
                <BB>#blondesandbrownies</BB>
            </Container>
        )
    }
}
