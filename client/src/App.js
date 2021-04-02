// import { getRoles } from "@testing-library/react";
import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./components/Globalstyles";
import { Provider } from './WeatherContext';

function App() {
  return (
    <Provider>
      <Router />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
