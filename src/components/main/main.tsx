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
    SubLogo,
    GoldSpan
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
            title: 'About Me',
            subtitle: 'Who am I?',
        },
        {
            hoveredOption: HoveredOption.Tech,
            title: 'Tech',
            subtitle: 'What do I use? What do I want to learn?',
        },
        {
            hoveredOption: HoveredOption.Careers,
            title: 'Career/Edu',
            subtitle: 'My career and education story',
        },
        {
            hoveredOption: HoveredOption.HQ,
            title: 'HQ',
            subtitle: 'Płosa 3 HQ...',
        },
        {
            hoveredOption: HoveredOption.About,
            title: 'Contact',
            subtitle: 'Ways to contact me',
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
                            Welcome to my place.
                        </AnimatedText>
                        <Image src={Sculpt} />
                    </>
                )
            case HoveredOption.Mission:
                return (
                    <>
                        <AnimatedText>
                            Hi. My name is Paul/Pablo/Paweł. I was born in 1995, and I have been doing Software Engineering
                            for 6 years now. I love tech, fútbol, guitar, books and non-ordinary adventures.
                            I am a graduate of Warsaw University of Technology at
                            the Faculty of Electronics and Information Technology(Robotics, Bachelor of Engineering). Currently pursuing my Master's Degree
                            in the field of Computer Science, at the same faculty. I received Dean's Scholarship for both my undergraduate / graduate studies for
                            remarkable grades. I did some Maths/Physics before studies, and I was a Laurate of Maths/Physics contests organized by Polish Board of Science.

                        </AnimatedText>
                        <Image src={Smoke} />
                    </>
                )
            case HoveredOption.Tech:
                return (
                    <>
                        <AnimatedText>
                            I try to be as versatile Software Engineer as possible (although with special flavour for
                            Frontend & Cloud). For Frontend I use <GoldSpan>React/Angular, Typescript. </GoldSpan> For Backend I am using <GoldSpan>Node,
                            and JVM stuff when in mood (Java, Scala).</GoldSpan> My cloud choice is <GoldSpan>AWS</GoldSpan>, although I am going to learn
                            some of the GCP. I did some <GoldSpan>Machine Learning and AI (using Python/Tensorflow, Matlab lol). </GoldSpan>
                            I did use some <GoldSpan>Postgres, SQL and also No_sql solutions (DynamoDB). </GoldSpan>
                            For DevOps I am using <GoldSpan>Docker and Terraform. </GoldSpan>
                            Although raised on <GoldSpan>OOP</GoldSpan>, I intend to be using <GoldSpan>FP</GoldSpan> where applicable.
                        </AnimatedText>
                        <Image src={Tech} />
                    </>
                )
            case HoveredOption.Careers:
                return (
                    <>
                        <AnimatedText>
                            <ul>
                                <li>iQor - 2017.07 - 2017.09 - Software Engineer Intern (Python/AWS)</li>
                                <li>Cloudity - 2018.06 - 2019.07 - Software Engineer (Salesforce)</li>
                                <li>InFront - 2019.07 - currently - Software Engineer (Node/React/AWS)</li>
                                <li>PwC - 2019.10 - currently - Frontend Engineer (Angular/RX)</li>
                                <li><GoldSpan>CAE - C1/C2 - Cambridge Certificate in Advanced English</GoldSpan></li>
                                <li><GoldSpan>Goethe - B1 - Goethe Zertifikat Deutsch</GoldSpan></li>
                                <li><GoldSpan>AWS Certified Developer</GoldSpan></li>
                                <li><GoldSpan>Salesforce Platform Developer 1</GoldSpan></li>
                                <li><GoldSpan>Functional Programming Specialization in Scala - École Polytechnique Fédérale de Lausanne</GoldSpan></li>
                                <li><GoldSpan>Machine Learning specialization - Stanford University</GoldSpan></li>
                                <li><GoldSpan>2x times Golden Award Codility / 1x time Silver Award Codility</GoldSpan></li>
                                <li><GoldSpan>Rector's Scholarship for Academic Achievements</GoldSpan></li>
                                <li>Warsaw University of Technology - Masters - Computer Science (in progress)</li>
                                <li>Warsaw University of Technology - Bachelor of Engineering (5.0) - Robotics</li>
                            </ul>
                        </AnimatedText>
                        <Image src={Career} />
                    </>
                )
            case HoveredOption.HQ:
                return (
                    <>
                        <AnimatedText>
                            I am based in Warsaw, Targówek. I want to work in Berlin, London, Zurich, California, New York, Africa and Ukraine in the future.
                            Currently not interested in Remote Job, I want to learn on-site from other developers, but going to work remotely in the future.
                        </AnimatedText>
                        <Image src={Banana} />
                    </>
                )
            case HoveredOption.About:
                return (
                    <>
                        <AnimatedText>
                            Visit LinkedIn, Github. My mail: walczakp007@gmail.com
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
