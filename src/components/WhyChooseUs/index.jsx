import React from 'react';
import styled from 'styled-components';
import { WhyChooseUsData } from '../../Data/whyChooseUsData';


const WhyChooseUs = () => {
    return (
        <MainContainer>
            <MainHeading>WHY CHOOSE US</MainHeading>
            <WrapperContainer>
                {WhyChooseUsData.map((value, index) => (
                    <GridItem key={index}>
                        {value.Icon}
                        <Title>{value.title}</Title>
                        <Para>{value.desc}</Para>
                    </GridItem>
                ))}
            </WrapperContainer>
        </MainContainer>
    );
}

export default WhyChooseUs;

const MainContainer = styled.div`
min-height:60vh ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const MainHeading = styled.h1`
margin: 15px 0px;
padding-top:15px;
font-size: clamp(1.5rem,5vw,2rem);
color:#F26A2E;
`
const WrapperContainer = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
padding: 1rem 2rem;
grid-gap: 12px;
@media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;

}
@media screen and (max-width: 850px) {
    grid-template-columns: 1fr;

}
`
const GridItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:1rem;
`
const Title = styled.h3`
padding: 5px 0px;
`

const Para = styled.p`
padding: 5px 0px;
color: #999999;
`