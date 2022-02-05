import React, {useState} from "react";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Join from "./common/Join";
import InventorForm from "./inventor/InventorForm";
import InventorView from "./inventor/InventorView";
import BuilderView from "./builder/BuilderView";
import BuilderForm from "./builder/BuilderForm";
import InvestorForm from "./investor/InvestorForm";
import InvestorView from "./investor/InvestorView";

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

                    <Route path="/inventor-view" element={<InventorView/>}/>

                    <Route path="/builder-form" element={<BuilderForm />}/>

                    <Route path="/builder-view" element={<BuilderView />}/>

                    <Route path="/investor-form" element={<InvestorForm />}/>

                    <Route path="/investor-view" element={<InvestorView />}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;