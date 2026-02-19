import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () =>{
    counter = counter + 1
    if(counter >= 21){
      counter = false;
    }
    setCounter(counter);
  };

  const removeValue = () =>{
      counter = counter - 1
      if(counter <= -1){
      counter = false;
    }
    setCounter(counter);
  };

  return (
    <>
     <h1>Counter Value : {counter}</h1>

     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
