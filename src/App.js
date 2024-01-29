
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<Homepage/>} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
