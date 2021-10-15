import React from 'react';
import styled from 'styled-components';
import Video from '../../Assets/Videos/herovideo.mp4'
import Button from '../Button';

const Hero = () => {
    return (
        <>
            <HeroContainer>

                <HeroVideo>
                    <Bgvideo src={Video} type="video/mp4" autoPlay loop muted playsInline />
                </HeroVideo>

                <HeroContent>
                    <Contenth1>Unreal Destinations</Contenth1>
                    <ContentP>Making The World Your Playground</ContentP>
                    <ContentButton>
                        <Button title='Travel Now' />
                    </ContentButton>
                </HeroContent>

            </HeroContainer>
        </>
    );
}

export default Hero;

const HeroContainer = styled.div`
height:100vh;
/* FOR TRANSPARENT BACKGROUND OF NAVBAR YOU CAN USE THIS TRICK , GIVE MARGIN TOP IN MINUS OF NAVBAR HEIGHT */
margin-top: -80px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
::before{
content: '';
position: absolute;
top: 0%;
bottom: 0%;
left: 0%;
right: 0%;
/* background-color: rgba(0,0,0,0.); */
filter: brightness(50%);
z-index:2;
}
`
// VIDEO PARENT CONTAINER
const HeroVideo = styled.div`
position: absolute;
top: 0%;
bottom: 0%;
left: 0%;
right: 0%;
width: 100%;
height:100%;
overflow: hidden;
`
// THE ACTUAL VIDEO
const Bgvideo = styled.video`
object-fit: cover;
width: 100vw;
height: 100vh;
left: 0;
right: 0;
top: 0;
bottom: 0;
`
// THE BEST PRACTICE IS TO SHOW BG VIDEO FOR ONLY LARGE
//  SCREENS AND SHOW A BG STATIC IMAGE FOR SMALL SCREENS BECAUSE THEY CAN COST LARGE DATA USAGE

const HeroContent = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
z-index: 3;
color: white;

`
const Contenth1 = styled.h1`
font-size:6vw;
font-size: clamp(1.5rem,6vw,3.5rem);
margin: 10px auto;
`
const ContentP = styled.p`
font-size:3vw;
font-size: clamp(1rem,2vw,1.8rem);
margin: 10px auto;
`
const ContentButton = styled.div`
margin: 10px auto;

`