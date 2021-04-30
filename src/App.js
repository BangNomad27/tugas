import React from 'react';
import {Navbar, Main, Sidebar} from './component';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="side-left">
          <Main />
        </div>
        <div className="side-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;