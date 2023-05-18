import React from 'react';
import Typography from '@mui/material/Typography';
import Calculator from './components/Calculator';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './pages';
import History from './components/History';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Calculator/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App;
