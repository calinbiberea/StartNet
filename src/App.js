import React from "react";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Join from "./components/Join";
import InventorForm from "./components/InventorForm";
import View from "./components/View";

const theme = createTheme({
    palette: {
        primary: {
            main: '#3b2354',
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Join/>}/>

                    <Route path="/inventor-form" element={<InventorForm/>}/>

                    <Route path="/view" element={<View/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;