import React, { useCallback, useState } from 'react';
import './App.css';
import { Button } from './button';

function App() {
  const [value, setCount] = useState(0);

  const decreaseValue = useCallback(() => setCount(value - 1), [value]);
  const increaseValue = useCallback(() => setCount(value + 1), [value]);

  return (
    <div className="App">
      <div className='App-counter'>
        <Button
          caption='-'
          onClick={decreaseValue}
        />
        {value}
        <Button
          caption='+'
          onClick={increaseValue}
        />
      </div>
    </div>
  );
}

export default App;
