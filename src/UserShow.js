import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }

    componentDidMount(){
        const id = this.props.match.parms.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response =>{
                const user = response.data
                this.setState({ user })
            })
            .catch(err =>{
                console.log(err)
            })
    
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response =>{
                const posts =response.data
                console.log('post info')
                this.setState({ posts })
            })
            .catch(err =>{
                console.log(err)
            })
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <h2>User Show - {this.props.match.parms.id}</h2>
                <p>username - {this.state.user.username} </p>
                <p>email - {this.state.user.email} </p>

                <Link to='/users'>back</Link>
            </div>
        )
    }
}

export default UserShow