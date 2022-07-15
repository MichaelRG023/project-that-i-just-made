import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route,Switch } from 'react-router-dom';
import New from './New';
import { useEffect } from 'react';


function App() {

 useEffect(()=>{
  fetch("http://localhost:3000/apexLegends")
  .then(res=>res.json())
  .then(console.log)
 })
  return (<>
  <h1> -NavBar-</h1>
  
  <BrowserRouter>
  <Route exact  path="/new" component={New} />
  </BrowserRouter>
  
  
  </>);
}
  

export default App;
