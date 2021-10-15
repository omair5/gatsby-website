import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GoLocation } from "react-icons/go";
import Button from '../Button';

const Trips = () => {
  const data = useStaticQuery(graphql`
    query TripsComponentData {
        allTripsJson {
            nodes {
              alt
              id
              location
              img {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      
    `)
  const tripsData = data.allTripsJson.nodes


  return (
    <MainContainer>
      <MainHeading>OUR FAVOURITE DESTINATIONS</MainHeading>
      <WrapperContainer>
        {
          tripsData.map((value) => (
            <TripCard key={value.id} >
              <LocationAndButtonContainer>
                <Location>
                  <LocationIcon />
                  <h4>{value.location}</h4>
                </Location>
                <Button title='View Destination' />
              </LocationAndButtonContainer>
              <ImageComponent image={getImage(value.img)} alt={value.alt} objectFit={'fill'} />
            </TripCard>
          ))
        }
      </WrapperContainer>
    </MainContainer>
  );
}

export default Trips;

const MainContainer = styled.div`
min-height: 100vh;
display: flex;
flex-direction:column;
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
grid-gap: 20px;
padding: 1rem 2rem;
justify-items: center;
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 1200px) {
  grid-template-columns: 1fr 1fr;

}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 868px) {
  grid-template-columns: 1fr;
}
`

const TripCard = styled.div`
position: relative;
height: 500px;
max-width: 100%;
border-radius: 10px;
`
const ImageComponent = styled(GatsbyImage)`
height: 100%;
width:100%;
object-fit: fill;
border-radius: 10px;
opacity: 0.9;
transition: 0.5s ease;
z-index:4;
filter: brightness(70%);
&:hover{
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  filter: brightness(100%);
}
`
const LocationAndButtonContainer = styled.div`
position: absolute;
bottom: 30px;
left: 20px;
z-index: 5;
`
const Location = styled.div`
display: flex;
color: white;
letter-spacing: 1px;
margin-bottom: 15px;
`
const LocationIcon = styled(GoLocation)`
margin-right:7px
`