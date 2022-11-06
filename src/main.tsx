import GlobalStyle from "./styles/global"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home"
import { Clothes } from './pages/clothes/clothes'
import { Equipments } from './pages/equipments/equipments'
import { Off } from './pages/off/off'
import { Update } from './pages/update/update'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/clothes" element={<Clothes />}/>
        <Route path="/equipments" element={<Equipments />}/>
        <Route path="/off" element={<Off />}/>
        <Route path="/update/:id" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
