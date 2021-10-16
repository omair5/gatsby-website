import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsLightbulb } from "react-icons/bs";


const PeopleSayAboutUs = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {name: {in: ["people1","people2"]}}) {
          nodes {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }      
    `)
    const testimonials = data.allFile.nodes
    return (
        <MainContainer>
            <MainHeading>WHAT PEOPLE SAY ABOUT US</MainHeading>
            <MainGrid>

                <GridOne>
                    <GridContent>
                        <Checkmark />
                        <h2>Sarah Kin</h2>
                        <Para>
                            "it was so easy to set up my trip! they answered all my
                            questions right away and gave me the best price out of all
                            the companies i researched."
                        </Para>
                    </GridContent>
                    <GridContent>
                        <Lightbulb />
                        <h2>Sean Micheals</h2>
                        <Para>
                            "the greatest experience of my life! it was soo much fun exploring
                            the mountains and they made it super easy to book my trip and
                            accommodation."
                        </Para>
                    </GridContent>
                </GridOne>

                <GridTwo>
                    {
                        testimonials.map((value, index) => (
                            <TestiminialsImage image={getImage(value)} objectFit={'fill'} key={index} alt='testimonials' />
                        ))
                    }
                </GridTwo>

            </MainGrid>
        </MainContainer>
    );
}

export default PeopleSayAboutUs;


const MainContainer = styled.div`
min-height:80vh;
width: 100%;
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
const MainGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 1rem 2rem;
@media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
}
`
const GridOne = styled.div`
padding: 10px;
@media only screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
}
@media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
}
`
const GridTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 12px;
padding: 10px;
@media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`
const TestiminialsImage = styled(GatsbyImage)`
height:400px;
width: 100%;
border-radius: 15px;
`
const GridContent = styled.div`
padding: 1rem 0;
text-transform: capitalize;
text-align:left
`
const Para = styled.p`
padding-top: 7px;
color: #999999;
`
const Checkmark = styled(IoMdCheckmarkCircleOutline)`
color:  #ff9cea;
font-size: 40px;

`
const Lightbulb = styled(BsLightbulb)`
color:  #03fcb6;
font-size: 40px;
`