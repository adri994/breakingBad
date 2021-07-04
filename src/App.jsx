import React from 'react'
import styled from '@emotion/styled'

import { useFetch } from './hook/useFetch'

import Quotes from './components/Quotes'

const Container = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
font-family: Arial, Helvetica, sans-serif;
background-size: 300px;
color: #fff;
margin-top: 3rem;
padding: 1rem 2rem;
font-size: 2rem;
border: 2px solid black;
`

function App() {
  
  const [quotes, newQuotes] = useFetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
  return (
    <Container>
      <Quotes 
        {...quotes}      
      />
      <Button
        onClick={newQuotes}
      >
        Obtener Frases
      </Button>
    </Container>
  )
}

export default App
