import React from 'react'
import Child from './Child.js'


function Parent(props){
    return(
        <div>
            <h1>Parent component</h1>
            <Child name='karan' />
            <Child name='arjun' />
            <Child name='Ram' />
        </div>
    )

}

export default Parent