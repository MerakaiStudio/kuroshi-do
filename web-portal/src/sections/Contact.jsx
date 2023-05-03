import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import location from '../assets/Images/location.svg'

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`

const Title = styled.div`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${props => props.theme.text};
  text-shadow: 1px 1px 1px ${props => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`

const Left = styled.div`
  width: 40%;
  heigh: auto;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  min-height: 100vh;
`

const DivForm = styled.div`
  margin-top: 30%;
  padding: 0px 60px 0px 60px;
  h3 {
    font-size: 25px;
    margin-bottom: 10px;
  }

  button {
    border: none;
    border-radius: 10px;
    background-color: #1b8ef2;
    font-size: 18px;
    height: 30px;
    margin-top: 10px;
    width: 100px;
  }

  button:hover {
    background-color: #38bdf2;
  }
`

const LabelForm = styled.div`
  display: grid;
  margin-top: 4px;

  label {
    font-size: 20px;
  }

  input {
    height: 30px;
  }
`

const Right = styled.div`
  width: 60%;
  position: absolute;
  left: 40%;
  min-height: 100vh;
  top: 40px;

  div {
    padding: 0px 20px 0px 20px;
  }
`

const Address = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 15px;

  img {
    width: 30px;
    height: 30px;
    margin: 0px 30px 0px 30px;
  }
`

const Contact = () => {
  return (
    <Section id="shop">
      <Title>Contact</Title>
      <Left>
        <DivForm>
          <h3>Lets then know your question</h3>
          <LabelForm>
            <label>Name:</label>
            <input type="text" name="name" />
          </LabelForm>
          <LabelForm>
            <label>Email:</label>
            <input type="email" name="email" />
          </LabelForm>
          <LabelForm>
            <label>Message:</label>
            <input type="textArea" name="message" style={{ height: 80 }} />
          </LabelForm>
          <button type="button">Send</button>
        </DivForm>
      </Left>
      <Right>
        <Address>
          <img src={location} alt="location"></img>
          <p>ABC Street in Brooklyn, New York</p>
        </Address>
        <div>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.3856786019917!2d-84.06947587663674!3d9.910269479065542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3fe762ae65b%3A0x8ae51c2b5666d99b!2sTEP%20DN!5e0!3m2!1sen!2scr!4v1664659309136!5m2!1sen!2scr"
            width="100%"
            height="600"
            style={{ border: 0, borderRadius: '20px' }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </Right>
    </Section>
  )
}

export default Contact
