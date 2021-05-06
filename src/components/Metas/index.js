import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Header from "../Header/index";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link as RouterLink} from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: "80%",
        maxHeight: "70%",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "3%",
        color: "#3d6eff",
        display: "inline-grid",
    },
    pos: {
        marginBottom: 12,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
    },
    icon: {
        float: "right",
        color: "#3d6eff",
        fontSize: "small",
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        background: "#3d6eff",
    },
}));

export default function OutlinedCard() {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className={classes.grid}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <IconButton color="primary" aria-label="upload picture" component="span" className={classes.icon}>
                            <DeleteIcon />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                            Comprar Carro
                    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <b>R$ 20.000</b>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <IconButton color="primary" aria-label="upload picture" component="span" className={classes.icon}>
                            <DeleteIcon />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                            Comprar Carro
                    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <b>R$ 20.000</b>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <IconButton color="primary" aria-label="upload picture" component="span" className={classes.icon}>
                            <DeleteIcon />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                            Comprar Carro
                    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <b>R$ 20.000</b>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <IconButton color="primary" aria-label="upload picture" component="span" className={classes.icon}>
                            <DeleteIcon />
                        </IconButton>
                        <Typography variant="h5" component="h2">
                            Comprar Carro
                    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <b>R$ 20.000</b>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Fab color="primary" aria-label="add" className={classes.fab} type="button" {...{key: "AddMetas", to:"/addmetas", component: RouterLink}}>
                <AddIcon />
            </Fab>
        </div>
    );
}
