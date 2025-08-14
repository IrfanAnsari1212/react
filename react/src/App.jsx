import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log('Value Added to counter:', counter);

    if (counter < 20) {
      setCounter(prev => {
        const newValue = prev + 1;
       
        return newValue;
      });
    } else {
      console.log('Counter cannot be greater than 20');
    }
  };

  const removeValue = () => {
    console.log('Value Removed from counter:', counter);

    if (counter > 0) {
      setCounter(prev => {
        const newValue = prev - 1;

        return newValue;
      });
    } else {
      console.log('Counter cannot be less than zero');
    }
  };

  return (
    <>
      <h1>Chai with React</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
