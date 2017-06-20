import React from 'react';
import Request from '../../Services';
var LineChart = require("react-chartjs").Line;

import './Graph.less';

class Graph extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: []
      }
      this.getLabels = this.getLabels.bind(this);
      this.getValues = this.getValues.bind(this);
  }
  componentDidMount() {
    Request.getGraphData()
    .then((res) => {
      this.setState({ data: res.data })
    })
    .catch((err) => {
      console.log(err.data);
    });
  }
  getLabels(item) {
    return item.month;
  }
  getValues(item) {
    return item.views;
  }
  render() {

    let labels = this.state.data.map(this.getLabels);
    let values = this.state.data.map(this.getValues);

    let data = {
        labels: labels,
        datasets: [{ data: values }]
    };
    let options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    };
    return (
      <div className="graph">
        <LineChart data={data} options={options} width="1300" height="400" />
      </div>
    );
  }
}

export default Graph;
