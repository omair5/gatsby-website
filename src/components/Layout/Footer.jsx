import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <MainContainer>
            <GridContainer>
                <GridChild>
                    <h1>EXPLORIX</h1>
                    <h3>We Strive To Create The Best Experience For Our Customers</h3>
                </GridChild>

                <GridChild>
                    <h4>Contact Us</h4>
                    <p>Contact</p>
                    <p>Support</p>
                    <p>Destinations</p>
                    <p>Sponsorships</p>
                </GridChild>

                <GridChild>
                    <h4>Videos</h4>
                    <p>Submit Video</p>
                    <p>Ambassadors</p>
                    <p>Agency</p>
                    <p>Influencer</p>
                </GridChild>

                <GridChild>
                    <h4>Social Media</h4>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>Twitter</p>
                </GridChild>
            </GridContainer>
        </MainContainer>
    );
}

export default Footer;

const MainContainer = styled.div`
min-height: 40vh;
background: #242222;
display: flex;
justify-content: center;
align-items: center;
color: white;
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 15px;
padding: 1rem 2rem;
@media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
}
`
const GridChild = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1{
    color:#F26A2E;
}
h3{
    font-size: clamp(0.8rem,4vw,1.1rem);
    text-align:center
}
h4{
    text-align:left;
    color:#F26A2E;
}
p{
padding:7px 0px;
cursor: pointer;
&:hover{
    font-weight: bolder;
}
}
`