import React from 'react';
import {Component} from 'react';
import './style.css'

class App extends Component{
constructor()
{
    super();
this.state={
    name: " ",
    password: " ",
    nameError: "",
    passwordError: ""
}
}
valid(){
    if(!this.state.name.includes("@") && this.state.password.length<5){
        this.setState({nameError:"Invalid Name", passwordError:"Character  Should be < 5"})
    }
   else if(!this.state.name.includes("@")){
        this.setState({nameError:"Invalid Name"})
    }
    else if(this.state.password.length<5){
        this.setState({ passwordError:" Character  Should be < 5"})
    }
    else{
        return true;
    }
};

submit(){
    if(this.valid()){
        this.setState({nameError:" ", passwordError:""})
        alert("Form has been Successfuly Submitted");
    } 
}

render(){
return (
    <div className="validate-form">
    <h1>Validate Form</h1>
    <input className="input-name" type= 'text' onChange={(event)=>{this.setState({name:event.target.value})}} />
    <p className="para">{this.state.nameError}</p>
    <input className="input-pass" type= 'password' onChange={(event)=>{this.setState({password:event.target.value})}} />
    <p className="para1">{this.state.passwordError}</p>
    <button onClick={()=>this.submit()}>Submit</button>
    </div>

)
}
 }
export default App;