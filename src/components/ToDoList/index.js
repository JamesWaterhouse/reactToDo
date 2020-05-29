import React from 'react';
import {ToDoTitle} from './ToDoTitle';
import {ToDoList} from './ToDoList';
import {AddToDo} from './AddToDo';

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
