import React from 'react';
import Request from '../../Services';
import './WidgetsList.less';
import {FaShoppingBag, FaCommentO, FaTasks, FaGroup} from 'react-icons/lib/fa/';

//Components
import Widgets from '../Widgets';

class WidgetsList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    Request.getWidgets()
      .then((res)=>{
        this.setState({
          data: res.data
        })
      })
      .catch((err)=>{
        console.log(err.data);
      });
  }
  render() {
    console.log('state', this.state.data);
    return (
      <div className="list">        
        <div className="wid1">
          <div className="corblue"><div className="icon"><FaShoppingBag className="iconsize"/></div></div>
          <div className="fundoWidget">
            <Widgets name="Comments" number={this.state.data.comments}/>
          </div>
        </div>
        <div className="wid2">
          <div className="coryellow"><div className="icon"><FaCommentO className="iconsize"/></div></div>
          <div className="fundoWidget">
          <Widgets name="New Orders" number={this.state.data.newOrders}/>
          </div>
        </div>
        <div className="wid3">
          <div className="corgreen"><div className="icon"><FaGroup className="iconsize"/></div></div>
          <div className="fundoWidget">
          <Widgets name="NewUsers" number={this.state.data.newUsers}/>
        </div>
        </div>
        <div className="wid4">
          <div className="corred"><div className="icon"><FaTasks className="iconsize"/></div></div>
          <div className="fundoWidget">
          <Widgets name="Page Views" number={this.state.data.pageViews}/>
        </div>
        </div>
      </div>
    );
  }
}

export default WidgetsList;
