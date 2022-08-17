import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainRoute />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
