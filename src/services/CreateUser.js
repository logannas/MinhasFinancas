import {config} from "../config";

function createUser(credentials){
    const res = fetch(`${config.apiUrl}/auth/register`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    return res;
}

const Create_Post ={
    createUser,
}

export default Create_Post;