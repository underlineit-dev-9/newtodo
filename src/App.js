import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Sai kumar",
      todoItems: ['task 1','task 2','task 3','task 4']
    };
  }
  // changeStateData =()=>{
  //   this.setState({
  //     userName:this.state.userName === 'Sai kumar' ? 'sidhu' :'Sai kumar',
  //   })
  // }
  
  renderTodos = () =>{
    for (let x of this.state.todoItems){
      (<h5>{x}</h5>)
    }
    
  }
  
  render = () => (
    <div className="continer">
      <div className="row">
        <div className="col-12">
          <h1 className="bg-primary text-white text-center p2">
            {this.state.userName} To Do Management System
            

          </h1>

        </div>
        <h3>tasks</h3>
        <div>{this.state.todoItems}
        {this.renderTodos()}</div>
        </div>
    </div>
  );
}
