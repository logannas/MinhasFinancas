import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/index';
import { useForm } from "react-hook-form";
import useToken from '../../useToken';
import DepositoUser from '../../services/Deposito';
import Swal from 'sweetalert2';

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
        fontSize: "15px",
    },
    span: {
        color: "red",
        fontSize: "10px",
    },
    button: {
        width: "100%",
        float: "center",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
        backgroundColor: "#3d6eff",
        fontSize: "20px",
        color: "#ffffff",
    }
}));


export default function Deposito() {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { token } = useToken();

    const onSubmit = data => {
        const op = { operacao: "deposito" }
        var dataMerge = Object.assign(op, data)
        const res = DepositoUser.depositoUser(dataMerge, token);
        res.then(res => res.json())
            .then(function (result) {
                if (result.error) {
                    Swal.fire('erro', result.message, 'error');
                }
                else {
                    Swal.fire('sucesso', 'Depósito adicionado com sucesso', 'success')
                }
            }).catch(err => {
                Swal.fire('erro', 'erro interno do servidor, tente novamente', 'error');
            });
    };
    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Box}>
                    <fieldset>
                        <legend>Depósito</legend>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Data da depósito:</p>
                            <input type="date" className={classes.input} {...register("date", { required: true })} />
                            {errors.date && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Valor do depósito R$: </p>
                            <input type="number" step="any" min="0" className={classes.input} {...register("valor", { required: true })} />
                            {errors.valor && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <br />
                            <button type="submit" className={classes.button}>Enviar</button>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}