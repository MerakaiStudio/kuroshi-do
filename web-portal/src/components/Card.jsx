import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: none;
  border-radius: 10px;
  background-color: #591c21;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  color: #f2f2f2;
  display: grid;
  justify-content: center;
  height: 350px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  width: 200px;

  &:hover {
    background-color: #8c1f28;
  }

  img {
    width: 150px;
    height: 150px;
    background-color: white;
    margin: auto;
    border-radius: 100%;
  }

  h4 {
    font-weight: bold;
    font-size: 16px:
  }
  
  p {
    font-size: 14px:
  }
`

export const Card = ({ image, title, content }) => {
  return (
    <Container>
      <img src={image} alt="icon" />
      <h4>{title}</h4>
      <p>{content}</p>
    </Container>
  )
}
