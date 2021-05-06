import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(() => ({
    Container: {
        width: "100vw",
        height: "50vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
    },
    Box: {
        textAlign: "center",
        borderRadius: "20px",
        marginTop: "10%",
        width: "30%",
        height: "100%",
        color: "#ffffff",
        fontSize: "20px",
        fontFamily: "Arial",
        fontWeight: "10",
        backgroundColor: "#3d6eff",

    },
    input: {
        width: "60%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
        fontSize: "15px",
    },
    span: {
        color: "red",
        fontSize: "13px",
    },
    button: {
        width: "40%",
        float: "center",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
        backgroundColor: "#0059e5",
        fontSize: "20px",
        color: "#ffffff",
        borderRadius: "10px"
    },
    p: {
        fontSize: "15px",
    }

}));


export default function Senha() {
    const classes = useStyles();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <div className={classes.Container}>
                <div className={classes.Box}>
                    <h1 style={{ fontSize: "30px" }}>Nova Senha</h1>
                    <p>Informe o email cadastrado</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <EmailIcon style={{ fontSize: "20px" }}/>
                        <input type="text" placeholder="Email" className={classes.input} {...register("email", { required: true })} />
                        <br></br>
                        {errors.email && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                        <p></p>
                        <input type="submit" className={classes.button} />
                        <p></p>
                    </form>
                </div>
            </div>
        </div>
    )
}