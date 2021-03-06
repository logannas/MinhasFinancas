import {config} from "../config";

function depositoUser(credentials, token){
    const res = fetch(`${config.apiUrl}/deposito`,{
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

const Deposito_Post ={
    depositoUser,
}

export default Deposito_Post;