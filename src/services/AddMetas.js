import {config} from "../config";

function addMetas(credentials, token){
    const res = fetch(`${config.apiUrl}/addmetas`,{
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

const AddMetas_Post ={
    addMetas,
}

export default AddMetas_Post;