import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/index';
import { useForm } from "react-hook-form";

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
        marginTop: "10%",
        width: "60%",
        height: "195px",
        color: "#3d6eff",
        fontSize: "20px",
        fontFamily: "Arial",
        fontWeight: "10",

    },
    input: {
        width: "100%",
        float: "right",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
        fontSize:"15px",
    },
    span:{
        color:"red",
        fontSize:"10px",
    },
    button:{
        width:"100%",
        float: "center",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
        backgroundColor: "#3d6eff",
        fontSize:"20px",
        color: "#ffffff",
    }
}));


export default function Compras() {
    const classes = useStyles();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Box}>
                    <fieldset>
                        <legend>Compras</legend>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Data da compra:</p>
                            <input type="date" className={classes.input} {...register("date", { required: true })} />
                            {errors.date && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Descrição:  </p>
                            <input className={classes.input} {...register("description", { required: true })} />

                            {errors.description && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Categoria: </p>
                            <select className={classes.input} {...register("ramo")}>
                                <option key="food" value="food">
                                    Alimentação
                                    </option>
                                <option key="transport" value="transport">
                                    Transporte
                                    </option>
                                <option key="ticket" value="ticket">
                                    Contas
                                    </option>
                                <option key="other" value="other">
                                    Outros
                                    </option>
                            </select>
                            {errors.ramo && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Valor da compra R$: </p>
                            <input type="number" min="0" className={classes.input} {...register("value", { required: true })} />
                            {errors.value && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <br />
                            <input type="submit" className={classes.button}/>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}