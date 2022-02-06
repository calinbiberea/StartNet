import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";

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
    })
);

const Investors: React.FC = () => {
    const classes = useStyles();

    const [sponsoredList, setSponsoredList] = useState();

    const [investorList, setInvestorList] = useState();

    const [items, setItems] = useState([
        {itemName: 'item 1', quantity: 1, isSelected: false},
        {itemName: 'item 2', quantity: 3, isSelected: true},
        {itemName: 'item 3', quantity: 2, isSelected: false},
    ]);

    return (
        <div>
            <div className={classes.container}>
                {/*<div className='add-item-box'>*/}
                {/*    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}*/}
                {/*           className='add-item-input' placeholder='Add an item...'/>*/}
                {/*</div>*/}
                <div className='item-list'>
                    {items.map((item, index) => (

                        <div className='item-container'>
                            <div className='item-name' onClick={() => {}}>
                                {item.isSelected ? (
                                    <>
                                        <span className='completed'>{item.itemName}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{item.itemName}</span>
                                    </>
                                )}
                            </div>
                            <div className='quantity'>
                                <button>
                                                     onClick={() => {}}/>
                                </button>
                                <span> {item.quantity} </span>
                                <button>
                                                     onClick={() => {}}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Investors;