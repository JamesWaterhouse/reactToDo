import React from 'react';
import {ToDoneTasks} from './ToDoneTask'
// import {ToDoneDeleteButton} from './ToDoneDeleteButton'

export class ToDoneList extends React.Component {

    render() {
      return (
          <div className="todo">
            <ToDoneTasks />
            {/* <ToDoneDeleteButton /> */}
          </div>
      );
    }
  }

