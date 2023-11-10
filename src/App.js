import React from "react";
import { Provider } from "react-redux";
import store from "./Components/redux/store"; // Remove the extra space here
import "./App.css";
import CakeContainer from "./Components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
