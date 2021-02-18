import React from 'react'
import axios from 'axios';


class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[
               
            ]
            
        }
        this.handleAddUser = this.handleAddUser.bind(this)
        this.handleRemoveUser = this.handleRemoveUser.bind(this)
    }
        componentDidMount(){
            // fetch('https://jsonplaceholder.typicode.com/users')
            // .then(response =>{
            //     return response.json
            // })
            // .then(users => {
            //     this.setState({ users })
            // })

            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response =>{
                    const users = response.data
                    this.setState({ users })
                })
        }    

        handleAddUser(user){
            this.setState(prevState => ({
                // users: [].concat(prevState.users, user)
                users: [...prevState.users, user]
            }))
        }

        handleRemoveUser(id){
            console.log('remove',id)
            this.setState(prevState =>({
                users:prevState.users.filter(user =>user.id!==id)
            }))
        }

        //this.setState(prevState => {
        //        return {
        //            users: prevState.users.filter(user =>user.id!==id)
        //        }
        //    })

    render(){
        return (
            <div>
                <h2>Listing Users - {this.state.users.length}</h2>
                <ul>
                    {
                        this.state.users.map(user => {
                            return <UserItem
                                            key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            email={user.email}
                                            handleRemoveUser={this.handleRemoveUser}
                                            />
                        })
                    }
                </ul>
                <UserForm handleAddUser={this.handleAddUser} />
            </div>
        )
    }
}


function UserItem(props){
    return(
        <li>{props.name} <button onClick={()=>{
            const confirmRemove = window.prompt('Enter name to remove ...')
            if(confirmRemove == props.name){
                props.handleRemoveUser(props.id)

            }
        }}>remove </button></li>
    )
}

class UserForm extends React.Component{
    constructor(){
        super()
        this.state= {
            name:'',
            email:'',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        // console.log(e.target,e.target.name,e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        const user = {
            id:Number(new Date()),
            name:this.state.name,
            email:this.state.email
        }
        console.log(user)
        this.props.handleAddUser(user)
        this.setState({name:'',email:''})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input 
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange}
                            name='name'
                            />
                    </label><br/>
                    <label>
                        Email
                        <input 
                            type='text'
                            value={this.state.email}
                            onChange={this.handleChange}
                            name='email'
                            />
                    </label><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}


export default Users