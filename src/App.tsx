import CounterRedux from "./components/CounterRedux";
import CounterContext from "./components/CounterContext";
import CounterProps from "./components/CounterProps";
import DisplayApiData from "./components/DisplayApiData";
import CounterCard from "./components/CounterCard";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <CounterRedux />
        </div>
        <div className="col-12 col-md-8 col-lg-6">
          <CounterContext />
        </div>
        <div className="col-12 col-md-8 col-lg-6">
          <CounterProps
            render={(
              count: number,
              increment: () => void,
              decrement: () => void
            ) => (
              <CounterCard
                count={count}
                increment={increment}
                decrement={decrement}
                heading="Counter using render prop"
              />
            )}
          />
        </div>
        <div className="col-12 mt-5 ">
          <DisplayApiData />
        </div>
      </div>
    </div>
  );
}

export default App;
