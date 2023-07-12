import React from "react"
let database = [
    {id:1, surname:'Turgunaliev', name:'Abdulakhad'},
    {id:2, surname:'Leo', name:'Messi'},
    {id:3, surname:'Cristiano', name:'Ronaldo'},
    {id:4, surname:'Luis', name:'Suarez'},
    {id:5, surname:'Carles', name:'Puyol'},
    {id:6, surname:'Sergio', name:'Ramos'},
    {id:7, surname:'Andres', name:'Inesta'},
]
export class StateLesson extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 1,
            typedValue: '',
            surname:'',
            firstName:'',
            students: database
        }
    }
    render(){
        const onChangeInfo=({target})=>{
            this.setState({[target.placeholder]: target.value})
        }
        const plus = ()=>{
            this.setState({count: this.state.count+1})
        }
        const minus = ()=>{
            this.setState({count: this.state.count-1})
        }
        const getTypedValue=({target:{value}})=>{
            this.setState({typedValue: value})
        }
        const onSearch=({target:{value}})=>{
            let filtered= database.filter(student=> student.name.toLowerCase().includes(value.toLowerCase()) )
            this.setState({students: filtered})
        }
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h1>{this.state.typedValue}</h1>
                <button onClick={plus}>Plus</button>
                <button onClick={minus}>Minus</button>
                <h1>{this.state.name}</h1>
                <h1>{this.state.surname}</h1>
                <input type="text" name="" id="" onChange={getTypedValue} />
                <input type="text" placeholder="name" onChange={onChangeInfo} />
                <input type="text" placeholder="surname" onChange={onChangeInfo} />
                <input type="text" placeholder="find" onChange={onSearch} />
                {this.state.students.map(v => <h1>{v.id}. {v.surname} {v.name}</h1>)}
            </div>
            )
    }
}

export default StateLesson