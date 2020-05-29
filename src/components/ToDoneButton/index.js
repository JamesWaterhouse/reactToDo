import React from 'react';
import Api from '/Users/academy/sites/academyServer/html/reacttodo/src/apiUrl.js'

export class ToDoneButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: null,
            id: this.props.id
        };
    }

    handleClick = () => {
        fetch(Api + '/toDone/' + this.state.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
        })
        .then(response => response.json());
        window.location.reload()
    }

    render() {
        return ( 
            <button onClick = {
                this.handleClick
            } >
            Done 
            </button>
        )
    }
}