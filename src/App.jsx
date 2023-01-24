import React from "react";
import "./app.css";
const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="container">
      <h1>Hello Welcome to my custom config react CRA 🚀</h1>

      <p>Counter is : {counter}</p>

      <div className="wrapper--button">
        <button
          className="increment"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          INCREMENT
        </button>
        <button
          className="decrement"
          onClick={() => setCounter((counter) => counter - 1)}
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
};

export default App;
