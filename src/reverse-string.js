import React from 'react'

    class Texts extends React.Component{
        constructor(props){
            console.log('Constructor')
            super(props)
            this.state = { text: props.txt }
            this.reverse = this.reverse.bind(this) //returns undefined if we do not use bind()

        }
    

    reverse(){
        console.log('Event Handler')
        this.setState((prevstate)=> {
            console.log(prevstate.text)
            var str1 = prevstate.text
            str1 =str1.split('').reverse().join('') 

            return {text:str1}
        })
    }

    render(){
        console.log('Render')
        return (
            <div>
                <h2>{ this.state.text }</h2>
                
                <button onClick={this.reverse}> Reverse</button>
            </div>
        )
    }
}

export default Texts