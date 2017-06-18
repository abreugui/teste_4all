import React from 'react';
import LineChart from 'react-chartjs';

class Graph extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <LineChart data={12, 10, 8, 14, 3, 7} options={"Red", "Blue", "Yellow", "Green", "Purple", 
                "Orange"} width="600" height="250" />
            </div>
        );
    }
}