import React from "react";
import {Button, ButtonGroup, Typography,} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import logo from "../images/logo.gif";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        centered: {
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        logo: {
            marginTop: 16,
            marginBottom: 24,
            [theme.breakpoints.down("xs")]: {
                height: 200,
            },
            [theme.breakpoints.up("sm")]: {
                height: 300,
            },
        },
        iconsAndButtonsContainer: {
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        image: {
            width: 350,
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        button: {
            margin: 8,
            borderRadius: 20,
            [theme.breakpoints.only("xs")]: {
                width: 250,
                fontSize: "1rem",
            },
            [theme.breakpoints.only("sm")]: {
                width: 300,
                fontSize: "1rem",
            },
            [theme.breakpoints.up("md")]: {
                width: 320,
                fontSize: "1.25rem",
            },
        },
    })
);


const Join: React.FC = () => {
    const classes = useStyles();

    const history = useNavigate();

    const onInventorClick = () => {
        console.log("should jump to inventor form!")
        history("/inventor-form");
    }

    return (
        <>
            <div className={classes.centered}>
                <div className={classes.container}>
                    <img className={classes.logo} src={logo} alt="StartNet"/>

                    <Typography variant="h3" gutterBottom component="div">
                        I want to...
                    </Typography>

                    <div className={classes.iconsAndButtonsContainer}>
                        <ButtonGroup orientation="vertical">
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={onInventorClick}
                            >
                                Invent
                            </Button>

                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                Build
                            </Button>

                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                Invest
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Join;