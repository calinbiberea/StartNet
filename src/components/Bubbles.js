import React from "react";
import BubbleChart from "@weknow/react-bubble-chart-d3";
import useScreenSize from "use-screen-size";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            fontFamily: "sans-serif",
            textAlign: "center",
        },
    })
);

const Bubbles: React.FC = () => {
    const size = useScreenSize();

    const classes = useStyles();

    const bubbleClick = (label) => {
        console.log("Custom bubble click func");
    };
    const legendClick = (label) => {
        console.log("Customer legend click func");
    };

    return (
        <div className={classes.container}>


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
                //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                bubbleClickFunc={bubbleClick()}
                legendClickFun={legendClick()}
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