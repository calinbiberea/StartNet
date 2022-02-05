import React, {useState} from "react";
import {AppBar} from "@material-ui/core";
import {createTheme, makeStyles} from "@material-ui/core/styles";
import {Paper, Tab, Tabs, ThemeProvider, Typography} from "@mui/material";
import Bubbles from "./Bubbles";

const theme = createTheme({
    overrides: {
        MuiTab: {
            root: {
                "&.MuiTab-root": {
                    color: "#FFFCF4",
                    opacity: 1.0,
                    backgroundColor: "#FFFCF4",
                    border: 0,
                    borderBottom: "2px solid",
                    "&:hover": {
                        border: 0,
                        borderBottom: "2px solid",
                    },
                },
                "&.Mui-selected": {
                    backgroundColor: "none",
                    borderBottom: "2px solid #373985",
                    borderColor: "#FFFCF4",
                }
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        flexGrow: 1,
        color: "#FFFCF4",
        backgroundColor: "white",
    },
    viewButtons: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    tabIndicator: {
        backgroundColor: '#FFFCF4',
    },
    tabsStyle: {
        textColor: '#FFFCF4',
    },
    tabStyle: {
        fontWeight: "bold",
        textColor: '#FFFCF4',
        fontSize: "1rem",
    },
    container: {
        flex: 1,
        height: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 24,
    },
}));

const View: React.FC<ViewProps> = () => {
    const classes = useStyles();

    const [viewPage, setViewPage] = useState(0);
    const onViewPageChange = (_event, newValue: number) => setViewPage(newValue);

    const tabsArray = [
        <Bubbles />,
        <Typography>Muie1</Typography>,
        <Typography>Muie2</Typography>
    ]

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="sticky">
                    <Tabs
                        className={classes.tabsStyle}
                        value={viewPage}
                        onChange={onViewPageChange}
                        centered
                        TabIndicatorProps={{
                            style: {
                                color: '#FFFCF4',
                                maxHeight: 5,
                                height: "100%",
                                backgroundColor: '#FFFCF4',
                            },
                        }}
                    >
                        <Tab className={classes.tabStyle} label={<span style={{color: '#FFFCF4'}}>Ideas</span>}/>

                        <Tab className={classes.tabStyle} label={<span style={{color: '#FFFCF4'}}>Builders</span>}/>

                        <Tab className={classes.tabStyle} label={<span style={{color: '#FFFCF4'}}>Investors</span>}/>
                    </Tabs>
                </AppBar>
            </ThemeProvider>

            <Paper>
                {tabsArray[viewPage]}
            </Paper>
        </>

    );
};

export default View;