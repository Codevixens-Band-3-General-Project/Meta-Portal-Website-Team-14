/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-boolean-value */
import { useState } from "react";
import Context from "./component/context/Context";
import "./App.css";
import Main from "./Main";

const App = () => {
  const [walletConnected, IsConnected] = useState(false);
  const [leftSidebar, IsOpen] = useState(false);

  return (
    <Context.Provider
      value={{ walletConnected, IsConnected, leftSidebar, IsOpen }}>
      <Main />
    </Context.Provider>
  );
};

export default App;
