import { Component } from 'react';

function Extract(props){
    return(
        <div>
            <div className="second">
            Name :{props.item.name} | Department : {props.item.department} | Rating : {props.item.rating}
            </div>
        </div>
    )
}
export default class FormSubmit extends Component{
    render(){
        return(
            <div>
                <h1>EMPLOYEE FEEDBACK DATA</h1>
                <h3>
                    {this.props.entry.map((item)=>{
                        return <Extract key={item.id} item={item}/>
                    })}
                </h3>
                    <button onClick={this.props.backButton}>Go Back</button>
            </div>
        )
    }
}