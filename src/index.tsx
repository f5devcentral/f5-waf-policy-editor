import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { SessionStorage } from "./storage/session.storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, Store } from "redux";
import { ApplicationReducers, ApplicationState } from "./store";

const sessionStorage = new SessionStorage();
const persistedState = sessionStorage.loadState();

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store: Store<ApplicationState> = createStore(
  ApplicationReducers,
  persistedState,
  composeEnhancers()
);

store.subscribe(() => {
  sessionStorage.saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
