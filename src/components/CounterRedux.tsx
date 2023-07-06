import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux";
import CounterCard from "./CounterCard";

const CounterRedux = () => {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <CounterCard
      count={counter}
      increment={handleIncrement}
      decrement={handleDecrement}
      heading="Counter using redux"
    />
  );
};

export default CounterRedux;
