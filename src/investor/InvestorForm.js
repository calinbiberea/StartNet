import React from "react";
import {Checkbox, TextField,} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";

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

const InvestorForm: React.FC = () => {
    const classes = useStyles();

    const handleSubmit = () => {
        // Should do something here nicely :)
    }

    return (
        <>
            <div className={classes.centered}>
                <div className={classes.container}>
                    <form onSubmit={handleSubmit} className={classes.container}>
                        <TextField name="lastName" label="Last Name" />
                        <TextField name="firstName" label="First Name" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default InvestorForm;