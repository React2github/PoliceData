(function (React,ReactDOM,d3,Victory) {
    'use strict';
  
    var React__default = 'default' in React ? React['default'] : React;
    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  
    const row = d => {
      d.count = +d.count;
      return d;
    };


const App2 = () => {
    const [data, setData] = React.useState([]);
    
    React.useEffect(() => {
      d3.csv('/PoliceKillingsUS.csv', row).then(setData);
    }, []);
    
    return (
      React__default.createElement( Victory.VictoryChart, {
        style: {tickLabels: {fontSize: 120}}, width: '960', height: '500', domainPadding: 50, padding: { top: 10, bottom: 40, left: 140, right: 10 } },
        React__default.createElement( Victory.VictoryBar, { data: data, y: "body_camera", style:{ data: { fill: "black", width: 1 }}} 
        ))   
        );
  };

  const rootElement2 = document.getElementById('root2');
  ReactDOM.render(React__default.createElement( App2, null ), rootElement2);

}(React,ReactDOM,d3,Victory));