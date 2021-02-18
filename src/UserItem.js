import React from 'react'
import { Link } from 'react-router-dom'

function UserItem(props){
    return(
        <li>
            <Link to={`users/${props.id}`}>{props.name}</Link>
            <button 
                onClick={() => {
                const confirmRemove= window.prompt('Type the name to remove')
                if(confirmRemove ==props.name){
                    props.handleRemoveUser(props.id)
                }
            }}>
            </button>
        
        </li>

    )
}