import React,{Component} from 'react';
import './index.css';
import axios from 'axios';
export default class SubDomain extends Component
{   state={
    input:'',
    text:'',
    registerVisible:false
    }
    //data=>this.setState({text:data[0].email})
    handleChange = e=>
    {        
        this.setState({input:e.target.value,text:''});        
    }
    handleButton = e=>
    {    
        e.preventDefault();
        localStorage.setItem('domain',this.state.input);
      if(this.state.input!==''&&this.state.input!==' ')
      { axios.get('https://app.api.convin.ai/domains/availability',{params:{name:this.state.input}})        
        .then(res=>{            
           const {data} = res;
            console.log(data.status);
            let message;
            if(data.available)             
              {message='Domain is available'          
              this.setState({registerVisible:true})  }          
            else            
            {
                message='Oops! domain not available';
            }
            this.setState({text:message})
        }
            )
        .catch(err=>console.log(err))   
    }
    else
    {
        this.setState({text:"Please enter a domain name to search"});
    }
}
    handleRegister=(e)=>
    {
        e.preventDefault();        
       let domain = localStorage.getItem('domain')
       console.log(domain)       
        axios.post('https://app.api.convin.ai/domains/',{name:domain})        
        .then(res=>{
            const {data} = res
        if(data.status==="success")
        {
            this.setState({text:data.status});            
            this.props.history.push('/signup');
        }
        else
        {
            this.setState({text:data.name})
        }
        
         
        })
    }
    render()
    {
        return <div className="d-flex justify-content-center">
            <div className="px-0 py-4 form-container bg-light col-lg-4">            
            <h5 className="text-center"><u>Search Domain</u></h5>
                <form className="p-4 mt-4 text-center">     
                <input className="input text-center" placeholder="enter the domain to be searched" onChange={this.handleChange}/>   
                <p className="text-danger">{this.state.text}</p>                          
                    <button className="btn btn-success" onClick={this.handleButton}>Check Availability</button>
                   { this.state.registerVisible?<button className="btn btn-success" onClick={this.handleRegister}>Register domain</button>:null}
                </form>
            </div>
        </div>
    }
}