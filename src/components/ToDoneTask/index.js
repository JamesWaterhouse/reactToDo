import React from 'react';
import Api from '/Users/academy/sites/academyServer/html/reacttodo/src/apiUrl.js'

export class ToDoneTasks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: []
      };
      this.getToDones();
    }

    getToDones = () => {
      fetch(Api + '/task?done=1')
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({tasks: data.data});
        })
    }

    outputToDones = () => {
        if(this.state.tasks) {  
            let tasks = this.state.tasks.map((toDone) => {
                return (<div key={toDone.Task}>
                    {toDone.Task}
                     </div>
                )
            })
            return tasks
        } 
        else {
            let message = "No Tasks Completed"
            return message
        }
    }

    render() {
      return (
        <ul>
          <li>
            {this.outputToDones()}
          </li>
        </ul>
      );
    }
  }