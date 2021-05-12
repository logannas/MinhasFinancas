async function createUser(credentials){
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

const CUser_Post ={
    createUser,
}

export default CUser_Post;