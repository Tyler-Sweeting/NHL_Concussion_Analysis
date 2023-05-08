var names = data.map((d) => d.name);
var seasons = data.map((d) => d.season);
var teams = data.map((d) => d.team);
var position = data.map((d) => d.position);
var gamesPlayed = data.map((d) => d.games_played);
var goals = data.map((d) => d.i_f_goals);
var points = data.map((d) => d.i_f_points);
var penalityMinutes = data.map((d) => d.i_f_penalityminutes);
var hits = data.map((d) => d.i_f_hits);
var takeaWays = data.map((d) => d.i_f_takeaways);
var giveaWays = data.map((d) => d.i_f_giveaways);
var oniceCorsiPercentage = data.map((d) => d.onice_corsipercentage);
var oniceFenwickPercentage = data.map((d) => d.onice_fenwickpercentage);
var gamesMissed = data.map((d) => d.games_missed);

var selector = d3.select("#name_select");
names.forEach((name) => {
  selector.append("option").text(name).property("value", name);
});
var selector = d3.select("#season_select");
seasons.forEach((season) => {
  selector.append("option").text(season).property("value", season);
});
var selector = d3.select("#team_select");
teams.forEach((team) => {
  selector.append("option").text(team).property("value", team);
});

var data = [
  {
    x: names,
    y: points,
    type: 'bar'
  }
];

Plotly.newPlot('myDiv', data);


var trace1 = {
  x: names,
  y: gamesPlayed,
  mode: 'markers',
  type: 'scatter'
};

var trace2 = {
  x: names,
  y: gamesMissed,
  mode: 'markers',
  type: 'scatter'
};

var trace3 = {
  x: names ,
  y: goals,
  mode: 'markers',
  type: 'scatter'
};

var data = [trace1, trace2, trace3];

Plotly.newPlot('myDiv2', data);


var x = seasons

var trace4 = {
  y: gamesPlayed,
  x: x,
  name: 'games Played',
  marker: {color: '#3D9970'},
  type: 'box'
};

var trace5 = {
  y: gamesMissed,
  x: x,
  name: 'games Missed',
  marker: {color: '#FF4136'},
  type: 'box'
};

var trace6 = {
  y: points,
  x: x,
  name: 'points',
  marker: {color: '#FF851B'},
  type: 'box'
};

var data = [trace4, trace5, trace6];

var layout = {
  yaxis: {
    title: '',
    zeroline: false
  },
  boxmode: 'group'
};

Plotly.newPlot('myDiv3', data, layout);