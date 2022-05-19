import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import SignInSide from './components/SignInSide'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard/Dashboard'
import Edit from './components/Dashboard/Edit'

function App() {
  const [logged, setLogged] = useState(false)
  console.log(logged);
  return (
    <div className="App">
      <Routes>
        {logged ? <Route path='/dashboard' element={<Dashboard setLogged={setLogged} />} /> : <Route path='/' element={<SignInSide setLogged={setLogged} />} /> }
        <Route path='/signup' element={<SignUp />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
