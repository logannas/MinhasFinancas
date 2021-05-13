import {config} from "../config";

function senhaUser(credentials, token){
    const res = fetch(`${config.apiUrl}/auth/resetPassword`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify(credentials)
    })

    return res;
}

const Senha_Post ={
    senhaUser,
}

export default Senha_Post;