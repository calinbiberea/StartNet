import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import Join from "./components/Join";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3b2354',
    },
  },
});

const App: React.FC = () => {
  console.log("start");

  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Routes>
                  <Route path="/" element={<Join />} />
              </Routes>
          </Router>
      </ThemeProvider>
  );
};

export default App;