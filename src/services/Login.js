import {config} from "../config";

function loginUser(credentials){
    const res = fetch(`${config.apiUrl}/auth/authenticate`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    return res;
}

const Login_Post ={
    loginUser,
}

export default Login_Post;