import React from 'react'
import Home from './Home'
import Add from './Add'
import Edit from './Edit';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Add />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App