import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Pages/Home/Home';
import Destination from '../Pages/Destination/Destination';
import Crew from '../Pages/Crew/Crew';
import './App.scss';
import data0 from '../../data/data0.json';
import Technology from '../Pages/Technology/Technology';


function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>   
     <Routes>
      <Route path='/'  element={ <Home/> }/>
      <Route path='/destination'  element={ <Destination data0={data0}/> }/>
      <Route path='/crew'  element={ <Crew/> }/>
      <Route path='/technology'  element={ <Technology data0={data0}/> }/>
    </Routes>  
    </Router>
    </div>
  );
}

export default App;
