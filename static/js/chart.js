
// Add options to the selector
const selector = d3.select("#selDataset");
const seasons = nestedData.map(d => d.key);

// Add options to the selector
const nestedData = d3.nest()
  .key(d => d.name)
  .entries(data);

// Create a stack object
const stack = d3.stack()
  .keys(["games_played"])
  .value((d, key) => d[key])
  .order(d3.stackOrderNone)
  .offset(d3.stackOffsetNone);

// Apply the stack to the nested data
const stackedData = stack(nestedData.map(d => d.values));



selector.selectAll("option")
  .data(seasons)
  .enter()
  .append("option")
  .text(d => d)
  .property("value", d => d);

// Define the dimensions of the chart
const width = 500;
const height = 300;
const margin = { top: 20, right: 30, bottom: 40, left: 50 };

// Create the SVG element to hold the chart
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Define the scales for the x and y axes
const xScale = d3
  .scaleBand()
  .range([0, width])
  .domain(nestedData.map((d) => d.key))
  .padding(0.1);

const yScale = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(stackedData, (d) => d3.max(d, (d) => d[1]))]);

// Draw the stacked bars on the chart
svg
  .selectAll("g")
  .data(stackedData)
  .enter()
  .append("g")
  .attr("fill", "steelblue")
  .selectAll("rect")
  .data(d => d)
  .enter()
  .append("rect")
  .attr("x", (d) => xScale(d.data.name))
  .attr("y", (d) => yScale(d[1]))
  .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
  .attr("width", xScale.bandwidth());

// Draw the x and y axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);

svg.append("g")
  .call(yAxis);


// Define the scales for the x, y, and radius axes
const xScale2 = d3.scaleBand()
  .range([0, width])
  .domain(data.map((d) => d.name))
  .padding(0.1);

const yScale2 = d3.scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(data, (d) => d.games_played)]);

const rScale = d3.scaleSqrt()
  .range([5, 15])
  .domain([0, d3.max(data, (d) => d.games_missed)]);

// Create the SVG element to hold the chart
const svg2 = d3.select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Draw the circles on the chart
svg2.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d.name) + xScale.bandwidth() / 2)
  .attr("cy", (d) => yScale(d.games_played))
  .attr("r", (d) => rScale(d.games_missed))
  .attr("fill", "steelblue");

// Draw the x and y axes
const xAxis2 = d3.axisBottom(xScale);
const yAxis2 = d3.axisLeft(yScale);

svg2.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis2);

svg2.append("g")
  .call(yAxis2);


  
  // Add options to the selector
  selector
    .selectAll("option")
    .data(seasons)
    .enter()
    .append("option")
    .text((d) => d)
    .property("value", (d) => d);
  

  // Create the SVG element to hold the chart
  const svg3 = d3
    .select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
  // Define the scales for the x and y axes
  const xScale3 = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map((d) => d.name))
    .padding(0.1);
  
  const yScale3 = d3
    .scaleBand()
    .range([height, 0])
    .domain(data.map((d) => d.games_played))
    .padding(0.1);
  
  // Define the color scale for the heatmap
  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateRdYlBu)
    .domain([d3.min(data, (d) => d.games_played), d3.max(data, (d) => d.games_played)]);
  
  // Draw the heatmap rectangles on the chart
  svg3
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.name))
    .attr("y", (d) => yScale(d.games_played))
    .attr("width", xScale3.bandwidth())
    .attr("height", yScale3.bandwidth())
    .attr("fill", (d) => colorScale(d.games_played));
  
  // Draw the x and y axes
  const xAxis3 = d3.axisBottom(xScale3);
  const yAxis3 = d3.axisLeft(yScale3);
  
  svg3.append("g").attr("transform", `translate(0, ${height})`).call(xAxis3);
  
  svg3.append("g").call(yAxis3);