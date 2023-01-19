import React, { Component } from "react";
import _ from "lodash";
import Task from "./task";
export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userName: "Sai kumar",
  //     todoItems: ["task 1", "task 2", "task 3", "task 4"],
  //   };
  // }
  state = {
    todoTasks: ["task 1", "task 2", "task 3", "task 4"],
    userName: "Sai kumar k ",
    newTask:'',
    

  };
  // changeStateData =()=>{
  //   this.setState({
  //     userName:this.state.userName === 'Sai kumar' ? 'sidhu' :'Sai kumar',
  //   })
  // }
  deleteHandler(index){

    const tempArray = _.remove(this.state.todoTasks,(task)=>{
      return this.state.todoTasks.indexOf(task)!==index;
    });
    this.setState({
      todoTasks:tempArray
    })


  }
  submitHandler (newTask,index){
    this.setState({
      todoTasks:this.state.todoTasks.map((task,i)=>{
        if(i!==index){
          return task;
        }
        return newTask
      })
    })
  }

  render = () => (
    <div>
      <center>
        <h3> To Do Management System</h3>
        <input 
        type='text'
        placeholder='Enter your tasks'
        value={this.state.newTask}
        onChange={(e)=>this.setState({
          newTask:e.target.value
          
        })}/>
        <button 
        type="button"
        onClick={() =>{
          this.setState({
            todoTasks:_.concat(this.state.todoTasks,this.state.newTask)
          })
          this.setState({
            newTask:''
          })
        }}>
        Add
        </button>
        <p>{this.state.todoTasks}</p>
        <div>hi
        {this.state.todoTasks.forEach((task)=>{
          <div><Task todoTasks={task}
            deleteHandler={this.deleteHandler}
            submitHandler={this.submitHandler}
          />
          </div>

        })
        }
        
        </div>
      </center>
    </div>
  );
}
