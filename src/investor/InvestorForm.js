import React from "react";
import {createStyles, createTheme, makeStyles} from "@material-ui/core/styles";
import {Button, TextField, Typography} from "@material-ui/core";
import {Autocomplete, Chip, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";


const theme = createTheme({
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: "#FFFCF4",
            },
        }
    }
});

const useStyles = makeStyles((theme) =>
    createStyles({
        centered: {
            backgroundColor: "#FFFCF4",
            marginTop: 56,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            backgroundColor: "#FFFCF4",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        formItem: {
            marginTop: 35,
            width: 450,
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
            margin: 24,
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
            wantStyle: {
                fontWeight: 800,
            },
        },
    })
);

const InvestorForm: React.FC = () => {
    const classes = useStyles(theme);

    const history = useNavigate();

    const handleSubmit = () => {
        history("/investor-view")
        console.log("So it begins");
    }

    return (
        <>
            <div className={classes.centered}>
                <div className={classes.container}>
                    <Typography variant="h3" gutterBottom component="div" className={classes.wantStyle}>
                        Complete this form to begin investing
                    </Typography>

                    <form onSubmit={handleSubmit} className={classes.container}>
                        <TextField required name="name" label="Your Name" className={classes.formItem} />
                        <TextField required name="email" label="Your Email" className={classes.formItem} />
                        <TextField required type="password" name="password" label="Password" className={classes.formItem} />
                        <TextField required type="number" name="budget" label="Investment Budget" className={classes.formItem} />
                        <Stack className={classes.formItem}>
                            <Autocomplete
                                multiple
                                id="tags-filled"
                                options={tags.map((option) => option.tag)}
                                freeSolo
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="filled"
                                        label="Interests"
                                        placeholder="Interests"
                                    />
                                )}
                            />
                        </Stack>
                        <Stack className={classes.formItem}>
                            <Autocomplete
                                multiple
                                id="tags-filled"
                                options={tags.map((option) => option.tag)}
                                freeSolo
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="filled"
                                        label="Additionally Can Help With"
                                        placeholder="Additionally Can Help With"
                                    />
                                )}
                            />
                        </Stack>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleSubmit}
                        >
                            Invest
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

const tags = [
    { tag: 'blockchain' },
    {tag: 'environment' },
];

export default InvestorForm;
