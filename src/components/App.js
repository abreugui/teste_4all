import React from 'react';
import './App.less';
import {FaCommentsO} from 'react-icons/lib/fa/';


//Compoents
import WidgetsList from './WidgetsList';
import Graph from './Graph';
import MessageList from './MessageList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <h2 className="h2dash">Dashboard</h2>
        <WidgetsList />
        <div className="divGraph">
          <p className="pGraph">Site Traffic Overview</p>
          <hr/>
          <Graph />
        </div>
        <div className="divMessage">
          <p className="headMessage"><i className="iconSize"><FaCommentsO /></i> Chat </p>
          <hr/>
          <MessageList />
          <div className="footerMessage">
            <input type="text" placeholder="Type your message here..." className="inputChat"/>
            <button className="buttonChat">Send</button>
          </div>
        </div>
          
      </div>
    );
  }
}

export default App;
