const axios = require('axios')
const url= 'http://localhost:8080/Login'
    axios.get(url).then(response=>
    {
        console.log("Response from Soap Server\n"+JSON.stringify(response.data))
    })
    .catch(error=>
    {
        console.log("Error is "+error)
    })
