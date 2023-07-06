import { useCounterContext } from "../context/CounterContext";
import CounterCard from "./CounterCard";

const CounterContext = () => {
  const { count, increment, decrement } = useCounterContext();

  return (
    <CounterCard
      count={count}
      increment={increment}
      decrement={decrement}
      heading="Counter using context"
    />
  );
};

export default CounterContext;
