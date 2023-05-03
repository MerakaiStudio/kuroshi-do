import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs'
import AppBar from '@mui/material/AppBar'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Image from './../assets/Images/16.jpg'
import Image2 from './../assets/Images/17.jpg'

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
  display: flex;
  margin: 20px 0px 0px 0px;
  padding: 10px;
`

const ImageContainer = styled.div`
  padding: 20px;
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

const Programs = () => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container>
      <Section>
        <Title>Programs</Title>
        <Box
          sx={{
            bgcolor: 'black',
            height: 350,
          }}
        >
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              scrollButtons="auto"
              aria-label="full width tabs example"
            >
              <Tab label="Childrens" {...a11yProps(0)} />
              <Tab label="Woman" {...a11yProps(2)} />
              <Tab label="Adults" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChange}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Subtitle>Contenido</Subtitle>
                  <p>
                    Fusce eget dui porttitor, blandit felis et, facilisis
                    tellus. Vestibulum mattis nunc sed nisi convallis fringilla.
                    In vehicula mauris sed congue gravida. Nullam at risus et
                    purus commodo interdum. Cras congue risus non lorem
                    sagittis, eu fermentum odio finibus. Etiam pretium neque
                    consequat metus interdum, sit amet tincidunt turpis euismod.
                  </p>
                </Grid>
                <Grid item xs={2}>
                  <ImageContainer>
                    <img src={Image2} alt="img" />
                  </ImageContainer>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Subtitle>Contenido</Subtitle>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Subtitle>Contenido</Subtitle>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Section>
    </Container>
  )
}

export default Programs
