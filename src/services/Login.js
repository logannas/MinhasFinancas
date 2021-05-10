async function loginUser(credentials){
    return fetch('http://localhost:8080/login',{
        method: 'POST',
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const Login_Post ={
    loginUser,
}

export default Login_Post;