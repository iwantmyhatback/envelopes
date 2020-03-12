import React from "react";
import * as d3 from "d3";


class Graph extends React.Component {

  componentDidMount() {
    this.drawGraph();
  }

  drawGraph() {

    var data = [
      {name: "utilities", spent: 50},
      {name: "rent", spent: 700},
      {name: "groceries", spent: 150}
    ];

    var svg = d3.select("svg");

    var margin = 100;
    var width = svg.attr("width") - 2*margin;
    var height = svg.attr("height") - 2*margin;
    
    var xScale = d3.scaleBand().range([0, width]).padding(0.4);
    var yScale = d3.scaleLinear().range([height, 0]);

    xScale.domain(data.map((cat) => {
      return cat.name;
    }));
    yScale.domain([0, d3.max(data, (cat) => {return cat.spent})]);

    var g = svg.append("g")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(0," + margin + ")");

    g.append("g")
      .attr("transform", "translate(" + margin + "," + height + ")")
      .call(d3.axisBottom(xScale));
    g.append("g")
      .call(d3.axisLeft(yScale).tickFormat((val) => {
        return "$" + val;
      }).ticks(5))
      .attr("transform", "translate(" + margin + ", 0)");
    g.append("text")
      .attr("x", (width / 2) + (margin / 2))
      .attr("y", 0 - margin / 2)
      .text("Past Spending");

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (cat) => { return xScale(cat.name) + margin; })
      .attr("y", (cat) => { return yScale(cat.spent); })
      .attr("width", xScale.bandwidth())
      .attr("height", (cat) => { return height - yScale(cat.spent); });

  }

  render() {
    return (
    <div id="graph">
      <svg width="800" height="600"></svg>
    </div>
    );
  }

}

export default Graph;
