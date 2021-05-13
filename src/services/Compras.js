import {config} from "../config";

function comprasUser(credentials, token){
    const res = fetch(`${config.apiUrl}/compras`,{
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

const Compras_Post ={
    comprasUser,
}

export default Compras_Post;