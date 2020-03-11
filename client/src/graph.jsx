import React from "react";
let d3 = require("d3");
let jsdom = require("jsdom");
let document = jsdom.jsdom();
let svg = d3.select(document.body).append("svg");

const Graph = props => {
  return <div></div>;
};

export default Graph;
