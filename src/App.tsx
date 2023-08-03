import React from 'react'
import {Routes, Route} from "react-router-dom"

import Layout from './Pages/Layout'
import Outlets from './Pages/Outlets'

import './App.css'

const App:React.FC = () => {

  return (
    <main className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Outlets />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
