import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/Svgs/good.svg'
import img2 from '../assets/Svgs/health.svg'
import img3 from '../assets/Svgs/karate_icon.svg'
import { Card } from '../components/Card'

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  h2 {
    font-size: 3em;
  }

  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */

  p {
    margin-top: 40px;
  }
`

const Title = styled.div`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: #000;
  text-shadow: 1px 1px 1px #000;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`
const Subtitle = styled.div`
  margin-top: 50px;
  font-size: 30px;
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: #000;
  text-align: center;

  @media (max-width: 64em) {
    font-size: 24px;
  }
  @media (max-width: 48em) {
    font-size: 19px;
  }
`

const Cards = styled.div`
  display: flex;
  margin: 20px 0px 0px 0px;
  padding: 10px;
`

const About = () => {
  return (
    <Section>
      <Title>About us</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
        sapien imperdiet, convallis odio in, sagittis lacus. Aliquam aliquam
        dignissim lorem ac convallis. Integer lacus nulla, commodo quis accumsan
        at, fringilla ac quam. Quisque eu vulputate nisi, ut finibus magna. Duis
        commodo ut enim vitae aliquam. Aliquam erat volutpat. Phasellus interdum
        sem elementum ante vehicula, sit amet sollicitudin sem hendrerit. Ut
        quis nunc tortor. Sed nec pharetra lectus. Maecenas eu purus non augue
        condimentum tincidunt. Suspendisse efficitur, elit feugiat dictum
        sagittis, odio felis congue turpis, ac volutpat dolor magna eu dolor.
        Nulla nisl ipsum, sagittis in justo in, faucibus egestas tortor. Nulla
        ut interdum sapien. Nulla facilisi. Integer dignissim enim quis varius
        dictum.
      </p>

      <Subtitle>Benefits</Subtitle>
      <Cards>
        <Card
          image={img2}
          title="Title"
          content="The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested"
        />
        <Card
          image={img3}
          title="Title"
          content="The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested"
        />
        <Card />
        <Card />
        <Card />
      </Cards>
    </Section>
  )
}

export default About
