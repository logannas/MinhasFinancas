async function deposito(credentials){
    return fetch('http://localhost:3030/auth/register',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const Deposito_Post ={
    createUser,
}

export default Deposito_Post;