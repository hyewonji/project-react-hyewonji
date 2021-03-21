// import { getRoles } from "@testing-library/react";
import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./components/Globalstyles";
import { WeatherProvider } from './WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Router />
      <GlobalStyles />
    </WeatherProvider>
  );
}

export default App;
