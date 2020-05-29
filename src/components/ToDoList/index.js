import React from 'react';
import {ToDoTitle} from '../ToDoTitle';
import {ToDoList} from '../ToDoTaskList';
import {AddToDo} from '../ToDoAdd';

export class ToDos extends React.Component {

  render() {
    return (
        <div className="todo">
          <ToDoTitle />
          <ToDoList />
          <AddToDo />
        </div>
    );
  }
}
