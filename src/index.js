import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.less'

import WidgetsList from './Components/WidgetsList';
import Graph from './Components/Graph';

ReactDOM.render(
  <div>
    <WidgetsList />
    <Graph />
  </div>  
  , document.getElementById('app')
);
