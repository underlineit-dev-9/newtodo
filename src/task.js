// import React,{useRef} from "react";
import React, { Component } from 'react'

export default class Task extends Component {
  state = {
    canEdit:false,
    editedTask:this.props.task
  }
  render() {
    return (
      <div>
      {
      <div>{
        this.state.canEdit ? (
          <div>
            <input
            type='text'
            value={this.editedTask}
            onChange={(e) => this.setState({
              editedTask:e.target.value
            })} 
              data-testid={'EditInputId'}
            />
            <button
            onClick={()=>{this.props.submitHandler(this.state.editedTask,this.props.index);
            this.setState({
              canEdit:false
            })
            }}
            data-testid={'submit-button'}>

            Submit
            </button>

            <button
            onClick={()=>{this.setState({
              editedTask:this.props.task
            })
            this.setState({
              canEdit:false
            })
            }}
            data-testid="cancel-button"
            >cancel</button>
        </div>
        )
            :
            (<h5>
              {this.props.index+1} .{this.props.task}
            </h5>
            )
      }
      <button 
      onClick={() => this.props.deleteHandler(this.props.index)}
      data-testid={`delete-button-${this.props.index}`}
      >
        Delete
      </button>
      <button
      onClick={()=>this.setState({
        canEdit:true
      })}
      data-testid={'edit-button'}>
        Edit
      </button>
      </div>
    }
      </div>
    )
  }
}




