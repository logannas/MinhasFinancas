import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Dashboard from "../../services/Dashboard";
import useToken from '../../useToken';


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
    Header: {
        width: "100%",
        height: "30%",
        background: "#3d6eff",
        color: "#ffffff",
        borderStyle: "solid",
        borderColor: "#3d6eff",
        borderWidth: 2,
    },
    List: {
        width: "100%",
        borderStyle: "solid",
        borderColor: "#3d6eff",
        borderWidth: 2,
    },
    i: {
        float: "right",
        fontWeight: "bold",
        color: "#00000"
    },
    p: {
        fontSize: "15px",
        color: "#000000",
    },
    p1: {
        color: "#000000",
    }
}));


export default function Historico() {
    const classes = useStyles();
    const { token } = useToken();
    const food = useRef();
    const transport = useRef();
    const [alimentacao, setAlimentacao] = useState([]);
    const [transporte, setTransporte] = useState([]);
    const [contas, setContas] = useState([]);
    const [outros, setOutros] = useState([]);

    useEffect(() => {
        const res = Dashboard.deshboardUser(token);
        res.then(res => res.json())
            .then(function (result) {
                setAlimentacao(result.alimentacao);
                setTransporte(result.transporte);
                setContas(result.contas);
                setOutros(result.outros);
            });
    }, []);

    const getAlimentacao = alimentacao.map((item, i) => {
        return (
            <div>
                <p className={classes.p}>{item.date.replace("T00:00:00.000Z", "")}</p>
                <p className={classes.p1}>{item.descricao}<i className={classes.i}>R$ {item.valor}</i></p>
                <hr></hr>
            </div>
        )
    });

    const getTransporte = transporte.map((item, i) => {
        return (
            <div>
                <p className={classes.p}>{item.date.replace("T00:00:00.000Z", "")}</p>
                <p className={classes.p1}>{item.descricao}<i className={classes.i}>R$ {item.valor}</i></p>
                <hr></hr>
            </div>
        )
    });

    const getContas = contas.map((item, i) => {
        return (
            <div>
                <p className={classes.p}>{item.date.replace("T00:00:00.000Z", "")}</p>
                <p className={classes.p1}>{item.descricao}<i className={classes.i}>R$ {item.valor}</i></p>
                <hr></hr>
            </div>
        )
    });

    const getOutros = outros.map((item, i) => {
        return (
            <div>
                <p className={classes.p}>{item.date.replace("T00:00:00.000Z", "")}</p>
                <p className={classes.p1}>{item.descricao}<i className={classes.i}>R$ {item.valor}</i></p>
                <hr></hr>
            </div>
        )
    });

    return (
        <div className={classes.Container}>
            <div className={classes.Box}>
                <br></br>
                <div className={classes.Header}>
                    <p style={{ width: "50%", fontSize: "25px" }}><FastfoodIcon />&nbsp; Alimentação</p>
                </div>
                <div className={classes.List}>
                    <div style={{ marginLeft: "1%", marginRight: "1%" }} ref={food}>
                        {getAlimentacao}
                        <br></br>
                    </div>
                    <br></br>
                </div>
                <br></br>
                <div className={classes.Header}>
                    <p style={{ width: "50%", fontSize: "25px" }}><AirportShuttleIcon />&nbsp; Transporte</p>
                </div>
                <div className={classes.List}>
                    <div style={{ marginLeft: "1%", marginRight: "1%" }} ref={transport}>
                        {getTransporte}
                        <br></br>
                    </div>
                    <br></br>
                </div>
                <br></br>
                <div className={classes.Header}>
                    <p style={{ width: "50%", fontSize: "25px" }}><ReceiptIcon />&nbsp; Contas</p>
                </div>
                <div className={classes.List}>
                    <div style={{ marginLeft: "1%", marginRight: "1%" }}>
                        {getContas}
                        <br></br>
                    </div>
                    <br></br>
                </div>
                <br></br>
                <div className={classes.Header}>
                    <p style={{ width: "50%", fontSize: "25px" }}><CreditCardIcon />&nbsp; Outro</p>
                </div>
                <div className={classes.List}>
                    <div style={{ marginLeft: "1%", marginRight: "1%" }}>
                        {getOutros}
                        <br></br>
                    </div>
                    <br></br>
                </div>
            </div>
            <br></br>
        </div>
    )
}