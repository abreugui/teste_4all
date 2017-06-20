import React from 'react';
import Request from '../../Services';
import './MessageList.less';

import Message from '../Message';

class MessageList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      message: ''
    }
    this.getItemChat = this.getItemChat.bind(this);
    this.onChange = this.onChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    Request.getMessage()
      .then((res)=>{
        console.log('message', res.data);
        this.setState({
          data: res.data
        })
      })
      .catch((err)=>{
        console.log(err.data);
      });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  getItemChat(item, i) {
    return (
      <Message
        key={i}
        portrait={item.portrait}
        userName={item.userName}
        message={item.message}
        time={item.time}
        isLeft={item.displayPortraitLeft}

      />
    )
  }

  sendMessage(userName, message, time) {
    let newData = this.state.data.slice();

    newData.push({
      userName: userName,
      message: message,
      time: time,
      isLeft: true,
    });

    Request.setMessage(userName, message, time);

    this.setState({
      data: newData,
      message: '',
    });
  }

  render() {
    return (
      <div>
        <div className="bar">
          <div className="message">
            <ul className="chat">
              {this.state.data.map(this.getItemChat)}
            </ul>
          </div>
        </div>
        <div className="footerMessage">
        <input name="message" type="text" value={this.state.message} onChange={this.onChange} placeholder="Type your message here..." className="inputChat"/>
          <button className="buttonChat" onClick={()=>{ this.sendMessage('Guilherme', this.state.message, '1 min ago') }}>Send</button>
        </div>
      </div>
    );
  }
}

export default MessageList;
