// import React from "react";
// import rd3 from "react-d3-library";
// // import * as d3 from "d3";

// const BarChart = rd3.createBarChart;

// class Graph extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       d3: {
//         dataset: [{ id: null, name: null, now: null, spent: null }],
//         margins: { top: 10, right: 10, bottom: 10, left: 10 },
//         yAxisLabel: "Spent Money",
//         fill: "steelblue",
//         ticks: 10,
//         barClass: "barChart"
//       }
//     };
//   }
//   componentDidMount() {
//     console.log(this.props.node);
//     // this.setState({ d3: this.props.node });
//   }
//   render() {
//     return <div>{<BarChart data={this.state.d3} />}</div>;
//   }
// }

// export default Graph;

// let svg = d3.select(document.getElementById("graph")).append("svg");

// let margin = 200;
// let width = svg.attr("width") - margin;
// let height = svg.attr("height") - margin;
// let xScale = d3
//   .scaleBand()
//   .range([0, width])
//   .padding(0.4);
// let yScale = d3.scaleLinear().range([height, 0]);
// let g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

// d3.json("/graph", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   if (data) {
//     console.log(data);
//   }
//   xScale.domain(data.map(d => d.name));
//   yScale.domain([0, d3.max(data, d => d.spent)]);
//   g.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(xScale));

//   g.append("g")
//     .call(
//       d3
//         .axisLeft(yScale)
//         .tickFormat(d => "$" + d)
//         .ticks(10)
//     )
//     .append("text")
//     .attr("y", 6)
//     .attr("dy", "0.71em")
//     .attr("text-anchor", "end")
//     .text("value");

//   g.selectAll(".bar")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("class", "bar")
//     .attr("x", d => xScale(d.name))
//     .attr("y", d => yScale(d.spent))
//     .attr("width", xScale.bandwidth())
//     .attr("height", d => height - yScale(d.spent));
// });

// const Graph = props => {
//   return (
//     <div id="graph">
//       <svg width="600" height="500"></svg>
//     </div>
//   );
// };
