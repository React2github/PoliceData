import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';

import { VictoryBar, VictoryChart } from 'Victory';


const row = d => {
  d.count = +d.count;
  return d;
};

// define count object that holds count for each type of death
var countObj = {};

// count how much each death occurs in list and store in countObj
dataset.forEach(function(d) {
    var death = d.value;
    if(countObj[death] === undefined) {
        countObj[death] = 0;
    } else {
        countObj[death] = countObj[death] + 1;
    }
});
// now store the count in each data member
dataset.forEach(function(d) {
    var death = d.value;
    d.count = countObj[death];
});




const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv('/PoliceKillingsUS.csv', row).then(setData);
  }, []);
  
  return (
    <VictoryChart
      style={{tickLabels: {fontSize: 120},}}
      width='660'
      height='200'
      domainPadding={100}
      padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
    >
      <VictoryBar data={data} x="manner_of_death" y="age"

      />
    </VictoryChart>
  );
};



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);