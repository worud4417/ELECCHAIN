var url = require("./IpAddress");

async function fetchJoin(id,password,name,carnumber,email){
    const uri = url+"/api/join/setCusomer";

    return fetch(uri,{
        method:"POST",
        headers:{
            Accept:"application/json",
            'Content-Type':"application/json",
        },
        body:JSON.stringify({
            ID:id,
            PASSWORD:password,
            NAME:name,
            CARNUMBER:carnumber,
            EMAIL:email
        })
    }).then((response)=>response.json())
    .then((responseJson)=>{
        return responseJson;
    }).catch((error)=>{
        if(error.message == "Network request failed"){
            alert("네트워크 오류");
        }
    })
}

export default fetchJoin;