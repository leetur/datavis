console.log("Hello world!");
async function drawBar() {
    const dataset = await d3.json("./my_weather_data.json")
    console.table(dataset);
    //  Accessors for humidity and for height
    const humAccessor = d => d.humidity;
    const yAccessor = d => d.length;

    const width = 800
    let dimensions = {
      width: width,
      height: width * 0.8,
      margin: {
        top: 30,
        right: 10,
        bottom: 50,
        left: 50,
      },
    }
    //boundaries wirina = levo - pravo
    //vysota = niz - vverh
    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

    const wrapper = d3.select("#wrapper")
        .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
    ;

    const bounds = wrapper.append('g')
        .style('transform',`translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)

    const xScaler = d3.scaleLinear()
        .domain(d3.extent(dataset, humAccessor))
        .range([0, dimensions.boundedWidth])
        .nice()

    const binsGen = d3.bin()
        .domain(xScaler.domain())
        .value(humAccessor)
        .thresholds(12)

    const bins = binsGen(dataset)
    console.log(bins)

    const yScaler = d3.scaleLinear()
        .domain([0, d3.max(bins, yAccessor)])
        .range([dimensions.boundedHeight, 0])

    const binsGroup = bounds.append('g')
    const binGroups = binsGroup.selectAll('g')
        .data(bins)
        .enter()
        .append('g')
  

//bar charts 
    const barPadding = 1
    const barRect = binGroups.append('rect')
        .attr('x', d => xScaler(d.x0) + barPadding / 2)
        .attr('y', d => yScaler(yAccessor(d)))
        .attr('width', d => d3.max([0, xScaler(d.x1) - xScaler(d.x0) - barPadding]))
        .attr('height', d => dimensions.boundedHeight - yScaler(yAccessor(d)))
        .attr('fill', 'red')

// the task is TO WRITE THE VALUES OF AXES  

    const xAxis = wrapper.append('g')
        .call(d3.axisBottom(xScaler))
        .attr('transform', `translate(${dimensions.margin.left}, ${dimensions.margin.top + dimensions.boundedHeight})`)

    const yAxis = wrapper.append('g')
        .call(d3.axisLeft(yScaler))
        .attr('transform', `translate(${dimensions.margin.left}, ${dimensions.margin.top})`)
        
// portion from the very first graph where we already created the axis
//         const yAxisGenerator = d3.axisLeft()
// // const yAxisGenerator = d3.axisRight() тогда еще числа есть
//   .scale(yScale);

// const yAxisGenerator_low = d3.axisLeft()
//   .scale(yScale_low);
// const xAxisGenerator = d3.axisBottom()
//   .scale(xScale);

// const yAxis = bounds.append("g").call(yAxisGenerator)
// const yAxis_low = bounds.append("g").call(yAxisGenerator_low)
// const xAxis = bounds.append("g").call(xAxisGenerator)
//   .style("transform", `translateY(${dimensions.boundedHeight}px)`) 
}

drawBar()