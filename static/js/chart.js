// Define the initial filters
let nameFilter = "All";
let seasonFilter = "All";
let teamFilter = "All";

// Define the data selector and populate with unique names and seasons
const uniqueNames = [...new Set(data.map((d) => d.name))];
const uniqueSeasons = [...new Set(data.map((d) => d.season))];
const uniqueTeams = [...new Set(data.map((d) => d.team))];
uniqueNames.unshift("All");
uniqueSeasons.unshift("All");
uniqueTeams.unshift("All");

// Add options to the name filter selector
const nameFilterSelector = d3.select("#nameFilter");
nameFilterSelector
  .selectAll("option")
  .data(uniqueNames)
  .enter()
  .append("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .property("selected", (d) => d === "All");

// Add options to the season filter selector
const seasonFilterSelector = d3.select("#seasonFilter");
seasonFilterSelector
  .selectAll("option")
  .data(uniqueSeasons)
  .enter()
  .append("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .property("selected", (d) => d === "All");

// Add options to the team filter selector
const teamFilterSelector = d3.select("#teamFilter");
teamFilterSelector
  .selectAll("option")
  .data(uniqueTeams)
  .enter()
  .append("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .property("selected", (d) => d === "All");

// Define the dimensions of the chart
const width = 1800;
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
  .domain(uniqueNames)
  .padding(0.1);

const yScale = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(data, (d) => d.i_f_points)]);

// Define the color scale
const colorScale = d3.scaleOrdinal().range(["steelblue", "orange"]);

// Draw the bars on the chart
svg
  .selectAll("rect")
  .data(
    data.filter(
      (d) =>
        (nameFilter === "All" || d.name === nameFilter) &&
        (seasonFilter === "All" || d.season === seasonFilter) &&
        (teamFilter === "All" || d.team === teamFilter)
    )
  )
  .enter()
  .append("rect")
  .attr("x", (d) => xScale(d.name))
  .attr("y", (d) => yScale(d.i_f_points))
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => height - yScale(d.i_f_points))
  .attr("fill", (d) => colorScale(d.name));

// Draw the x and y axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g").attr("transform", `translate(0, ${height})`);

// Chart #2
// Define the scales for the x, y, and radius axes
const xScale2 = d3
  .scaleBand()
  .range([0, width])
  .domain(data.map((d) => d.name))
  .padding(0.1);

const yScale2 = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(data, (d) => d.games_played)]);

const rScale = d3
  .scaleSqrt()
  .range([5, 15])
  .domain([0, d3.max(data, (d) => d.games_missed)]);

// Create the SVG element to hold the chart
const svg2 = d3
  .select("#chart2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Draw the circles on the chart
svg2
  .selectAll("circle")
  .data(
    data.filter(
      (d) =>
      (nameFilter === "All" || d.name === nameFilter) &&
      (seasonFilter === "All" || d.season === seasonFilter) &&
      (teamFilter === "All" || d.team === teamFilter)
    )
  )
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d.name) + xScale.bandwidth() / 2)
  .attr("cy", (d) => yScale(d.games_played))
  .attr("r", (d) => rScale(d.games_missed))
  .attr("fill", "steelblue");

// Draw the x and y axes
const xAxis2 = d3.axisBottom(xScale2);
const yAxis2 = d3.axisLeft(yScale2);

svg2.append("g").attr("transform", `translate(0, ${height})`).call(xAxis2);

svg2.append("g").call(yAxis2);

// Chart #3
// Create the SVG element to hold the chart
const svg3 = d3
  .select("#chart3")
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
const colorScale2 = d3
  .scaleSequential()
  .interpolator(d3.interpolateRdYlBu)
  .domain([
    d3.min(data, (d) => d.games_played),
    d3.max(data, (d) => d.games_played),
  ]);

// Draw the heatmap rectangles on the chart
svg3
  .selectAll("rect")
  .data(
    data.filter(
      (d) =>
      (nameFilter === "All" || d.name === nameFilter) &&
      (seasonFilter === "All" || d.season === seasonFilter) &&
      (teamFilter === "All" || d.team === teamFilter)
    )
  )
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
