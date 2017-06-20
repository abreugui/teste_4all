import React from 'react';
import Request from '../../Services';
import './MessageList.less';

import Message from '../Message';

class MessageList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
    this.getItemChat = this.getItemChat.bind(this);
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

  getItemChat(item, i) {
    return (
      <Message 
        key={i}
        image={item.portrait}
        userName={item.userName}
        message={item.message}
        time={item.time}
        isLeft={item.displayPortraitLeft}
        
      />
    )
  }

  render() {
    return (
      <div className="bar">
        <div className="message">
          <ul className="chat">
            {this.state.data.map(this.getItemChat)}
          </ul>
        </div>
      </div>
      
    );
  }
}

export default MessageList;