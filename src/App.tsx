import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ComicDetails, Home } from './pages';
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainRoute />}>
        <Route path='/:page' element={<Home />} />
        <Route path='/comic/:id' element={<ComicDetails />} />
        <Route path='/search/:search/:page' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
