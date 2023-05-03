import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Image from './../assets/Images/coach-background.jpg'

const Container = styled.section`
  min-height: 100vh;
  width: 100vw;
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

  button {
    color: white;
  }
  /* justify-content: center;
  align-items: center; */

  background-image: url(${Image}); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`

const Section = styled.section`
  width: 80vw;
  position: absolute;
  top: 35%;
  left: 50%;
  height: auto;

  transform: translate(-50%, -50%);
  border-radius: 10px;

  h2 {
    font-size: 3em;
  }

  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }

  button {
    color: white;
    background-color: #bf0413;
    font-weight: 600;
  }

  p {
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
  }
  /* justify-content: center;
  align-items: center; */

  background-image: url('photographer.jpg'); /* The image used */
  background-color: transparent; /* Used if the image is unavailable */
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`

const Title = styled.div`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: #fff;
  margin: 5px 0px 40px 20px;
  text-shadow: 1px 1px 1px #000;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`
const Subtitle = styled.div`
  margin-top: 10px;
  font-size: 30px;
  font-family: 'Bodacio2';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: #fff;

  @media (max-width: 64em) {
    font-size: 24px;
  }
  @media (max-width: 48em) {
    font-size: 19px;
  }
`

const Cards = styled.div`
  background-image: url('photographer.jpg'); /* The image used */
  background-color: transparent; /* Used if the image is unavailable */
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  &:hover {
    background-image: url('photographer.jpg'); /* The image used */
    background-color: transparent; /* Used if the image is unavailable */
    height: 500px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }
`

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const a11yProps = index => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const Coached = () => {
  return (
    <Container>
      <Section>
        <Title>Coach</Title>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Subtitle>Part One</Subtitle>
          </Grid>
          <Grid item xs={6}>
            <Subtitle>Part Two</Subtitle>
          </Grid>
        </Grid>
      </Section>
    </Container>
  )
}

export default Coached
