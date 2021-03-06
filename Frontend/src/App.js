import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dreams from './pages/Dreams';
import Goals from './pages/Goals';
import Tasks from './pages/Tasks';
import Notes from './pages/Notes';
import Articles from './pages/Articles';


function App() {
  return (
    <div className="">
      <Router>
            <Routes>
                <Route path='/' element={<Goals />} />
                <Route path='/dreams' element={<Dreams />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/notes' element={<Notes />} />
                <Route path='/articles' element={<Articles />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;