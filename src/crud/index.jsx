import React from "react";
let database=[
    {id:1, name: "Turgunaliev abdulakhad", age: 17, trophy: 1},
    {id:2, name: "Lionel Messi", age:36, trophy: 44},
    {id:3, name: "Junior Neymar", age:31, trophy:20},
    {id:4, name: "Cristiano Ronaldo", age:39, trophy:27},
    {id:5, name: "Carlos Puyol", age:50, trophy:18},
    {id:6, name: "Ronaldinho", age:44, trophy:30},
    {id:7, name: "Marko Reus", age:32, trophy:0},
]

let football = database;
class Crud extends React.Component {
    constructor(p){
        super(p)
        this.state={
            players: football,
            sortType: 'Name', 
            newName: '',
            newAge: '',
            studentId : null,
        }
    };
    render(){
        const sell=(id)=>{
            football = football.filter(player=>player.id!==id)
            this.setState({players:football})
        }
        const onPlayer=({target:{value}})=>{
            let  editPlayer = football.filter((player)=>player.name.toLowerCase().includes(value.toLowerCase()))
            this.setState({
                players: editPlayer
            })
        }
        const defineBest=({target:{value}})=>{
            if(value==='name'){
                let res = football.sort((a, b)=>a.name.localeCompare(b.name))
                this.setState({
                    sortType: res
                })
            } else if(value==="age"){
                let result = football.sort((a, b)=>b.age-a.age)
                this.setState({
                    sortType: result
                })
            } else if(value==='trophy'){
                let rest = football.sort((a, b)=>b.trophy-a.trophy)
                this.setState({
                    sortType: rest
                })
            }
        }
        const signNewPlayerName=({target:{value}})=>{
            this.setState({
                newName: value
            })    
        }
        const signNewPlayerAge=({target:{value}})=>{
            this.setState({
                newAge: value
            })    
        }
        const signContract=()=>{
            let addNewPlayer =  [...football, {id:8, name: this.state.newName, age: this.state.newAge, trophy:0 }]
            this.setState({
                players: addNewPlayer
            })
        }
        return(
            <div>
                <h1>CRUD Component</h1>
                <div className="find">
                    <input type="text" onChange={onPlayer} />
                </div>
                <div className="sort">
                    <select name="" id="" onChange={defineBest} >
                        <option value="name">Name</option>
                        <option value="age">Age</option>
                        <option value="trophy">Trophy</option>
                    </select>
                    <button onClick={defineBest}>Categorise Players</button>
                <div className="add">
                    <input type="text" value={this.state.newName} onChange={signNewPlayerName} />
                    <input type="text" value={this.state.newAge} onChange={signNewPlayerAge} />
                    <button onClick={()=>{
                        signContract();
                        this.setState({newAge:'', newName:''})
                    }}>Sign</button>
                </div>
                </div>
                {this.state.players.map(({id, name, age, trophy})=> 
                    <h1>
                        {id}.
                        {id === this.state.studentId?<input type="text"  defaultValue={name}/> : name} 
                        is {id===this.state.studentId?<input type="text" defaultValue={age} /> : age} 
                        and has {id===this.state.studentId?<input type="text" defaultValue={trophy} /> : trophy}  trophies
                        <button onClick={()=>sell(id)}>Sell</button>
                        {this.state.studentId?<span><button>Save</button><button>Cancel</button></span>:<button onClick={()=>this.setState({studentId:id })}>Edit</button>}

                    </h1> )}
            </div>
        )
    }
}

export default Crud