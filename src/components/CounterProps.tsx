import { useState } from 'react';

const CounterProps = ({ render }:any) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return render(count, increment, decrement);
};

export default CounterProps;


