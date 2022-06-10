import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import SignInSide from './components/SignInSide'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard/Dashboard'
import Edit from './components/Dashboard/Edit'
import Chat from './components/Chat'

function App() {
  const [logged, setLogged] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignInSide setLogged={setLogged} />} />
        <Route path='/dashboard' element={<Dashboard setLogged={setLogged} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
