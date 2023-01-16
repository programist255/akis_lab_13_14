import React, {Component} from "react";

class CContents extends Component{
    constructor(){
        super()
        this.state = {msg: 'Witaj w React, Klikni tutaj dla wiadomosci'}
    }

    changeMsg(){
        this.setState({msg: 'Jestes uczestnikem React'});
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick = {()=>this.changeMsg()}>
                    Kliknij, aby poznac
                </button>
            </div>
        )
    }
}
export default CContents;