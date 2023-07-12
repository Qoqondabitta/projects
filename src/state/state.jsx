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
            students: database,
            isDark: false,
            language: 'uz'
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
        const onCheckbox=()=>{
            this.setState({
                isDark: !this.state.isDark
            })
        }
        const selectLanguage=({target:{value}})=>{
            this.setState({language: value})
        }
        const sayHello=(tongue)=>{
                return tongue==='uz'?"Assalomu alekum":tongue==='ru'?'Privet':tongue==='en'?'Hello':'Select'
        }
        return(
            <div style={
                {
                    position: "absolute",
                    top: 0,
                    // bottom: 0,
                    right: 0,
                    left: 0,
                    background: this.state.isDark?"black":'white',
                    color: this.state.isDark?"white":"black"
                }
            }>
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
                <input type="checkbox" onClick={onCheckbox} />{""}
                <span>{this.state.isDark?'Tungi Rejim':'Kungi Rejim'}</span>
                <select name="" id="" onChange={selectLanguage}>
                    <option value="uz">Uzbek</option>
                    <option value="ru">Russian</option>
                    <option value="en">English</option>
                </select>
                <h2>{sayHello(this.state.language)}</h2>
            </div>
            )
    }
}

export default StateLesson