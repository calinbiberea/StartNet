import React from "react";
import BubbleChart from "@weknow/react-bubble-chart-d3";
import useScreenSize from "use-screen-size";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Backdrop, Button, Card, CardActions, CardContent, Fade, Modal, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";

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

    const [projectName, setProjectName] = React.useState("");
    const [abstract, setAbstract] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const initialProjectData = useLocation().state.data;
    const [matchingList, setMatchingList] = React.useState([]);
    const [getData, setGetData] = React.useState(true);

    const initialLoading = () => {
        if (getData) {
            const request = "https://ichack-startnet.herokuapp.com/get_projects_with_tags?tags=" + encodeURIComponent(initialProjectData.tagsString.join(',')) + '&project_count=' + encodeURIComponent(15);
            console.log(request);
            fetch(request)
                .then(response => response.json())
                .then(data => {
                    setMatchingList(data);
                    setGetData(false);
                });
        }
    }
    initialLoading();

    const calculateSimilarityGradient = (similarity) => {
        const percentColors = [
            {pct: 0.0, color: {r: 0xff, g: 0x00, b: 0}},
            {pct: 0.5, color: {r: 0xff, g: 0xff, b: 0}},
            {pct: 1.0, color: {r: 0x00, g: 0xff, b: 0}}];

        const getColorForPercentage = function (pct) {
            let i;
            for (i = 1; i < percentColors.length - 1; i++) {
                if (pct < percentColors[i].pct) {
                    break;
                }
            }
            const lower = percentColors[i - 1];
            const upper = percentColors[i];
            const range = upper.pct - lower.pct;
            const rangePct = (pct - lower.pct) / range;
            const pctLower = 1 - rangePct;
            const pctUpper = rangePct;
            const color = {
                r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
                g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
                b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
            };

            function componentToHex(c) {
                const hex = c.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }

            function rgbToHex(r, g, b) {
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }

            return rgbToHex(color.r, color.g, color.b);
        };

        return getColorForPercentage(similarity);
    }

    const generateData = () => {
        let temp = [];

        matchingList.forEach((element) => {
            console.log(element);
            temp = temp.concat({
                label: element.projectName,
                value: element.accessValue,
                color: calculateSimilarityGradient(element.similarity),
            })
        });

        if (temp.length === 0) {
            return;
        }

        return temp;
    }
    generateData();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    const bubbleClick = (label) => {
        setProjectName(label);

        matchingList.forEach((element) => {
            if (element.projectName === label) {
                setAbstract(element.abstract)
            }
        });

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
                                {abstract}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Get Details</Button>
                            <Button size="small">Contact</Button>
                        </CardActions>
                    </Card>
                </Fade>
            </Modal>

            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        A Sponsored Example
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is where a sponsored app would be. Everyone sees it first and this means people would pay a
                        ton of money for this spot.
                    </Typography>
                    <Button style={{marginTop: 8}} size="small">Contact</Button>
                </CardContent>

            </Card>

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
                    color: "#000",
                    weight: "bold"
                }}
                labelFont={{
                    family: "Arial",
                    size: 16,
                    color: "#000",
                    weight: "bold"
                }}
                // Custom bubble/legend click functions such as searching using the label, redirecting to other page
                bubbleClickFun={bubbleClick}
                legendClickFun={() => {
                }}
                data={generateData()}
            />
        </div>
    );
}

export default Bubbles;