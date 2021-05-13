import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/index';
import { useForm } from "react-hook-form";
import ComprasUser from "../../services/Compras";
import useToken from '../../useToken';
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


export default function Compras() {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { token } = useToken();

    const onSubmit = data => {
        const op = { operacao: "compra" }
        var dataMerge = Object.assign(op, data)
        const res = ComprasUser.comprasUser(dataMerge, token);
        res.then(res => res.json())
            .then(function (result) {
                if (result.message) {
                    Swal.fire('erro', result.message, 'error');
                }
                else {
                    Swal.fire('sucesso', 'Compra adicionada com sucesso', 'success')
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
                        <legend>Compras</legend>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Data da compra:</p>
                            <input type="date" className={classes.input} {...register("date", { required: true })} />
                            {errors.date && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Descrição:  </p>
                            <input className={classes.input} {...register("descricao", { required: true })} />
                            {errors.descricao && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Categoria: </p>
                            <select className={classes.input} {...register("categoria")}>
                                <option key="Alimentação" value="Alimentação">
                                    Alimentação
                                    </option>
                                <option key="Transporte" value="Transporte">
                                    Transporte
                                    </option>
                                <option key="Contas" value="Contas">
                                    Contas
                                    </option>
                                <option key="Outros" value="Outros">
                                    Outros
                                    </option>
                            </select>
                            {errors.categoria && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                            <p>Valor da compra R$: </p>
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