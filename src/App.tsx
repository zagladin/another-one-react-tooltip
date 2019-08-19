import React from 'react';
import './App.scss';
import Tooltip from "./tooltip/Tooltip";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="bg">

        <Tooltip
          enable={true}
          position={'top'}
          color={'inform'}
        >
          Lorem ipsum
        </Tooltip>

      </header>
    </div>
  );
};

export default App;
