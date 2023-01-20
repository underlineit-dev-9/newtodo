import React, { Component } from "react";
import _ from "lodash";
import Task from "./task";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Sai kumar",
      todoTasks: ["task 1", "task 2", "task 3", "task 4"],
      newTask: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler(tasks, index) {
    const tempArray = _.remove(tasks, (task) => {
      return tasks.indexOf(task) !== index;
    });

    this.setState({
      todoTasks: tempArray,
    });
  }
  submitHandler(newTask, index) {
    if (newTask === "") {
      alert("you are not allowed to use empty box");
    } else {
      this.setState({
        todoTasks: this.state.todoTasks.map((task, i) => {
          if (i !== index) {
            return task;
          }
          return newTask;
        }),
      });
    }
  }

  render = () => (
    <div>
      <center>
        <h3> To Do Management System</h3>

        <input
          type="text"
          placeholder="Enter your tasks"
          value={this.state.newTask}
          onChange={(e) =>
            this.setState({
              newTask: e.target.value,
            })
          }
          data-testid="inputId"
        />
        <button
          type="button"
          onClick={() => {
            if (this.state.newTask === "") {
              alert("you are not allowed to enter empty box");
            } else {
              this.setState({
                todoTasks: _.concat(this.state.todoTasks, this.state.newTask),
                newTask: "",
              });
            }
          }}
        >
          Add
        </button>
        <div>
          {this.state.todoTasks.map((task, index) => (
            <Task
              todoTasks={task}
              deleteHandler={this.deleteHandler}
              submitHandler={this.submitHandler}
              tasks={this.state.todoTasks}
              task={task}
              key={index}
              index={index}
            />
          ))}
        </div>
      </center>
    </div>
  );
}
