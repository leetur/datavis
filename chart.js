// // console.log("Hello world!");
// // console.log("Hahaha");

// // console.log("Hello world!");

// // async function drawLineChart() {
// // console.log("drawLineChart");
// // const data = await d3.json("my_weather_data.json");
// // console.log(data);
// // const yAccessor = d => d.temperatureLow;
// // // const yAccessor_low = d => d.temperatureLow;
// // const dateParser = d3.timeParse("%Y-%m-%d");
// // function xAccesor(d) {
// //       return dateParser(d.date);
// //   }

// // let dimensions = {
// //   width: window.innerWidth*0.9,
// //   height: 400,
// //   margin: {
// //     top: 15,
// //     right: 25,
// //     bottom:40,
// //     left:60,
// //   },
// // }

// // dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
// // dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

// // const wrapper = d3.select("#wrapper");
// // const svg = wrapper.append("svg");
// // svg.attr("width",dimensions.width);
// // svg.attr("height", dimensions.height);

// // const bounds = svg.append("g").style("transform",`translate(${dimensions.margin.left},${dimensions.margin.top})`);
// // // console.log(dimensions);

// // const yScale = d3.scaleLinear()
// //   .domain(d3.extent(data,yAccessor))
// //   .range([dimensions.boundedHeight,0]);

// // const yScale_low = d3.scaleLinear()
// //   .domain(d3.extent(data,yAccessor_low))
// //   .range([dimensions.boundedHeight,0]);

// // const limitTemperatureVal = yScale(32);
// // const limitTemperatureVal_low = yScale_low(32);

// // const limitTemperature = bounds.append("rect")
// //   .attr("x",0)
// //   .attr("width", dimensions.boundedWidth)
// //   .attr("y",limitTemperatureVal)
// // //   .attr("height", dimensions.boundedHeight - limitTemperatureVal)
// //   .attr("height", dimensions.boundedHeight - limitTemperatureVal)
// //   .attr("fill","pink");
// // const limitTemperature_low = bounds.append("rect")
// //   .attr("x",0)
// //   .attr("width", dimensions.boundedWidth)
// //   .attr("y",limitTemperatureVal_low)
// // //   .attr("height", dimensions.boundedHeight - limitTemperatureVal)
// //   .attr("height", dimensions.boundedHeight - limitTemperatureVal_low)
// //   .attr("fill","pink");

// // const xScale = d3.scaleTime()
// //   .domain(d3.extent(data, xAccesor))
// //   .range([0, dimensions.boundedWidth])

// // const lineGenerator = d3.line()
// //   .x(d=>xScale(xAccesor(d)))
// //   .y(d=>yScale(yAccessor(d)))

// // const lineGenerator_low = d3.line()
// //   .x(d=>xScale(xAccesor(d)))
// //   .y(d=>yScale_low(yAccessor_low(d)))

// // const line = bounds.append("path")
// //   .attr("d",lineGenerator(data))
// //   .attr("fill","none")
// //   .attr("stroke","#af9999")
// //   .attr("stroke-width", 2)



// // const yAxisGenerator = d3.axisLeft()
// //   .scale(yScale);
// // const yAxisGenerator_low = d3.axisLeft()
// //   .scale(yScale_low);
// // const xAxisGenertor = d3.axisBottom()
// //   .scale(xScale);

// // const yAxis = bounds.append("g").call(yAxisGenerator);
// // const yAxis_low = bounds.append("g").call(yAxisGenerator_low);

// // const xAxis = bounds.append("g").call(xAxisGenertor)
// //   .style("transform",`translateY(${dimensions.boundedHeight}px)`)




// // }


// // drawLineChart();

// console.log("Hello world!");

// async function drawLineChart() {
// console.log("drawLineChart");
// const data = await d3.json("my_weather_data.json");
// console.log(data);
// // const yAccessor = d => d.temperatureMax;
// const yAccessor = d => d.temperatureMax;
// const yAccessor_low = d => d.temperatureLow;
// const dateParser = d3.timeParse("%Y-%m-%d");
// function xAccesor(d) {
//       return dateParser(d.date);
//   }

// let dimensions = {
//   width: window.innerWidth*0.9,
//   height: 400,
//   margin: {
//     top: 15,
//     right: 15,
//     bottom:40,
//     left:60,
//   },
// }

// dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
// dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

// const wrapper = d3.select("#wrapper");
// const svg = wrapper.append("svg");
// svg.attr("width",dimensions.width);
// svg.attr("height", dimensions.height);

// const bounds = svg.append("g").style("transform",`translate(${dimensions.margin.left},${dimensions.margin.top})`);
// // console.log(dimensions);

// const yScale = d3.scaleLinear()
//   .domain(d3.extent(data,yAccessor))
//   .range([dimensions.boundedHeight,0]);

// const yScale_low = d3.scaleLinear()
//   .domain(d3.extent(data,yAccessor_low))
//   .range([dimensions.boundedHeight,0]);

// const limitTemperatureVal = yScale(32);

// const limitTemperature = bounds.append("rect")
//   .attr("x",0)
//   .attr("width", dimensions.boundedWidth)
//   .attr("y",limitTemperatureVal)
//   .attr("height", dimensions.boundedHeight - limitTemperatureVal)
//   .attr("fill","pink");

// const xScale = d3.scaleTime()
//   .domain(d3.extent(data, xAccesor))
//   .range([0, dimensions.boundedWidth])

// const lineGenerator = d3.line()
//   .x(d=>xScale(xAccesor(d)))
//   .y(d=>yScale(yAccessor(d)))

// const line = bounds.append("path")
//   .attr("d",lineGenerator(data))
//   .attr("fill","none")
//   .attr("stroke","#af9999")
//   .attr("stroke-width", 2)

// const yAxisGenerator = d3.axisLeft()
//   .scale(yScale);

// const xAxisGenertor = d3.axisBottom()
//   .scale(xScale);

// const yAxis = bounds.append("g").call(yAxisGenerator);

// const xAxis = bounds.append("g").call(xAxisGenertor)
//   .style("transform",`translateY(${dimensions.boundedHeight}px)`)

// console.log(myTemp1,myTemp2);


// }


// drawLineChart();

console.log("Hello world");

async function drawLineChart(){
  console.log("drawLineChart");


  const data = await d3.json("my_weather_data.json");
  // console.table(data);
  const yAccessor = d => d.temperatureMax;
  const yAccessor_low = d => d.temperatureLow;
  const dateParser = d3.timeParse("%Y-%m-%d");
  function xAccessor(d){
    return dateParser(d.date);
  }
  let dimensions = {
    width: window.innerWidth*0.9,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  }
dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

const wrapper = d3.select("#wrapper");
const svg = wrapper.append("svg");
svg.attr("width", dimensions.width);
svg.attr("height", dimensions.height);

const bounds = svg.append("g").style("transform",'translate(${dimensions.margin.left},${dimensions.margin.top})');
// console.log(dimensions);

//VAZHNAYA SHTUKA
const yScale = d3.scaleLinear()
  .domain(d3.extent(data,yAccessor))
  .range([dimensions.boundedHeight,0]);

const yScale_low = d3.scaleLinear()
  .domain(d3.extent(data,yAccessor_low))
  .range([dimensions.boundedHeight,0]);

const limitTemperatureVal = yScale(98);


const limitTemperature = bounds.append("rect")
  .attr("x",0)
  .attr("width", dimensions.boundedWidth)
  .attr("y", limitTemperatureVal)
  .attr("height", dimensions.boundedHeight - limitTemperatureVal)
  .attr("fill", "#eeeeee");



const xScale = d3.scaleTime()
  .domain(d3.extent(data,xAccessor))
  .range([0, dimensions.boundedWidth]);

const lineGenerator = d3.line()
  .x(d=>xScale(xAccessor(d)))
  .y(d=>yScale(yAccessor(d)))

const lineGenerator_low = d3.line()
  .x(d=>xScale(xAccessor(d)))
  .y(d=>yScale_low(yAccessor_low(d)))


const line = bounds.append("path")
  .attr("d", lineGenerator(data))
  .attr("fill", "none")
  .attr("stroke", "#af9999")
  .attr("stroke-width" , 2)

const line_low = bounds.append("path")
  .attr("d", lineGenerator_low(data))
  .attr("fill", "none")
  .attr("stroke", "#8c1f1f") // red
  .attr("stroke-width" , 3)

const yAxisGenerator = d3.axisLeft()
// const yAxisGenerator = d3.axisRight() ?????????? ?????? ?????????? ????????
  .scale(yScale);

const yAxisGenerator_low = d3.axisLeft()
  .scale(yScale_low);
const xAxisGenerator = d3.axisBottom()
  .scale(xScale);

const yAxis = bounds.append("g").call(yAxisGenerator)
const yAxis_low = bounds.append("g").call(yAxisGenerator_low)
const xAxis = bounds.append("g").call(xAxisGenerator)
  .style("transform", `translateY(${dimensions.boundedHeight}px)`)


}
drawLineChart();
