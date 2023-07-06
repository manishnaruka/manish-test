import React from "react";

interface CounterCardProps {
  increment: () => void;
  decrement: () => void;
  count: number;
  heading: string;
}

const CounterCard = (props: CounterCardProps) => {
  const { increment, decrement, count, heading } = props;
  return (
    <div className="card mt-5">
      <div className="card-header bg-info text-white text-uppercase">{heading}</div>
      <div className="card-body d-flex align-items-center justify-content-center flex-column">
        <h1>Counter: {count}</h1>
        <div>
          <button onClick={increment} className="btn btn-success">
            Increment
          </button>
          <button onClick={decrement} className="btn btn-danger ms-5">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
