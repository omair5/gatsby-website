import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const SignUp = () => {
  const data = useStaticQuery(graphql`
    query ForSignUpSection {
        allFile(filter: {name: {in: "signupbg"}}) {
          nodes {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    `)
  const sigupbg = data.allFile.nodes[0]
  return (
    <MainContainer>
      <SigUpImage image={getImage(sigupbg)} alt='sign' objectFit={'fill'} />
      <WrapperContainer>
        <h1 data-sal="slide-down" data-sal-delay="200" data-sal-duration='2s' data-sal-easing="ease">Get Access To Exclusive Offers</h1>
        <p data-sal="slide-down" data-sal-delay="200" data-sal-duration='2s' data-sal-easing="ease">Sign Up For Your Newsletter Below To Get $100 Off Your First Trip!</p>
        <input type="email" placeholder='Enter Your Email' data-sal="slide-up" data-sal-delay="200" data-sal-duration='2s' data-sal-easing="ease" />
        <div data-sal="slide-up" data-sal-delay="200" data-sal-duration='2s' data-sal-easing="ease" >
          <Button title='Sign Up Now' linkto='/trips' />
        </div>
        {/* <button type='submit' as='button'>signup</button> */}
      </WrapperContainer>
    </MainContainer>
  );
}

export default SignUp;

const MainContainer = styled.div`
min-height:45vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SigUpImage = styled(GatsbyImage)`
min-height:45vh;
width: 100%;
filter: brightness(40%);
z-index:2
`
const WrapperContainer = styled.div`
z-index:3;
position: absolute;
color: white;
text-align:center;
padding:10px;
h1{
    font-size: clamp(1.2rem ,5vw,2.3rem);
    padding: 15px 0px;
    text-align:center
}
p{
    padding: 15px 0px;
    text-align:center
}
input{
    display:block;
    width: 300px;
    margin: 10px auto;
    padding:20px 10px;
    border-radius: 7px;
    outline: none;
    border: none;
}
`