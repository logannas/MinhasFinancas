import {config} from "../config";

function deshboardUser(token){
    const res = fetch(`${config.apiUrl}/`,{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ token,
        },
    })

    return res;
}

const Deshboard_Post ={
    deshboardUser,
}

export default Deshboard_Post;