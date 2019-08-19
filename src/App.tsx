import React from 'react';
import './App.css';
import Tooltip from "./tooltip/Tooltip";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">

        <Tooltip enable={true} color={'white'}>
          Children
        </Tooltip>

      </header>
    </div>
  );
};

export default App;
