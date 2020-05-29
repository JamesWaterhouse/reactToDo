import React from 'react';
import {ToDoneButton} from '../ToDoneButton'
import Api from '/Users/academy/sites/academyServer/html/reacttodo/src/apiUrl.js'

export class ToDoTasks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: []
      };
      this.getUncompletedToDos();
    }

    getUncompletedToDos = () => {
      fetch(Api + '/task?done=0')
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({tasks: data.data});
        })
    }

    outputToDos = () => {
      if(this.state.tasks) {
        let tasks = this.state.tasks.map((toDo) => {
          const Task = toDo.Task
          const Button = <ToDoneButton id={toDo._id}/>
            return (
            <li key={toDo._id}>
              {Task}
              {Button}
            </li>
            )
        })
        return tasks
      } 
      else {
        let message = "Nothing to do, have a cup of tea"
        return message
      }
    }

    render() {
      return (
        <ul>
            {this.outputToDos()} 
        </ul>
      );
    }
  }