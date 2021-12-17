import React from 'react'
import './App.css';
import Feed from './components/Feed';
import Login from './components/Login';
import Sidbar from './components/Sidbar';
import Widgets from './components/Widgets';

function App() {

  return ( // Bem Name  Convetion
         <div className="app">   
    {!sessionStorage.getItem("fm") ? <div className="login__page"><Login /></div> :
     <>
      <Sidbar />
        <Feed />
      <Widgets />
     </>
     }
    
    </div>
  );
}

export default App;
