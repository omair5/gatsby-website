import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby';

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
        <>
            this is trip component
            {
                tripsData.map((value) => (
                    <div key={value.id}>
                        <h1>{value.alt}</h1>
                        <h1>{value.location}</h1>
                        <h1>{value.id}</h1>
                        <GatsbyImage image={getImage(value.img)} alt={value.alt} />
                    </div>
                ))
            }

        </>
    );
}

export default Trips;