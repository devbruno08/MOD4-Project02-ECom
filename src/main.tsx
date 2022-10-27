import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/header/header'
import { Home } from "./pages/home/home"
import GlobalStyle from "./styles/global"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Home />
  </React.StrictMode>
)
