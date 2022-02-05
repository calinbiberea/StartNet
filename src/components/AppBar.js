import React, {ReactNode} from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {KeyboardBackspace} from "@material-ui/icons";
import {useNavigate} from "react-router-dom";

interface NavigationAppBarProps {
    children?: ReactNode;
}

const useStyles = makeStyles(() =>
    createStyles({
        backButton: {
            marginRight: 8,
        },
        title: {
            flexGrow: 1,
        },
    })
);

const NavigationAppBar: React.FC<NavigationAppBarProps> = ({
                                                               children,
                                                           }: NavigationAppBarProps) => {
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <Typography className={classes.title}>StarNet</Typography>
                {children}
            </Toolbar>
        </AppBar>
    );
};

export default NavigationAppBar;