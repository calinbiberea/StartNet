import React, {useRef} from "react";
import {Checkbox, TextField, Typography,} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import { useState } from "react"

import Autocomplete from '@mui/material/Autocomplete';
import {Button} from "@mui/material";


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

export default function FormPropsTextFields() {
    const [projectName, setProjectName] = useState("");
    const [projectTopic, setProjectTopic] = useState([]);
    const [projectDescription, setProjectDescription] = useState("");
    const [projectRequirements, setProjectRequirements] = useState("");

    const addProjectTopic = (topic) => {
        const currentProjecTopic = projectTopic;
        currentProjecTopic.concat(topic);
        setProjectTopic(topic)
    }

    const removeProjectTopic = (topic) => {
        const currentProjecTopic = projectTopic;
        currentProjecTopic.concat(topic);
        setProjectTopic(topic)
    }


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >


            <div>
                <Typography variant="body1" gutterBottom component="div">
                    Project Name
                </Typography>
                <TextField
                    inputRef={ref => {setProjectName(ref)}}
                    required
                    id="name"
                    label="Project Name"
                    defaultValue="My New Project"
                />

                <Typography variant="body1" gutterBorefttom component="div">
                    Project Topic
                </Typography>
                <Autocomplete
                    inputValue={ref => {console.log(ref)}}
                    multiple
                    id="tags"
                    options={categories.map((option) => {
                        console.log("pula pula");
                        return option.tag;
                    })}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Topic"
                            placeholder="Topic..."
                        />
                    )}
                />
                <Typography variant="body1" gutterBottom component="div">
                    Description
                </Typography>
                <TextField
                    inputRef={ref => {setProjectDescription(ref)}}
                    id="description"
                    label="Description"
                    multiline
                    rows={6}
                    defaultValue="Enter description..."
                />

                <Typography variant="body1" gutterBottom component="div">
                    Requirements
                </Typography>
                <TextField
                    inputRef={ref => {setProjectRequirements(ref)}}
                    id="requirements"
                    label="Requirements"
                    multiline
                    rows={6}
                    defaultValue="Enter requirements..."
                />
                <Button
                    onClick={() => {
                        console.log("Project Name: " + projectName.value);
                        console.log("Project Topic(s): " + projectTopic.value);
                        console.log("Project Description: " + projectDescription.value);
                        console.log("Project Requirements: " + projectRequirements.value);
                    }}
                >
                    Submit
                </Button>

            </div>
        </Box>
    );
}

const categories = [
    {tag : "Fintech"},
    {tag: "Artificial Intelligence"},
    {tag: "Robotics"},
    {tag: "Agriculture"},
    {tag: "Clothing"},
];