import {config} from "../config";

function metasUser(token){
    const res = fetch(`${config.apiUrl}/metas`,{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ token,
        },
    })

    return res;
}

const Metas_Get ={
    metasUser,
}

export default Metas_Get;