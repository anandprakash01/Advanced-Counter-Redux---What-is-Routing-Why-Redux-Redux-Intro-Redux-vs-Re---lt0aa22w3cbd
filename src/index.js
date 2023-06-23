import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";

import { rootReducer } from "./reducers";
import { createStore } from "redux";

const state = createStore(rootReducer);

ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.getElementById("root")
);
