import "@patternfly/react-core/dist/styles/base.css";
import Counter from './components/Counter';
import { useState } from "react";
import './App.css';

function App() {
  const [count , setCount] = useState<number>(0);

  const incrementCount = () =>{
    setCount (count + 1)
  }

  const decrementCount = () =>{
    setCount (count - 1)
  }

  return (
    <Counter count={count} incrementCount = {incrementCount} decrementCount={decrementCount}/>
  );
}

export default App;
