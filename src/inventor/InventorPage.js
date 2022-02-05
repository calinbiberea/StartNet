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

const InventorForm: React.FC = () => {
    const classes = useStyles(theme);

    const history = useNavigate();

    const handleSubmit = () => {
        history("/inventor-view")
        console.log("So it begins");
    }

    return (
        <>
            <div className={classes.centered}>

                <div className={classes.container}>
                    <Typography variant="h3" gutterBottom component="div" className={classes.wantStyle}>
                        Here are some project statistics:
                    </Typography>

                    <Typography variant="h3" gutterBottom component="div" className={classes.wantStyle}>
                        Update the project details:
                    </Typography>

                    <form onSubmit={handleSubmit} className={classes.container}>
                        <TextField required name="projectName" label="Project Name" className={classes.formItem}/>
                        <TextField required name="authorName" label="Your Name" className={classes.formItem}/>
                        <TextField required name="authorEmail" label="Your Email" className={classes.formItem}/>
                        <TextField multiline required name="abstract" label="Project Abstract" className={classes.formItem}/>
                        <TextField multiline required name="needs" label="Project Needs" className={classes.formItem}/>
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
                                        label="Project Tags"
                                        placeholder="Project Tags"
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
                            Update Project
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

export default InventorForm;
