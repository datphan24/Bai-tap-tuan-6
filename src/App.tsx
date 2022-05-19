import React from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import SignInSide from './components/SignInSide'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard/Dashboard'
import Edit from './components/Dashboard/Edit'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignInSide />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
