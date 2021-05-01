import { makeStyles } from '@material-ui/core/styles';

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
    return (
        <div className={classes.Container}>
            <div className={classes.Box}>
                <p style={{color:"green"}}>Dinheiro Guardado<i className={classes.i}>R$ 3000,00</i></p>
                <hr></hr>
                <p style={{color:"red"}}>Dinheiro Gasto <i className={classes.i}>R$ 200,00</i></p>
                <hr></hr>
                <p>Dinheiro Restante <i className={classes.i}>R$ 22111</i></p>
                <hr></hr>
                <br></br>
            </div>
        </div>
    )
}