import React from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import SignInSide from './components/SignInSide'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignInSide />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
