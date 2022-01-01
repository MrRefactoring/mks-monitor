import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '@pages';
import './app.less';

export function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>;
}
