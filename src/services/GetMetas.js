async function metasGet(token){
    return fetch('http://localhost:3030/metas',{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ token,
        },
    })
    .then(data => data.json())
}

const Metas_Get ={
    metasGet,
}

export default Metas_Get;