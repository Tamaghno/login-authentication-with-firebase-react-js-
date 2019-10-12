import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import fire from './config/fire';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
       this.login=this.login.bind(this);
       this.handleChange=this.handleChange.bind(this);
       this.signup=this.signup.bind(this);
    }

login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {console.log(error);});
}

signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {        
    }).then((u)=>{console.log(u)}).catch((error)=>{console.log(error);})
}

handleChange(e){
    this.setState({[e.target.name]: e.target.value});
    }
    
    render() {
        
        return (
            <div>
            <h1>login form</h1>

            <form>
               <input type="email" placeholder="email here" name="email" value={this.state.email} onChange={this.handleChange}/>
               <br/>
               <input type="password" placeholder="password here" name="password" value={this.state.password} onChange={this.handleChange}/>
               <br/>
               <button type="submit" onClick={this.login}>login</button>
               <button onClick={this.signup}>signup</button>
            </form>
                
            </div>
        );
    }
}
