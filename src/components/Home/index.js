import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Box from '@material-ui/core/Box';
import Header from '../Header/index';
import Init from '../Init/index';
import Hist from '../Histórico/index'

const useStyles = makeStyles((theme) => ({
    Box: {
        marginTop: "3%",
    },
    AccountIcon: {
        fontSize: 60,
        color: "#3d6eff"

    },
}));


export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Box display="flex" justifyContent="center" m={1} p={1} className={classes.Box}>
                <AccountBalanceIcon className={classes.AccountIcon} />
            </Box>
            <Init></Init>
            <br></br>
            <Hist />
        </div>
    );
}
