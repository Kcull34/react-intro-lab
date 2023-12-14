import React, { useState } from 'react';
import './Greeting.css';

const Greeting = ({ name }) => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    );
  };

export default Greeting;