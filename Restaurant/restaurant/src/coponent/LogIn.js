import React, { Component } from 'react';
import Navbarmenu from "./Navbar"
import {
    Redirect
  } from 'react-router-dom'
  


class LogIn extends Component {
    constructor(){
        super();
        this.state={
            name: '',
            password:''
 
        }
    }

    log(){
        console.log(this.state)
        
        fetch('http://localhost:3000/login?q=' + this.state.name).then((data) => {
            data.json().then((resp)=>{
                console.log("resp",resp)
                if(resp.length>0)
                {
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.log(this.props.history.push(''))
                
                }
                else
                {
                    alert("Enter cheack username or password")
                }
            })
        })
    }

    render() {
        return (
            <div>
                <Navbarmenu />
            
                <input type="text" placeholder="Id or Number" name="user" onChange={(event)=> this.setState({name:event.target.value})} /> <br /> <br />
                <input type="password" placeholder="Password" name="pass" onChange={(event)=> this.setState({password:event.target.value})} /> <br /> <br />
                <button onClick={()=>{this.log()}}>LogIN</button>
            </div>
        );
    }
}

export default LogIn;
