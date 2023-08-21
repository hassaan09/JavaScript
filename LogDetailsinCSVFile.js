const axios = require('axios')
const url = 'http://localhost:8080/Login'
const fs= require('fs')
const path = 'E:/IEC/1st-Project-JavaScript/Csv-file.csv'

    axios.get(url,{ responseType:"arraybuffer"}).then(response=>
        {
        fs.writeFile(path,response.data,'utf-8',(err)=>
        {
            if(err)
            {
                console.log("Error:::"+err)
            }
            else
            {
                console.log("Data written to the file,\n The data is as follows:")
                console.log(fs.readFileSync(path,'utf-8'))
            }
            
        })})
        .catch(error=>
        {
            console.log("Error::"+error)
        })
    
