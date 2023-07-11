import React from "react"


export class Navbar extends React.Component{
    render(){
        console.log(this);
        // const {
        //     data:{name, title}
        // } = this.props
        return<div>
            <div className="fruits">                
            <h3>{this.props.data[0]}</h3>
            <h3>{this.props.data[1]}</h3>
            <h3>{this.props.data[2]}</h3>
            </div>
        </div>
    }
}