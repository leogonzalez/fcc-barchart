import * as d3 from 'd3';

d3.select('body')
.on('click',(d) => {
  var url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';
  let data;
  Meteor.call('gdpData',url,(err,res) => {
    console.log(JSON.stringify(res));
  });
});
//
// export default class Chart extends React.Component{
//
//     render(){
//     // this.tryD3();
//     return (
//       <div>
//         <p>Leonardo Gonzalez</p>
//       </div>
//     );
//   }
// }
