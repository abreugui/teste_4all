import React from 'react';

//Compoents
import WidgetsList from './WidgetsList';
import Graph from './Graph';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <WidgetsList />
        <Graph />
      </div>
    );
  }
}

export default App;
