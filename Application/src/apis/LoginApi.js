async function fetchLogin(id,password){
    const uri = "http://172.30.1.40:3001/api/login/login";
    
    return fetch(uri,{
        method:"POST",
        headers:{
            Accept:"application/json",
            'Content-Type':"application/json",
        },
        body:JSON.stringify({
            ID:id,
            PASSWORD:password
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

export default fetchLogin;