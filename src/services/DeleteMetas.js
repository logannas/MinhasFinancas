import {config} from "../config";

function delMetas(id, token){
    const res = fetch(`${config.apiUrl}/deposito/${id}`,{
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer '+ token,
        },
    })
    return res;
}

const DelMetas_Post ={
    delMetas,
}

export default DelMetas_Post;