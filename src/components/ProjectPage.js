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
                            <Typography gutterBottom variant="h5" component="div">
                                {projectName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This is some nice text to make everything nice and clear instead of insane.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Get Details</Button>
                            <Button size="small">Contact</Button>
                        </CardActions>
                    </Card>
                </Fade>
            </Modal>

            <BubbleChart
                graph={{
                    zoom: 1
                }}
                width={size.height}
                height={size.height}
                padding={0} // optional value, number that set the padding between bubbles
                showLegend={false} // optional value, pass false to disable the legend.
                legendPercentage={20} // number that represent the % of with that legend going to use.
                legendFont={{
                    family: "Arial",
                    size: 12,
                    color: "#000",
                    weight: "bold"
                }}
                valueFont={{
                    family: "Arial",
                    size: 12,
                    color: "#fff",
                    weight: "bold"
                }}
                labelFont={{
                    family: "Arial",
                    size: 16,
                    color: "#fff",
                    weight: "bold"
                }}
                // Custom bubble/legend click functions such as searching using the label, redirecting to other page
                bubbleClickFun={bubbleClick}
                legendClickFun={() => {
                }}
                data={[
                    {label: "Testing", value: 1, color: '#000000'},
                    {label: "API", value: 1},
                    {label: "Data", value: 1},
                    {label: "Commerce", value: 1},
                    {label: "AI", value: 3},
                    {label: "Management", value: 5},
                    {label: "Testing", value: 6},
                    {label: "Mobile", value: 9},
                    {label: "Conversion", value: 9},
                    {label: "Misc", value: 21},
                    {label: "Databases", value: 22},
                    {label: "DevOps", value: 22},
                    {label: "Javascript", value: 23},
                    {label: "Languages / Frameworks", value: 25},
                    {label: "Front End", value: "26"},
                    {label: "Content", value: 26}
                ]}
            />
        </div>
    );
}

export default Bubbles;