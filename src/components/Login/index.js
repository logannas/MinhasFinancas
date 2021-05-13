import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PropTypes from 'prop-types';
import LoginUser from '../../services/Login';



const useStyles = makeStyles(() => ({
    Container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
    },
    Box: {
        textAlign: "center",
        borderRadius: "20px",
        marginTop: "5%",
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

export default function Login({setToken}) {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const res = LoginUser.loginUser(data);
        
        res.then(res => res.status)
            .then(function (result) {
                if(result !== 200){
                    alert("Usuário ou senha não encontrado")
                }
            }).catch(err =>{
                alert(err);
            });

        res.then(res => res.json())
            .then(function(result){
                if(result.token){
                    var token = {token: `${result.token}`};
                    setToken(token);
                }
            }).catch(err =>{
                alert(err);
            });
    }

    return (
        <div>
            <div className={classes.Container}>
                <div className={classes.Box}>
                    <h1 style={{ fontSize: "30px" }}>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} action="/app">
                        <EmailIcon style={{ fontSize: "20px" }} />
                        <input type="text" placeholder="Email" className={classes.input} {...register("email", { required: true })} />
                        <br></br>
                        {errors.email && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                        <br></br>
                        <LockIcon style={{ fontSize: "20px" }} />
                        <input type="password" placeholder="Senha" min="0" className={classes.input} {...register("password", { required: true })} />
                        <br></br>
                        {errors.password && <span className={classes.span}>Esse campo deve ser preenchido</span>}
                        <p></p>
                        <button type="submit" className={classes.button}>Enviar</button>
                        <p></p>
                        <br></br>
                        <p className={classes.p}>Esqueceu sua senha? <a href="/senha" style={{ color: "#ffffff" }}>Clique Aqui</a></p>
                        <p className={classes.p}>Primeiro acesso? <a href="/cadastro" style={{ color: "#ffffff" }}>Cadastra-se</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

Login.prototype ={
    setToken: PropTypes.func.isRequired
}