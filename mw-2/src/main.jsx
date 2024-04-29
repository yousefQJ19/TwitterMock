//importing react librareb                                       
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './Pages/HomePage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <HomePage/>
    </ChakraProvider>
  </React.StrictMode>,
)
