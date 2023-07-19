import React from "react";
import Messi from "../Assets/messi.jpeg"

let database=[
    {id:1, name: "Turgunaliev abdulakhad", age: 17, trophy: 1, image: `${Messi}` },
    {id:2, name: "Lionel Messi", age:36, trophy: 44, image: `${Messi}`},
    {id:3, name: "Junior Neymar", age:31, trophy:20, image: `${Messi}`},
    {id:4, name: "Cristiano Ronaldo", age:39, trophy:27, image: `${Messi}`},
    {id:5, name: "Carlos Puyol", age:50, trophy:18, image: `${Messi}`},
    {id:6, name: "Ronaldinho", age:44, trophy:30, image: `${Messi}`},
    {id:7, name: "Marko Reus", age:32, trophy:0, image: `${Messi}`},
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
            editedName: '',
            editedAge: '',
            editedTrophy:''
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
        const defineBest=()=>{
            let res = football.sort( (a, b) => {
            if(this.state.sortType === 'name') return a.name.localeCompare(b.name)
            else if(this.state.sortType==="age") return b.age-a.age;
            else if(this.state.sortType==="trophy") return b.trophy-a.trophy;
        });
            this.setState({
                players: res
            })
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
            football =  [...football, {id: eval(`${football.at(-1).id}+1`), name: this.state.newName, age: this.state.newAge, trophy:0 }]
            this.setState({
                players: football
            })
        }
        const saveChanges = (id)=>{
            football = football.map((S)=>S.id===id?{...S, name: this.state.editedName, age: this.state.editedAge, trophy: this.state.editedTrophy}:S)
            this.setState({players:football, studentId:null})
        }
        return(
            <div>
                <h1>CRUD Component</h1>
                <div className="find">
                    <input type="text" onChange={onPlayer} />
                </div>
                <div className="sort">
                    <select name="" id="" onChange={({target:{value}})=>this.setState({sortType:value})} >
                        <option value="name">name</option>
                        <option value="age">age</option>
                        <option value="trophy">trophy</option>
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
                {this.state.players.map(({id, name, age, trophy, image})=> 
                    <div style={{display: "flex",}}>                    
                    <img src={image} />
                    <h1>
                        {id}.
                        {id === this.state.studentId?<input type="text"  defaultValue={name} onChange={({target:{value}})=>{this.setState({editedName:value })}} /> : name } is {id===this.state.studentId?<input type="text" defaultValue={age} onChange={({target:{value}})=>{this.setState({editedAge:value})}} /> : age} 
                        and has {id===this.state.studentId?<input type="text" defaultValue={trophy} onChange={({target:{value}})=>{this.setState({editedTrophy:value})}} /> : trophy}  trophies
                        <button onClick={()=>sell(id)}>Sell</button>
                        {this.state.studentId?<span><button onClick={()=>saveChanges(id)}>Save</button><button onClick={()=>{this.setState({studentId:null})}}>Cancel</button></span>:<button onClick={()=>this.setState({studentId:id, editedName: name, editedAge:age, editedTrophy:trophy})}>Edit</button>}

                    </h1>
                    </div> )}
            </div>
        )
    }
}

export default Crud