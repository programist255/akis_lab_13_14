import React, {Component} from "react";
import './CContent.css'
import jsonData from '../res/text.json'

class CContents extends Component{
    constructor(){
        super()
        this.state = {msg: 'Witaj w React, Klikni tutaj dla wiadomosci'}
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
    }

    changeMsg(){
        this.setState({msg: 'Jestes uczestnikem React'});
    }
    render(){
        const item = [];
        for(let i = 0; i<this.txtData().count; i++){
            let value = this.txtData().text[i];
            item.push(
                <div id={'"div${i+1}"'} className="contentsFlex">
                    <img className="contentsFlexImg" src={'/img/img'+(i+1)+'.png'} alt=""/>
                    <p className="contentsFlexTxt">{value}</p>
                </div>
            )
        }
        return(
            <div className="contentsDivClass">
                {item}
                <h1>{this.state.msg}</h1>
                <button onClick = {()=>this.changeMsg()}>
                    Kliknij, aby poznac
                </button>
            </div>
        )
    }
}
export default CContents;