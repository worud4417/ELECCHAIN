const url = require("./IpAddress");

async function fetchCharge(){
    const uri = url.url+"/charge";

    return fetch(uri,{
        method:"POST",
        headers:{
            Accept:"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            ID:id
        })
    }).then((response)=>response.json())
    .then((responseJson)=>{
        return responseJson
    }).catch((error)=>{
        if(error.message == "Network request failed"){
            alert("네트워크 오류");
        }
        return {error:false};
    })
}

export default fetchGetChargeBalance;