import React from "react"
 
export class StateLesson extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 1,
            typedValue: '',
        }
    }
    render(){
        const plus = ()=>{
            this.setState({count: this.state.count+1})
        }
        const minus = ()=>{
            this.setState({count: this.state.count-1})
        }
        const getTypedValue=({target:{value}})=>{
            this.setState({typedValue: value})
        }
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h1>{this.state.typedValue}</h1>
                <button onClick={plus}>Plus</button>
                <button onClick={minus}>Minus</button>
                <input type="text" name="" id="" onChange={getTypedValue} />
            </div>
            )
    }
}

export default StateLesson