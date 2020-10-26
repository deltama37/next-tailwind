import { useEffect } from "react";
import { NextPage } from "next";
import { useCounter } from "@/contexts/counterContext";

const CounterPage: NextPage = () => {
  const { counter, setCounter } = useCounter();
  useEffect(() => {
    if (counter) {
      console.log(counter);
    }
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <span>{counter}</span>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default CounterPage;
