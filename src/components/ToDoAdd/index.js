import React from 'react';
import Api from '/Users/academy/sites/academyServer/html/reacttodo/src/apiUrl.js'

export class AddToDo extends React.Component {

    constructor(props) {
        super(props);
        this.task = React.createRef();
    }

    handleClick = (event) => {
        fetch(Api + '/addTask/' + this.task.current.value, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
        })
        .then(response => response.json())
        .then(data => {
            window.location.reload()
        })
    } 

    render() {
        return (
            <div>
                <h2>Add new task</h2>
                <form>
                    <input ref={this.task} type="text" />
                    <input
                        id='addSubmit'
                        type="button"
                        value="Add"
                        onClick={this.handleClick}
                        />
                </form>
            </div>
        )
    }
}
