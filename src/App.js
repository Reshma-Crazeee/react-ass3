
import './App.css';
import { Component } from 'react';
import FormSubmit from './components/Form';



export default class Form extends Component{
  state={
    feedback:[],
    name:"",
    department:"",
    rating:"",
    back:false
  }

  updateName=(e)=>{
    const name = e.target.value;
    this.setState({name})
  }

  updateDepart=(e)=>{
    const department = e.target.value;
    this.setState({department})
  }

  updateRate=(e)=>{
    const rating = e.target.value;
    this.setState({rating})
  }

  backButton=()=>{
    this.setState({back:!this.state.back})
  }

  card=(e)=>{
    e.preventDefault();
    const submitValue = [...this.state.feedback];
    const SubmitForm = {id:submitValue.length+1, name:this.state.name, department:this.state.department, rating:this.state.rating};
    submitValue.push(SubmitForm);
    this.setState({feedback:submitValue,back:true, name:"", department:"", rating:""})
  }

  render(){

    return(
      <div>
        {this.state.back?<FormSubmit entry={this.state.feedback} backButton={this.backButton}/>:
        <div>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>
        <div>
            <label>Name :</label>
            <input type="text" name="name" value={this.state.name} onChange={this.updateName}/>
          </div>
          <div>
            <label>Department :</label>
            <input type="text" name="depart" value={this.state.department} onChange={this.updateDepart}/>
          </div>
          <div>
            <label>Rating :</label>
            <input type="number" name="rate" value={this.state.rating} onChange={this.updateRate}/>
          </div>
          <button onClick={this.card} >Submit</button>
        </form>
        </div>
      }
      </div>
    )
  }
}