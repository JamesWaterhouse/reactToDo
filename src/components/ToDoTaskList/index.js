import React from 'react';
import {ToDoTasks} from './ToDoTask'

export class ToDoList extends React.Component {

    render() {
      return (
          <div className="taskList">
            <ToDoTasks />
          </div>
      );
    }
  }

