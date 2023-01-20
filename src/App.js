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
  deleteHandler(tasks,index){
    console.log("line in dh")
    const tempArray = _.remove(tasks,(task)=>{
      return tasks.indexOf(task)!==index;
    });
    console.log(tempArray,"tempArray")
    console.log("setState before line ")
    this.setState({
      todoTasks:tempArray
    })


  }
  submitHandler (newTask,index){
    console.log(`newTask : ${newTask} index: ${index}`)
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
          
        })}
        data-testid='inputId'/>
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
        <div>{this.state.todoTasks.map((task,index) =><Task todoTasks={task}
        deleteHandler={this.deleteHandler}
        submitHandler={this.submitHandler}
        tasks={this.state.todoTasks}
        task={task}
        index={index}
      />)}</div> 

      </center>
    </div>
  );
}
