import React, { useState } from "react";

export default function TextField()
{   
    let[original,setOrg]=useState();

    let[str,setStr]=useState();

        const handler=(event)=>{
        let org=document.getElementById("text1").value;
        setOrg(org);



        if(event.target.value=="half")
        {
            let len=org.length/2;

            let res=org.substring(0,len);
            setStr(res);
        }

       else if(event.target.value=="upper")
        {
            let res=org.toUpperCase();
            setStr(res);
        }

        else if(event.target.value=="lower")
        {
            let res=org.toLowerCase();
            setStr(res);
        }
        else if(event.target.value=="reverse")
        {
            let res=org.split("").reverse().join("");
            setStr(res);
        }

       
    }

    


   
    return(
        <><h1>Enter Your String</h1>
        <textarea rows={6} cols={60} id="text1" className="text-light text-center rounded-4 bg-dark lead" ></textarea>
        <div className="text-center my-4" onClick={handler} >

      <button value={"upper"} className="btn btn-primary">
        UpperCase
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp; 

        <button value={"lower"} className="btn btn-secondary">
            LowerCase
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp; 
    

        <button value={"reverse"} className="btn btn-outline-success">
            Reverse
        </button>

        &nbsp;&nbsp;&nbsp;&nbsp; 

        <button value={"half"} className="btn btn-outline-primary">Half-String</button>
        &nbsp;&nbsp;&nbsp;&nbsp; 
     

        </div>
        <br />
        <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
       Original String: &nbsp; <b><p>{original}</p></b>
        &nbsp;&nbsp;&nbsp;&nbsp; 
        Generated String: &nbsp; <b><p>{str}</p></b>
        </div>
        </>
    )
}



