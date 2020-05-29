import React from 'react';
import {Title} from '../Title';
import {ToDoList} from '../ToDoTaskList';
import {AddToDo} from '../ToDoAdd';

export class ToDos extends React.Component {

  render() {
    return (
        <div className="todo">
          <Title title= 'To Do' />
          <ToDoList />
          <AddToDo />
        </div>
    );
  }
}
