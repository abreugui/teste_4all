import React from 'react';
import './Message.less';

// let imagem = require('../../img/img.png');

class Message extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.isLeft) {
         return(
            <li className="clearfix">
                {(this.props.portrait) ? (
                  <img src={this.props.portrait} alt="" className="foto"/>
                ): (
                  <div className="avatar"></div>
                )}
                <div className="chat-body">
                    <div className="header">
                        <strong className="nome">{this.props.userName}</strong>
                        <small className="tempo">{this.props.time}</small>
                    </div>
                    <p className="mensagem">{this.props.message}</p>
                </div>
            </li>
        );
        } else {
            return(
            <li className="clearfix right">
                <div className="chat-body">
                    <div className="header">
                        <strong className="nome">{this.props.userName}</strong>
                        <small className="tempo">{this.props.time}</small>
                    </div>
                    <p className="mensagem">{this.props.message}</p>
                </div>
                {(this.props.portrait) ? (
                  <img src={this.props.portrait} alt="" className="foto right"/>
                ): (
                  <div className="avatar"></div>
                )}
            </li>
        );
        }
    }
}

export default Message;
