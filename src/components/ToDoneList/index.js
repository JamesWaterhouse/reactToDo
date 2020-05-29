import React from 'react';
import {ToDoneTitle} from '../ToDoneTitle';
import {ToDoneList} from '../ToDoneTaskList';
import {DeleteDone} from '../ToDoneDeleteButton'


export class ToDones extends React.Component {

  render() {
    return (
        <div className="todo">
          <ToDoneTitle />
          <ToDoneList />
          <DeleteDone />
        </div>
    );
  }
}
