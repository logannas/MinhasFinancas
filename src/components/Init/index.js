import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from "../../services/Dashboard";

const useStyles = makeStyles((theme) => ({
    Container: {
        width: "100vw",
        height: "30vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    Box: {
        width: "60%",
        height: "195px",
        color: "#3d6eff",
        fontSize: "20px",
        fontFamily: "Arial",
        fontWeight: "10",

    },
    i: {
        float: "right",
        fontWeight: "bold",
    }
}));


export default function Init() {
    const classes = useStyles();
    const [guardado, setGuardado] = useState(0);
    const [gasto, setGasto] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const sessionToken = JSON.parse(window.sessionStorage.getItem('token'));
        const token = sessionToken.token;
        const res = Dashboard.deshboardUser(token);
        res.then(res => res.json())
            .then(function (result) {
                var objGuardado = 0;
                var objGasto = 0;
                for (var obj in result.guardado) {
                    objGuardado += result.guardado[obj].valor
                }
                for (obj in result.gasto) {
                    objGasto += result.gasto[obj].valor
                }
                var restante = (objGuardado - objGasto);
                setGuardado(objGuardado.toFixed(2));
                setGasto(objGasto.toFixed(2));
                setTotal(restante.toFixed(2));
            }).catch(err => {
                alert(err);
            });
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.Box}>
                <p style={{ color: "green" }}>Dinheiro Guardado<i className={classes.i}>R$ {guardado}</i></p>
                <hr></hr>
                <p style={{ color: "red" }}>Dinheiro Gasto <i className={classes.i}>R$ {gasto}</i></p>
                <hr></hr>
                <p>Dinheiro Restante <i className={classes.i}>R$ {total}</i></p>
                <hr></hr>
                <br></br>
            </div>
        </div>
    )
}