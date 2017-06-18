import React from 'react';
import './Widgets.less';

class Widgets extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="widget">
        <p className="firstP">{this.props.number}</p>
        <p className="secondP">{this.props.name}</p>
      </div>
    );
  }
}

export default Widgets;
