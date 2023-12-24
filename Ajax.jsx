import axios from "axios";

import React,{ useState } from "react";

export default function F1()
{
    let [firstName,setFirst]=useState("");
        let[lastName,setLast]=useState("");

        let[avatar,setImg]=useState("");

    const handler=()=>
    {
        let promise=axios.get("https://reqres.in/api/users/2")
        promise.then((response)=>{
            console.log(promise);
            setFirst(response.data.data.first_name)
            setLast(response.data.data.last_name)
            setImg(response.data.data.avatar)
        })

        promise.catch((reject)=>{
            console.log("something wrong",reject)
        })
    }

    return(


        <>
        <h1>This is Ajax Calling the Api</h1>
        <input type="button" value="GET" onClick={handler}/>

      
            <p>{firstName} {lastName}</p>
            <img src={avatar} width={300} height={300} alt="img not found"></img>

        
        </>
    )
}