import React,{Component} from 'react';
import './index.css';
import Button from '../utils/button';
import Input from '../utils/input';
export default class SubDomain extends Component
{   state={
    input:''
    }
    _handleButton = e=>
    {
        console.log(e)
     //fetch().then(res=>res.json).then().catch()   
    } 
    render()
    {
        return <div className="d-flex justify-content-center">
            <div className="px-0 py-4 form-container bg-light col-lg-4">            
            <h5 className="text-center"><u>Search Domain</u></h5>
                <form className="p-4">               
                    <Input placeholder="enter the domain to be searched" onChange={this._handleButton}/>
                    <Button color="success">Check Availability</Button>
                </form>
            </div>
        </div>
    }
}