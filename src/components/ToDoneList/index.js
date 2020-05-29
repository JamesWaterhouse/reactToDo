import React from 'react';
import {Title} from '../Title';
import {ToDoneList} from '../ToDoneTaskList';
import {DeleteDone} from '../ToDoneDeleteButton'


export class ToDones extends React.Component {

  render() {
    return (
        <div className="todo">
          <Title title= 'To Done!' />
          <ToDoneList />
          <DeleteDone />
        </div>
    );
  }
}
