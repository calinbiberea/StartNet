import React from "react";
import BubbleChart from "@weknow/react-bubble-chart-d3";
import useScreenSize from "use-screen-size";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Backdrop, Button, Card, CardActions, CardContent, Fade, Modal, Typography} from "@mui/material";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            fontFamily: "sans-serif",
            textAlign: "center",
        },
        modalStyle: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            boxShadow: 24,
            p: 4,
        }
    })
);

const Bubbles: React.FC = () => {
    const size = useScreenSize();

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [projectName, setProjectName] = React.useState("");
    const [proposerName, setProposerName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [id, setID] = React.useState(0);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    const bubbleClick = (label) => {
        setProjectName(label);
        handleOpen()
    };

    return (
        <div className={classes.container}>
            Investor Page
        </div>
    );
}

export default Bubbles;