# NHL Concussion Analysis
A data analysis used to predict the impact of concussions on an NHL player's career.
___

### Overview

Our group decided to focus our attention onto an analysis involving something in the sports world. In recent years, the NHL has been riticuled for its handling of player concussions and the potential long-term effects on their health and careers. Our hope is for this analysis to provide a data-driven perspective on the issue.

The data we used in this analysis is sourced from various publicly available datasets on NHL players and their careers. The analysis focuses on several key metrics, including the number of concussions sustained by players, the amount of games missed because of those concussions, and the effect they have on a players performance and longevity in the league.

The project will be implemented using Python and JavaScript. The data will be cleaned and pre-processed to ensure its quality before performing exploratory data analysis to identify trends and insights. Additionally, statistical models will be used to quantify the relationship between concussions and career outcomes. We will have an interactive aspect to the analysis for more detailed answers, this will be done on a created website.

The results of this analysis may provide awareness for the NHL and its stakeholders to better understand the long-term impact of concussions on player health and career longevity. Ultimately, this information may help inform future policies and practices to improve player safety and well-being.
___

### Getting Started

##### Datasets
* NHL Concussions Database_data.csv from: https://www.kaggle.com/datasets/josephmclauchlan/nhl-concussion-data-2012-2023?resource=download
    - Removed unwanted columns
    - Changed format of Names, Teams and Season to match other dataset
    - Removed goalies
    - 5 columns by 357 rows after cleaning


* Skaters.csv for 2012-2013 to 2022-2023 from: https://moneypuck.com/data.htm
    - Joined datasets from 2012-2022
    - Removed unwanted columns
    - Dropped every situation except for 'all'
    - 13 columns by 9938 rows after cleaning

* Players_of_interest.csv
    - A dataset built from joining together the concussion dataset and the player sataset
    - Created to provide a dataset of all players that have had concussions during the timeframe of our dataset
    - 15 columns by 580 rows
    - added a new column 'points_per_game' to have a value that represents a player's performance

* ML_player_dataset.csv
    - A dataset built to have a more detailed list of data for a predective machine learning model.
    - Added columns of PPGP and PPGN, to have values for players points per game the season before their concussion and points per game the season after their concussion.
    - 17 columns by 15 rows


##### Dependencies 
* Python 3.9.15
* Pandas 1.5.22
* 
* 
___

### Summary

##### ERD

![NHL_Concussion_ERD](https://user-images.githubusercontent.com/118485409/235812652-f1d46e21-f319-4a32-a9ee-493e5f0d869e.png)
Joined all of the skater data from each season onto one dataset, using 'name' as the foreign key. Then we joined the final skater dataset with the concussion dataset on our primary key called pkey. This column was created by joining the player name and season.
##### SQL

* SQL Join Code

![SQL_join](https://user-images.githubusercontent.com/118485409/235814811-425c19e7-ba6a-47bd-a5ee-e9ba82b2c23a.png)

* SQL Output 

![SQL_output](https://user-images.githubusercontent.com/118485409/235814821-2d349348-a14f-40c2-b1b9-92a9ac901196.png)

The final visual of our joined dataset.

##### Data Exploration
For data exploration, our goal was to find some details in our data that would help us build our machine learning model that could answer our original question of, does a concussion have any long-term effects on a player's career? To begin exploring this question, we first need to gather and clean the relevant data. This includes data on players who have suffered concussions, as well as data on their performance before and after the concussion. Once we have this data, we can start exploring it to identify any patterns or trends that may indicate a long-term impact on a player's career. This could involve examining the number of games missed due to concussion, changes in performance metrics such as points per game, or other relevant factors. By exploring the data, we hope to gain a deeper understanding of the effects of concussions on NHL players.


##### Machine Learning Model


##### Tableau
We used Tableau as a form of data exploration, and to create some visuals of findings we made. The Tableau dashboard is available at this link.

This first image is a collection of multiple bar charts that compares points per game by each season. It also identifies each season a player had a concussion or not, and the amount of games they played that season. As the visual shows, there is no consistency in a concussion leading to a reduced amount of points per game in seasons following a concussion.


The next visual is a collection of bar charts that show a players fenwick percentage seasn by season and identifying the year they were concussed. Fenwick percentage is a stat that shows the percentage of scoring chances a team gets while a specific player is on the ice. The higher the number the better. As you can see from the visual, the year a player is concussed does not seem to have a lasting effect on a player's fenwick.

##### Website
Our website is the main dashboard for our analysis. We have a home page, and two secondary pages. The first page being a filter page that shows the history of concussions on NHL player's since 2012. There are multiple ways that you can filter. 
You can search a player's name

You can filter by season.

You can filter by player


 The second page is a connection to our machine learning model that can be used to predict the effects a concussion will have on a player. 
___
### Results 

To be filled in for Deliverable 3.

___
### Authors

##### Ahmed Hakeem
- Data Engineer: Front-end Developer; Creation and development of website dashboard.
##### Michael Rochon
- Data Scientist: Managing the database, joining datasets together and Machine Learning.
##### Tyler Sweeting
- Data Analyst/Project Coordinator: Data exploration, organizng and coordinating tasks.
