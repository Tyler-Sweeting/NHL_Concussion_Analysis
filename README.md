# NHL Concussion Analysis
A data analysis used to predict the impact of concussions on an NHL player's career.
___

### Overview

Our group decided to focus our attention onto an analysis involving something in the sports world. In recent years, the NHL has been riticuled for its handling of player concussions and the potential long-term effects on their health and careers. Our hope is for this analysis to provide a data-driven perspective on the issue.

The data we used in this analysis is sourced from various publicly available datasets on NHL players and their careers. The analysis focuses on several key metrics, including the number of concussions sustained by players, the amount of games missed because of those concussions, and the effect they have on a players performance and longevity in the league.

The project will be implemented using Python and JavaScript. The data will be cleaned and pre-processed to ensure its quality before performing exploratory data analysis to identify trends and insights. Additionally, statistical models will be used to quantify the relationship between concussions and career outcomes. We will have an interactive aspect to the analysis for more detailed answers, this will be done on a created website as well as a Tableau story.

The results of this analysis may provide awareness for the NHL and its stakeholders to better understand the long-term impact of concussions on player health and career longevity. Ultimately, this information may help inform future policies and practices to improve player safety and well-being.
___

### Getting Started

##### Datasets
* NHL Concussions Database_data.csv from: https://www.kaggle.com/datasets/josephmclauchlan/nhl-concussion-data-2012-2023?resource=download
    - Removed unwanted columns
    - Changed format of Names, Teams and Season to match other dataset
    - Removed goalies
    - 5 columns, 357 rows after cleaning


* Skaters.csv for 2012-2013 to 2022-2023 from: https://moneypuck.com/data.htm
    - Joined datasets from 2012-2022
    - Removed unwanted columns
    - Dropped every situation except for 'all'
    - 13 columns ,9938 rows after cleaning

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


##### Machine Learning

##### Tableau

##### Website

___
### Results 


___
### Authors

##### Ahmed Hakeem
- Data Engineer: Front-end Developer; Creation and development of website dashboard.
##### Michael Rochon
- Data Scientist: Managing the database, joining datasets together and Machine Learning.
##### Tyler Sweeting
- Data Analyst/Project Coordinator: Data exploration, organizng and coordinating tasks.
