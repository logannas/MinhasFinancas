import { makeStyles } from '@material-ui/core/styles';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CreditCardIcon from '@material-ui/icons/CreditCard';

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
        // background: "#f5f7ff",
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
    }
}));


export default function Historico() {
    const classes = useStyles();
    return (
        <div className={classes.Container}>
            <div className={classes.Box}>
                <div className={classes.Header}>
                    <p style={{ width: "50%", fontSize: "25px" }}><FastfoodIcon />&nbsp; Alimentação</p>
                </div>
                <div className={classes.List}>
                    <div style={{ marginLeft: "1%", marginRight: "1%" }}>
                        <p>Ifood<i className={classes.i}>R$ 3000,00</i></p>
                        <hr></hr>
                        <p>Lanche <i className={classes.i}>R$ 200,00</i></p>
                        <hr></hr>
                        <p>Rastaurante <i className={classes.i}>R$ 22111</i></p>
                        <hr></hr>
                        <br></br>
                    </div>
                    <br></br>
                </div>
                <br></br>
                <div className={classes.Header}>
                    <p style={{ width: "50%", fontSize: "25px" }}><AirportShuttleIcon />&nbsp; Transporte</p>
                </div>
                <div className={classes.List}>
                    <div style={{ marginLeft: "1%", marginRight: "1%" }}>
                        <p>Ifood<i className={classes.i}>R$ 3000,00</i></p>
                        <hr></hr>
                        <p>Lanche <i className={classes.i}>R$ 200,00</i></p>
                        <hr></hr>
                        <p>Rastaurante <i className={classes.i}>R$ 22111</i></p>
                        <hr></hr>
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
                        <p>Ifood<i className={classes.i}>R$ 3000,00</i></p>
                        <hr></hr>
                        <p>Lanche <i className={classes.i}>R$ 200,00</i></p>
                        <hr></hr>
                        <p>Rastaurante <i className={classes.i}>R$ 22111</i></p>
                        <hr></hr>
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
                        <p>Ifood<i className={classes.i}>R$ 3000,00</i></p>
                        <hr></hr>
                        <p>Lanche <i className={classes.i}>R$ 200,00</i></p>
                        <hr></hr>
                        <p>Rastaurante <i className={classes.i}>R$ 22111</i></p>
                        <hr></hr>
                        <br></br>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}