import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Header from "../Header/index";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link as RouterLink } from 'react-router-dom';
import GetMetas from '../../services/GetMetas';
import useToken from '../../useToken';
import { set } from 'react-hook-form';



const useStyles = makeStyles((theme) => ({
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
    const [nome, setNome] = useState([]);
    const [data, setData] = useState([]);
    const [valor, setValor] = useState([]);
    const { token } = useToken();


    useEffect(() => {
        const res = GetMetas.metasUser(token);
        res.then(res => res.json())
            .then(function (result) {
                //console.log(result);
                var teste = [];
                for (var obj in result) {
                    teste.push([result[obj].nome, result[obj].valor, result[obj].dataFinal]);
                }
                setNome(teste);
                //console.log(nome)
                //setNome(nome + [result.nome, result.valor,result.dataFinal]);
                //console.log(teste)
                //setValor(result.valor);
                //setValor(result.dataFinal);
            });
    }, []);

    const getMetas = nome.map((item, i) => {
        console.log(nome[i][0])
        return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <IconButton color="primary" aria-label="upload picture" component="span" className={classes.icon}>
                        <DeleteIcon />
                    </IconButton>
                    <Typography variant="h5" component="h2">
                        {nome[i][0]}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        R$ {nome[i][1]}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Até dia: {nome[i][2].replace("T00:00:00.000Z", "")}
                    </Typography>
                </CardContent>
            </Card>
        )
    });

    return (
        <div>
            <Header />
            <div className={classes.grid}>
                {getMetas}
            </div>
            <Fab color="primary" aria-label="add" className={classes.fab} type="button" {...{ key: "AddMetas", to: "/addmetas", component: RouterLink }}>
                <AddIcon />
            </Fab>
        </div>
    );
}
