import React from 'react'
import {
    AnimatedText,
    ButtonsContainer,
    Container,
    Content,
    Date,
    Image,
    Item,
    Logo,
    MainMenu,
    Separator,
    SideMenu,
    SubMenuContext,
    SubLogo
} from './style'
import { RotatingImage, Icons } from "../../utils/style";
import Sculpt from '../../media/sculpt.png'
import Smoke from '../../media/smoke.jpg'
import Tech from '../../media/tech.png'
import Career from '../../media/career.png'
import Banana from '../../media/banana.png'
import Signature from '../../media/signature.png'
import Siggy from '../../media/siggy.png'
import BB from '../../media/circle-cropped.png'
import { HoveredOption } from '../utils/hoveredOptions'
import {FaGithub, FaLinkedin} from "react-icons/all";

export interface MainState {
    hoveredOption: HoveredOption
}

export interface MenuOption {
    hoveredOption: HoveredOption
    title: string
    subtitle: string
}

export class Main extends React.Component {
    private menuOptions: MenuOption[] = [
        {
            hoveredOption: HoveredOption.Main,
            title: 'Welcome',
            subtitle: 'Main site - no 404s',
        },
        {
            hoveredOption: HoveredOption.Mission,
            title: 'Me',
            subtitle: 'What is the core?',
        },
        {
            hoveredOption: HoveredOption.Tech,
            title: 'Tech',
            subtitle: 'I use Angular/React for Frontend. ',
        },
        {
            hoveredOption: HoveredOption.Careers,
            title: 'Careers',
            subtitle: 'Flash boys seekout',
        },
        {
            hoveredOption: HoveredOption.HQ,
            title: 'HQ',
            subtitle: 'Płosa 3 HQ...',
        },
        {
            hoveredOption: HoveredOption.About,
            title: 'About',
            subtitle: 'About us',
        },
    ]

    public state: MainState = {
        hoveredOption: HoveredOption.None,
    }

    private renderInfo = () => {
        const item = this._renderInfo();
        const marginRightValue = 700*Math.random() - 350;
        const marginTopValue = 100*Math.random();
        return (
          <div style={{ marginRight: marginRightValue, marginTop: marginTopValue}}>
              {item}
          </div>
        );
    }

    private _renderInfo = () => {
        switch (this.state.hoveredOption) {
            case HoveredOption.Main:
                return (
                    <>
                        <AnimatedText>
                            Master's Thesis project.
                        </AnimatedText>
                        <Image src={Sculpt} />
                    </>
                )
            case HoveredOption.Mission:
                return (
                    <>
                        <AnimatedText>
                            Get shit done and get the paper.
                        </AnimatedText>
                        <Image src={Smoke} />
                    </>
                )
            case HoveredOption.Tech:
                return (
                    <>
                        <AnimatedText>
                            React, Hooks, Styled Comps, GraphQL, Node, Java, Scala, AWS, Docker, Rel and Non-Rel DBs. That's the guns.
                        </AnimatedText>
                        <Image src={Tech} />
                    </>
                )
            case HoveredOption.Careers:
                return (
                    <>
                        <AnimatedText>
                            Always a lookout for flash/witty people.
                        </AnimatedText>
                        <Image src={Career} />
                    </>
                )
            case HoveredOption.HQ:
                return (
                    <>
                        <AnimatedText>
                            Brand new HQ at Warsaw Targówek.
                        </AnimatedText>
                        <Image src={Banana} />
                    </>
                )
            case HoveredOption.About:
                return (
                    <>
                        <AnimatedText>
                            Some shit here.
                        </AnimatedText>
                        <Image src={Signature} />
                    </>
                )
            default:
                return (
                    <>
                        <img src={Siggy} width={600} height={200}/>
                    </>
                )
        }
    }

    private renderItems = () => {
        return this.menuOptions.map(option => {
            return (
                <Item
                    key={option.hoveredOption}
                    onMouseOver={() => {
                        this.setState({ hoveredOption: option.hoveredOption })
                    }}
                    onMouseLeave={() =>
                        this.setState({ hoveredOption: HoveredOption.None })
                    }
                >
                    {option.title}
                    <SubMenuContext>{option.subtitle}</SubMenuContext>
                </Item>
            )
        })
    }

    render() {
        return (
            <Container>
                <SideMenu>
                    <Logo>
                        <RotatingImage src={BB}/>
                        <SubLogo> blondes / brownies Tech Studio
                        </SubLogo>
                    </Logo>
                    <Separator />
                    <div>
                        Walczak Pawel, class of 2014. Tech project for Master's
                        Thesis.
                        <br />
                        <Date>&reg; 2020, B/B HQ, Płosa 3</Date>
                        <Icons>
                            <FaLinkedin size={48}/>
                            <FaGithub size={48}/>
                        </Icons>
                    </div>
                </SideMenu>
                <MainMenu>
                    <Content>{this.renderInfo()}</Content>
                    <ButtonsContainer>{this.renderItems()}</ButtonsContainer>
                </MainMenu>
            </Container>
        )
    }
}
