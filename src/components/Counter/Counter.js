import { useState } from "react";
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  return (
    <div>
      <h1 data-testid='header'>My Counter</h1>
      <h2
        data-testid='counter'
        className={count >= 100 ? 'text-green' : (count <= -100 ? 'text-red' : '')}
      >{count}</h2>
      <button
        data-testid='subtractBtn'
        onClick={() => setCount(count - input)}
      >-</button>
      <input
        data-testid='input'
        type='number'
        value={input}
        onChange={(e) => setInput(+e.target.value)}
        className="text-center"
      />
      <button
        data-testid='addBtn'
        onClick={() => setCount(count + input)}
      >+</button>
    </div>
  )
}

export default Counter;