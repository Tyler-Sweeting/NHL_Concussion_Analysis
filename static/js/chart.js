
// Get the unique values for each filter option
var uniqueNames = [...new Set(data.map((d) => d.name))];
var uniqueSeasons = [...new Set(data.map((d) => d.season))];

// Populate the select dropdown options with the unique values
var nameSelector = d3.select("#name_select");
uniqueNames.forEach((name) => {
  nameSelector.append("option").text(name).property("value", name);
});

var seasonSelector = d3.select("#season_select");
uniqueSeasons.forEach((season) => {
  seasonSelector.append("option").text(season).property("value", season);
});

// Set up the initial data and plots
var filteredData = data;
var xValues = filteredData.map((d) => d.name);
var yValues = filteredData.map((d) => d.points_per_game);

var barData = [
  {
    x: xValues,
    y: yValues,
    type: "bar",
  },
];

Plotly.newPlot("myDiv", barData);

var trace1 = {
  x: xValues,
  y: filteredData.map((d) => d.games_played),
  mode: "markers",
  type: "scatter",
};

var trace2 = {
  x: xValues,
  y: filteredData.map((d) => d.games_missed),
  mode: "markers",
  type: "scatter",
};

var trace3 = {
  x: xValues,
  y: filteredData.map((d) => d.points_per_game),
  mode: "markers",
  type: "scatter",
};

var sctterData = [trace1, trace2, trace3];

Plotly.newPlot("myDiv2", sctterData);

// Filter the data based on the selected values and update the plots
function updatePlots() {
  var selectedName = nameSelector.property("value");
  var selectedSeason = seasonSelector.property("value");

  filteredData = data.filter((d) => {
    return (
      (selectedName === "All" || d.name === selectedName) ||
      (selectedSeason === "All" || d.season === selectedSeason) 
    );
  });

  xValues = filteredData.map((d) => d.name);
  
  // Update the data for the first plot
  Plotly.update("myDiv", {
    x: [xValues],
    y: [filteredData.map((d) => d.points_per_game)],
  });

  // Update the data for the second plot
  Plotly.update("myDiv2", {
    x: [xValues, xValues, xValues],
    y: [
      filteredData.map((d) => d.goals),
      filteredData.map((d) => d.games_missed),
      filteredData.map((d) => d.points_per_game),
    ],
  });
}

// Add an event listener to the filter options to update the plots when they are changed
nameSelector.on("change", updatePlots);
seasonSelector.on("change", updatePlots);
