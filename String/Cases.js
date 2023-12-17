import React from "react";

export default class Case extends React.Component
{
    constructor()
    {
        super();
        this.state=({ str:"", orginal:"",rev:""});
    }

    revhandler=(event)=>
    {
        let status=event.target.checked;
       if(status)
       {
            let str1=this.state.str;

            let rev="";

            for(let i=str1.length-1;i>=0;i--)
            {
                rev+=str1.charAt(i);
            }
            console.log(rev)

            this.setState({str:rev})
       }
       else{
        this.setState({str:this.state.orginal})
       }

    }


    handler=(event)=>
    {
        let x= event.target.id;

       switch(x)
       {
            case "up":{
                let s=this.state.str
                let s1=s.toUpperCase()
                this.setState({str:s1})
                break;
            }

            case "low":{
                
                let s=this.state.str
                let s1=s.toLowerCase()
                this.setState({str:""})
                break;
            }

            case "tit":{
                
                let s=this.state.str
                let s1=s.toLowerCase()
                this.setState({str:""})
                break;
            }

            
       }
    }

    render()
    {
        return(
            <div>
                  <br />  <br />  <br />
            Enter the string:<input type="text" onBlur={(event)=>{
                console.log(event.target.value)

                this.setState({orginal:event.target.value,str:event.target.value})
            }

            
        }/>
            
            <br />  <br /> 

            Reverse:<input type="radio" name="same"  onClick={this.revhandler}/> <br /> 
          <h3> Reverse String is={this.state.str}</h3>


            Convert To UpperCase:<input type="radio" name="same" id="up" onClick={this.handler}/>
            Convert To Lower:<input type="radio" name="same" id="low" onClick={this.handler}/>
            Convert To Title:<input type="radio" name="same" id="tit" onClick={this.handler}/>

            <h4>Generated String is ={this.state.str}</h4>
            
            </div>


        )
    }
}  