(function (React,ReactDOM,d3,Victory) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const row = d => {
    d.count = +d.count;
    return d;
  };

  const App = () => {
    const [data, setData] = React.useState([]);
    
    React.useEffect(() => {
      d3.csv('/PoliceKillingsUS.csv', row).then(setData);
    }, []);
    
    return (
      React__default.createElement( Victory.VictoryChart, {
        style: {tickLabels: {fontSize: 120}}, width: '960', height: '500', domainPadding: 50, padding: { top: 10, bottom: 40, left: 140, right: 10 } },
        React__default.createElement( Victory.VictoryBar, { data: data, y: "flee", style:{ data: { fill: "red", width: 1 }}} 
        ))   
        );
  };

  // This is for second graph

  // const App2 = () => {
  //   const [data, setData] = React.useState([]);
    
  //   React.useEffect(() => {
  //     d3.csv('PoliceKillingsUS.csv', row).then(setData);
  //   }, []);
    
  //   return (
  //     React__default.createElement( Victory.VictoryChart, {
  //       style: {tickLabels: {fontSize: 120}}, width: '960', height: '500', domainPadding: 50, padding: { top: 10, bottom: 40, left: 140, right: 10 } },
  //       React__default.createElement( Victory.VictoryBar, { data: data, y: "body_camera", style:{ data: { fill: "black", width: 1 }}} 
  //       ))   
  //       );
  // };

  const rootElement = document.getElementById('root');
  ReactDOM.render(React__default.createElement( App, null ), rootElement);

  // const rootElement2 = document.getElementById('root2');
  // ReactDOM.render(React__default.createElement( App2, null ), rootElement2);

}(React,ReactDOM,d3,Victory));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjc3YgfSBmcm9tICdkMyc7XG5cbmltcG9ydCB7IFZpY3RvcnlCYXIsIFZpY3RvcnlDaGFydCB9IGZyb20gJ1ZpY3RvcnknO1xuXG5jb25zdCByb3cgPSBkID0+IHtcbiAgZC5wb3B1bGF0aW9uID0gK2QucG9wdWxhdGlvbjtcbiAgcmV0dXJuIGQ7XG59O1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY3N2KCdkYXRhLmNzdicsIHJvdykudGhlbihzZXREYXRhKTtcbiAgfSwgW10pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8VmljdG9yeUNoYXJ0XG4gICAgICBzdHlsZT17e3RpY2tMYWJlbHM6IHtmb250U2l6ZTogMTIwfX19XG4gICAgICB3aWR0aD0nOTYwJ1xuICAgICAgaGVpZ2h0PSc1MDAnXG4gICAgICBkb21haW5QYWRkaW5nPXs1MH1cbiAgICAgIHBhZGRpbmc9e3sgdG9wOiAxMCwgYm90dG9tOiA0MCwgbGVmdDogODAsIHJpZ2h0OiAxMCB9fVxuICAgID5cbiAgICAgIDxWaWN0b3J5QmFyIGRhdGE9e2RhdGF9IHg9XCJjb3VudHJ5XCIgeT1cInBvcHVsYXRpb25cIiAvPlxuICAgIDwvVmljdG9yeUNoYXJ0PlxuICApO1xufTtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjc3YiLCJSZWFjdCIsIlZpY3RvcnlDaGFydCIsIlZpY3RvcnlCYXIiXSwibWFwcGluZ3MiOiI7Ozs7OztFQU1BLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSTtJQUNmLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxDQUFDO0dBQ1YsQ0FBQzs7RUFFRixNQUFNLEdBQUcsR0FBRyxNQUFNO0lBQ2hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUdBLGNBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7SUFFckNDLGVBQVMsQ0FBQyxNQUFNO01BQ2RDLE1BQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBRVA7TUFDRUMsOEJBQUNDO1FBQ0MsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBRSxFQUNyQyxPQUFNLEtBQUssRUFDWCxRQUFPLEtBQUssRUFDWixlQUFlLEVBQUUsRUFDakIsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFFckRELDhCQUFDRSxzQkFBVyxNQUFNLElBQUssRUFBQyxHQUFFLFNBQVMsRUFBQyxHQUFFLGNBQVksQ0FBRztPQUN4QztNQUNmO0dBQ0gsQ0FBQzs7RUFFRixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3BELFFBQVEsQ0FBQyxNQUFNLENBQUNGLDhCQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQzs7OzsifQ==