import React, { Component } from 'react'
import fire from './config/fire'

export default class Home extends Component {
   constructor(props){
       super(props);
       this.logout=this.logout.bind(this);
   }
   
   logout(){
       fire.auth().signOut();
   }
   
   
   
   
    render() {
        return (
            <div>
            you are home
            <br />
            <button onClick={this.logout}>logout</button>    
            </div>
        )
    }
}
