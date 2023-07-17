import React from "react";
let database=[
    {id:1, name: "Turgunaliev abdulakhad", age: 17, trophy: 1, image:"data:image/jpeg;base64,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"},
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
                {this.state.players.map(({id, name, age, trophy})=> 
                    <div style={{display: "flex",}}>                    
                    <image src="image"></image>
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