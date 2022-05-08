import React from 'react'
import { BrowserRouter as Router,Route, Routes }
    from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import MusicList from './components/MusicList';
  
function App() {
  return (
    <div className='App'>
  
     <Router>
      <Routes>
        <Route path='/' element={<MusicList/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </Router>
  </div>
);
  
}
  
export default App;