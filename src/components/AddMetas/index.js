import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/index';
import { useForm } from "react-hook-form";
import AddMetasApi from '../../services/AddMetas';
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


export default function AddMetas() {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { token } = useToken();

    const onSubmit = data => {
        const res = AddMetasApi.addMetas(data, token);
        res.then(res => res.json())
        .then(function(result){
            if(result.message){
                alert(result.message)
            }
            else{
                alert("Meta criada com sucesso");
            }
        }).catch(err =>{
            alert(err);
        });
    };


    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Box}>
                    <fieldset>
                        <legend>Metas</legend>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Nome da meta:</p>
                            <input className={classes.input} {...register("nome", { required: true })} />
                            {errors.nome && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Valor da meta R$: </p>
                            <input type="number" min="0" className={classes.input} {...register("valor", { required: true })} />
                            {errors.valor && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Data final para meta:</p>
                            <input type="date" className={classes.input} {...register("dataFinal", { required: true })} />
                            {errors.dataFinal && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <br />
                            <button type="submit" className={classes.button}>Enviar</button>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}