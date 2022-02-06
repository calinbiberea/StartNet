import React from "react";
import {AppBar, Button, ButtonGroup, TextField, Typography,} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import logo from "../images/logo.gif";
import {useNavigate} from "react-router-dom";
import {
    Backdrop,
    Card,
    CardActions,
    CardContent,
    Fade,
    FormControlLabel,
    FormLabel,
    Modal,
    Radio,
    RadioGroup
} from "@mui/material";

const useStyles = makeStyles((theme) =>
    createStyles({
        bar: {
            colour: '#FFFCF4',
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
        },
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
        containerForm: {
            marginTop: 15,
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
        wantStyle: {
            colour: '#FFFCF4',
            fontWeight: 400,
        },
        modalStyle: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            boxShadow: 24,
            p: 4,
        }
    })
);

const Join: React.FC = () => {
    const classes = useStyles();

    const history = useNavigate();

    const onInventorClick = () => {
        history("/inventor-form");
    }

    const onInvestorClick = () => {
        history("/investor-form");
    }

    const onBuilderClick = () => {
        history("/builder-form");
    }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [type, setType] = React.useState("");

    const handleSubmit = () => {
        // eslint-disable-next-line default-case
        switch (type) {
            case "inventor":
                console.log("Making investor API call with: " + name + " " + password);

                const encodedName = encodeURIComponent(name)
                const encodedPass = encodeURIComponent(password)

                const request = 'https://ichack-startnet.herokuapp.com/get_project?projectName=' + encodedName + '&password=' + encodedPass;

                console.log(request);

                fetch(request).then((response) => response.json())
                    .then(data => history("/inventor-view", {state: {data: data}}), error => {
                        console.log("Login failed: try harder");
                    });

                break;
            case "investor":
                break;
            case "builder":
        }

    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Card className={classes.modalStyle}>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                As you have already joined StartNet, just use your login details:
                            </Typography>

                            <form className={classes.containerForm}>
                                <FormLabel id="demo-row-radio-buttons-group-label">User Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    defaultValue={0}
                                    onChange={(event) => setType(event.target.value)}
                                >
                                    <FormControlLabel value="inventor" control={<Radio/>} label="Inventor"/>
                                    <FormControlLabel value="builder" control={<Radio/>} label="Builder"/>
                                    <FormControlLabel value="investor" control={<Radio/>} label="Investor"/>
                                </RadioGroup>
                                <TextField required name="name" label="Your Name" className={classes.formItem}
                                           onChange={(event) => setName(event.target.value)}/>
                                <TextField required type="password" name="password" label="Password"
                                           className={classes.formItem}
                                           onChange={(event) => setPassword(event.target.value)}/>
                                <CardActions>
                                    <Button size="small" onClick={handleSubmit}>Login</Button>
                                </CardActions>
                            </form>
                        </CardContent>

                    </Card>
                </Fade>
            </Modal>

            <AppBar position="sticky" className={classes.bar}>
                <Button variant="h5" className={classes.wantStyle} onClick={handleOpen}>
                    <span style={{color: '#FFFCF4', textAlign: 'end'}}>Already Got An Account?</span>
                </Button>
            </AppBar>
            <div className={classes.centered}>
                <div className={classes.container}>


                    <img className={classes.logo} src={logo} alt="StartNet"/>

                    <Typography variant="h3" gutterBottom component="div" className={classes.wantStyle}>
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
                                onClick={onBuilderClick}
                            >
                                Build
                            </Button>

                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={onInvestorClick}
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