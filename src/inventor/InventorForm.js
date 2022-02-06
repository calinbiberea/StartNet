import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Button, TextField, Typography} from "@material-ui/core";
import {Autocomplete, Chip, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        centered: {
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
    const classes = useStyles();

    const history = useNavigate();

    const [projectName, setProjectName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [abstract, setAbstract] = useState("");
    const [needs, setNeeds] = useState("");
    const [tagList, setTagList] = useState([]);
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("Making an API call to save the PROJECT data before going to main page");

        const encodedName = encodeURIComponent(name)
        const encodedProjectName = encodeURIComponent(projectName)
        const encodedEmail = encodeURIComponent(email)
        const encodedAbstract = encodeURIComponent(abstract)
        const encodedNeeds = encodeURIComponent(needs)
        const encodedTagsString = encodeURIComponent(tagList.join(','))
        const encodedPassword = encodeURIComponent(password)

        const shitRequest = 'https://ichack-startnet.herokuapp.com/add_project?projectName=' + encodedProjectName + '&name=' + encodedName + '&tagsString=' + encodedTagsString + '&email=' + encodedEmail + '&password=' + encodedPassword + '&abstract=' + encodedAbstract + '&needs=' + encodedNeeds;

        fetch(shitRequest)
            .then(response => response.json())
            .then(data => console.log(data));

        console.log("Loading the data back as well");

        const request = 'https://ichack-startnet.herokuapp.com/get_project?projectName=' + encodedName + '&password=' + encodedPassword;

        console.log(request);

        fetch(request).then((response) => response.json())
            .then(data => history("/inventor-view", {state: {data: data}}), error => {
                console.log("Login failed: try harder");
            });

    }

    return (
        <>
            <div className={classes.centered}>
                <div className={classes.container}>
                    <Typography variant="h3" gutterBottom component="div" className={classes.wantStyle}>
                        Complete this form to begin your startup journey
                    </Typography>

                    <form onSubmit={handleSubmit} className={classes.container}>
                        <TextField required name="projectName" label="Project Name" className={classes.formItem}
                                   onChange={(event) => setProjectName(event.target.value)}/>
                        <TextField required name="authorName" label="Your Name" className={classes.formItem}
                                   onChange={(event) => setName(event.target.value)}/>
                        <TextField requiredname="authorEmail" label="Your Email" className={classes.formItem}
                                   onChange={(event) => setEmail(event.target.value)}/>
                        <TextField required type="password" name="password" label="Password"
                                   className={classes.formItem} onChange={(event) => setPassword(event.target.value)}/>
                        <TextField multiline required name="abstract" label="Project Abstract"
                                   className={classes.formItem} onChange={(event) => setAbstract(event.target.value)}/>
                        <TextField multiline required name="needs" label="Project Needs" className={classes.formItem}
                                   onChange={(event) => setNeeds(event.target.value)}/>
                        <Stack className={classes.formItem}>
                            <Autocomplete
                                multiple
                                id="tags-filled"
                                options={tags.map((option) => option.tag)}
                                freeSolo
                                value={tagList}
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({index})} />
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
                                onChange={(_, values) => setTagList(values)}
                            />
                        </Stack>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleSubmit}
                        >
                            Join
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

const tags = [
    {tag: 'blockchain'},
    {tag: 'environment'},
];

export default InventorForm;
