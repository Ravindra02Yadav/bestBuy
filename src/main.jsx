import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import {CartContextProvider} from './components/Context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
     <ChakraProvider>
      <BrowserRouter> 
    <App />
    </BrowserRouter>
     </ChakraProvider>
     </CartContextProvider>
  </React.StrictMode>
)
