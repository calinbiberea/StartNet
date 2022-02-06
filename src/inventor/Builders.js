import React, {useState} from "react";
import {createStyles, createTheme, makeStyles} from "@material-ui/core/styles";
import {Box, Card, CardContent, Typography} from "@mui/material";

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

    const [sponsoredList, setSponsoredList] = useState();

    const [investorList, setInvestorList] = useState();

    const [items, setItems] = useState([
        {itemName: 'item 1', quantity: 1, isSelected: false},
        {itemName: 'item 2', quantity: 3, isSelected: true},
        {itemName: 'item 3', quantity: 2, isSelected: false},
    ]);


    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const Interests = [
        { id: 1, interest: 'Backend' },
        { id: 2, interest: 'Frontend' },
        { id: 3, interest: 'Databases' },
        { id: 4, interest: 'Networks' }
    ];

    const Aids = [
        { id: 1, aid: 'Backend Developer' },
        { id: 2, aid: 'Frontend Developer' },
        { id: 3, aid: 'Databases Engineer' },
        { id: 4, aid: 'Market Analyst' }
    ];

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h6" color="purple">
                    Name: <span style={{color:"gray"}}> Dorel </span>
                </Typography>
                <Typography variant="h6" color="purple">
                    Interests: {Interests.map(data => (
                    <li style={{display:"inline", color:"gray"}} key={data.id}> {bull} {data.interest}</li>
                ))}
                </Typography>
                <Typography variant="h6" color="purple">
                    Investment budget: <span style={{color:"gray"}}> 1000$ </span>
                </Typography>
                <Typography variant="h6" color="purple">
                    Interests: {Aids.map(data => (
                    <li style={{display:"inline", color:"gray"}} key={data.id}> {bull} {data.aid}</li>
                ))}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    return (
        <div>
            <div className={classes.container}>
                {/*<div className='add-item-box'>*/}
                {/*    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}*/}
                {/*           className='add-item-input' placeholder='Add an item...'/>*/}
                {/*</div>*/}
                <div className='item-list'>
                    {items.map((item, index) => (
                        <Box  className={classes.cardClass} sx={{minWidth: 150, border: 8, borderRadius: 4}}  color="purple">
                            <Card variant="outlined">{card}</Card>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Builders;