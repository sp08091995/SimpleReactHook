import './App.css';
import Counter from './Component';
import { useState } from 'react';



function App() {
  /**
   * Runs every time function load runs all the time
   * const [count,setCount] = useState(4)
   */
  const [count, setCount] = useState(() => {
    console.log("run init")
    return 4;
  })
  function decrementCount() {
    setCount((previousCount) => previousCount - 1 > 0 ? previousCount - 1 : previousCount)
  }

  function incrementCount() {
    setCount((previousCount) => previousCount + 1  < 100 ? previousCount + 1 : previousCount)
  }

  /**
   * In case of state (Object)
   * const [state,setState] = useState({count:4,theme;'blue'})
   function decrementCount(){
     setState(previousState=>{...previousState, count: prevState.count-1})
   }
   */
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
