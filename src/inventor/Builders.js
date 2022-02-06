import React, {useState} from "react";
import {createStyles, createTheme, makeStyles} from "@material-ui/core/styles";
import {Box, Card, CardContent, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";

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
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            backgroundColor: "#FFFCF4",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        cardClass: {
          marginTop: 10,
        },
    })
);

const Builders: React.FC = () => {
    const classes = useStyles(theme);

    const initialProjectData = useLocation().state.data;
    const [matchingList, setMatchingList] = React.useState([]);
    const [getData, setGetData] = React.useState(true);

    const initialLoading = () => {
        if (getData) {
            const request = "https://ichack-startnet.herokuapp.com/get_builders_with_tags?tags=" + encodeURIComponent(initialProjectData.tagsString.join(',')) + '&project_count=' + encodeURIComponent(15);
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

    const card = (builder) => (
        <React.Fragment>
            <CardContent>
                <Typography variant="h6" color="purple">
                    Name: <span style={{color:"gray"}}>{builder.name}</span>
                </Typography>
                <Typography variant="h6" color="purple">
                    Interests: {builder.skills.map(data => (
                    <li style={{display:"inline", color:"gray"}} key={data}> {bull} {data}</li>
                ))}
                </Typography>
                <Typography variant="h6" color="purple">
                    Interests: {builder.interests.map(data => (
                    <li style={{display:"inline", color:"gray"}} key={data}> {bull} {data}</li>
                ))}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <div>
            <div className={classes.container}>
                {/*<div className='add-item-box'>*/}
                {/*    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}*/}
                {/*           className='add-item-input' placeholder='Add an item...'/>*/}
                {/*</div>*/}
                <div className='item-list'>
                    {matchingList.map((item, index) => (
                        <Box  className={classes.cardClass} sx={{minWidth: 150, border: 8, borderRadius: 4}}  color="purple">
                            <Card variant="outlined">{card(item)}</Card>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Builders;