import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Main from './components/BMT/Main';
const App = () => {
  const [remittance, setRemittance] = useState(null);

  const switchRemittance = () => {
    switch (remittance) {
      case 1:
        return <Main />;
      case 2:
        return <h4>Under Maintanance!!!</h4>;
      default:
        return (
          <>
            <Button onClick={() => setRemittance(1)} variant='outlined'>
              BMT
            </Button>

            <Button
              style={{ marginLeft: '20px' }}
              onClick={() => setRemittance(2)}
              variant='outlined'
            >
              City Express
            </Button>
          </>
        );
    }
  };

  return <>{switchRemittance()}</>;
};

export default App;
