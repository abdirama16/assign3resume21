import React from 'react';
import About from './components/About';
import Awards from './components/Awards';
import Education from './components/Education';
import Experience from './components/Experience';
import Interests from './components/Interests';
import SideNav from './components/SideNav';
import Skills from './components/Skills';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
      <div className='page-top'>
        <SideNav />
        <div className="container-fluid p-0">
        <Routes>
          <Route path='/' element={<About />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/education' element={<Education />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/interests' element={<Interests />}></Route>
          <Route path='/awards' element={<Awards />}></Route>
        </Routes>
      </div>
      </div>
      </Router>
    );
  }
  
}

export default App;
