import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  signIn,
  signOut,
} from "../actions/action";

function App() {
  const [amount, setAmount] = useState(2);
  const counter = useSelector((prestate) => prestate.counter);
  const islogged = useSelector((prestate) => prestate.islogged);

  const dispatch = useDispatch();
  const handleIncre = () => {
    dispatch(increment());
  };
  const handleDecre = () => {
    dispatch(decrement());
  };
  const handleIncreByAmt = () => {
    dispatch(incrementByAmount(parseInt(amount)));
  };
  const handleLogin = () => {
    dispatch(signIn());
  };
  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <div id="main">
      {islogged ? (
        <div>
          <button onClick={handleLogOut}>Logout</button>
          <button onClick={handleIncre}>+</button>
          <span data-testid="counter">{counter}</span>
          <button onClick={handleDecre}>-</button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleIncreByAmt}>Add amount</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default App;
