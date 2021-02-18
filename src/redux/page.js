import React from 'react'
import store from '../index.js'
import { increment } from './actions/increment.js'
import { decrement } from './actions/decrement.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return { count: state.count }
}



function Page(props) {
    return (
        <div>
            <h1>This is Redux page</h1>
            <h1>Redux Counter - {props.count}</h1>
            <Btn />

        </div>
    )
}

function Btn() {
    return (
        <div>
            <button onClick={() => {
                store.dispatch(increment())
            }}>UP</button>
            <button onClick={() => {
                store.dispatch(decrement())
            }}>DOWN</button>
        </div>

    )
}
export default connect(mapStateToProps)(Page)


