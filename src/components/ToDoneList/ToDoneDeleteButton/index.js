import React from 'react';
import Api from '/Users/academy/sites/academyServer/html/reacttodo/src/apiUrl.js';

export class DeleteDone extends React.Component {

    handleClick = () => {
       fetch(Api + '/deleteDone', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(results => {
            return results.json();
        })
        .then(response => response.json());
        window.location.reload()
    }

    render() {
        return ( 
            <button 
                class='deleteAll'
                onClick = {
                this.handleClick
            } >
            Delete All ToDones
            </button>
        )
    }
}
