-- 
create table NHL_concussions_database_data (
 	Season VARCHAR(255),
	Team  VARCHAR(255),
	Position  VARCHAR(255),
	Player  VARCHAR(255),
	Injury_Type  VARCHAR(255),
	Cap_Hit  float,
	Chip float,
	Games_Missed int,
	Game_Missed int
)



-- To create moneypuck table on postgres database and we use the same code to create all table from season 2012 - 2022 and uplode the data from the csv file that we download from moneypuck.com 

CREATE TABLE skaters2012 (
	playerId int,
	season int,
	name VARCHAR(255),
	team VARCHAR(255),
	position VARCHAR(255),
	situation VARCHAR(255),
	games_played int,
	icetime float,
	shifts float,
	gameScore float,
	onIce_xGoalsPercentage float,
	offIce_xGoalsPercentage float,
	onIce_corsiPercentage float,
	offIce_corsiPercentage float,
	onIce_fenwickPercentage float,
	offIce_fenwickPercentage float,
	iceTimeRank float,
	I_F_xOnGoal float,
	I_F_xGoals float,
	I_F_xRebounds float,
	I_F_xFreeze float,
	I_F_xPlayStopped float,
	I_F_xPlayContinuedInZone float,
	I_F_xPlayContinuedOutsideZone float,
	I_F_flurryAdjustedxGoals float,
	I_F_scoreVenueAdjustedxGoals float,
	I_F_flurryScoreVenueAdjustedxGoals float,
	I_F_primaryAssists float,
	I_F_secondaryAssists float,
	I_F_shotsOnGoal float,
	I_F_missedShots float,
	I_F_blockedShotAttempts float,
	I_F_shotAttempts float,
	I_F_points float,
	I_F_goals float,
	I_F_rebounds float,
	I_F_reboundGoals float,
	I_F_freeze float,
	I_F_playStopped float,
	I_F_playContinuedInZone float,
	I_F_playContinuedOutsideZone float,
	I_F_savedShotsOnGoal float,
	I_F_savedUnblockedShotAttempts float,
	penalties float,
	I_F_penalityMinutes float,
	I_F_faceOffsWon float,
	I_F_hits float,
	I_F_takeaways float,
	I_F_giveaways float,
	I_F_lowDangerShots float,
	I_F_mediumDangerShots float,
	I_F_highDangerShots float,
	I_F_lowDangerxGoals float,
	I_F_mediumDangerxGoals float,
	I_F_highDangerxGoals float,
	I_F_lowDangerGoals float,
	I_F_mediumDangerGoals float,
	I_F_highDangerGoals float,
	I_F_scoreAdjustedShotsAttempts float,
	I_F_unblockedShotAttempts float,
	I_F_scoreAdjustedUnblockedShotAttempts float,
	I_F_dZoneGiveaways float,
	I_F_xGoalsFromxReboundsOfShots float,
	I_F_xGoalsFromActualReboundsOfShots float,
	I_F_reboundxGoals float,
	I_F_xGoals_with_earned_rebounds float,
	I_F_xGoals_with_earned_rebounds_scoreAdjusted float,
	I_F_xGoals_with_earned_rebounds_scoreFlurryAdjusted float,
	I_F_shifts float,
	I_F_oZoneShiftStarts float,
	I_F_dZoneShiftStarts float,
	I_F_neutralZoneShiftStarts float,
	I_F_flyShiftStarts float,
	I_F_oZoneShiftEnds float,
	I_F_dZoneShiftEnds float,
	I_F_neutralZoneShiftEnds float,
	I_F_flyShiftEnds float,
	faceoffsWon float,
	faceoffsLost float,
	timeOnBench float,
	penalityMinutes float,
	penalityMinutesDrawn float,
	penaltiesDrawn float,
	shotsBlockedByPlayer float,
	OnIce_F_xOnGoal float,
	OnIce_F_xGoals float,
	OnIce_F_flurryAdjustedxGoals float,
	OnIce_F_scoreVenueAdjustedxGoals float,
	OnIce_F_flurryScoreVenueAdjustedxGoals float,
	OnIce_F_shotsOnGoal float,
	OnIce_F_missedShots float,
	OnIce_F_blockedShotAttempts float,
	OnIce_F_shotAttempts float,
	OnIce_F_goals float,
	OnIce_F_rebounds float,
	OnIce_F_reboundGoals float,
	OnIce_F_lowDangerShots float,
	OnIce_F_mediumDangerShots float,
	OnIce_F_highDangerShots float,
	OnIce_F_lowDangerxGoals float,
	OnIce_F_mediumDangerxGoals float,
	OnIce_F_highDangerxGoals float,
	OnIce_F_lowDangerGoals float,
	OnIce_F_mediumDangerGoals float,
	OnIce_F_highDangerGoals float,
	OnIce_F_scoreAdjustedShotsAttempts float,
	OnIce_F_unblockedShotAttempts float,
	OnIce_F_scoreAdjustedUnblockedShotAttempts float,
	OnIce_F_xGoalsFromxReboundsOfShots float,
	OnIce_F_xGoalsFromActualReboundsOfShots float,
	OnIce_F_reboundxGoals float,
	OnIce_F_xGoals_with_earned_rebounds float,
	OnIce_F_xGoals_with_earned_rebounds_scoreAdjusted float,
	OnIce_F_xGoals_with_earned_rebounds_scoreFlurryAdjusted float,
	OnIce_A_xOnGoal float,
	OnIce_A_xGoals float,
	OnIce_A_flurryAdjustedxGoals float,
	OnIce_A_scoreVenueAdjustedxGoals float,
	OnIce_A_flurryScoreVenueAdjustedxGoals float,
	OnIce_A_shotsOnGoal float,
	OnIce_A_missedShots float,
	OnIce_A_blockedShotAttempts float,
	OnIce_A_shotAttempts float,
	OnIce_A_goals float,
	OnIce_A_rebounds float,
	OnIce_A_reboundGoals float,
	OnIce_A_lowDangerShots float,
	OnIce_A_mediumDangerShots float,
	OnIce_A_highDangerShots float,
	OnIce_A_lowDangerxGoals float,
	OnIce_A_mediumDangerxGoals float,
	OnIce_A_highDangerxGoals float,
	OnIce_A_lowDangerGoals float,
	OnIce_A_mediumDangerGoals float,
	OnIce_A_highDangerGoals float,
	OnIce_A_scoreAdjustedShotsAttempts float,
	OnIce_A_unblockedShotAttempts float,
	OnIce_A_scoreAdjustedUnblockedShotAttempts float,
	OnIce_A_xGoalsFromxReboundsOfShots float,
	OnIce_A_xGoalsFromActualReboundsOfShots float,
	OnIce_A_reboundxGoals float,
	OnIce_A_xGoals_with_earned_rebounds float,
	OnIce_A_xGoals_with_earned_rebounds_scoreAdjusted float,
	OnIce_A_xGoals_with_earned_rebounds_scoreFlurryAdjusted float,
	OffIce_F_xGoals float,
	OffIce_A_xGoals float,
	OffIce_F_shotAttempts float,
	OffIce_A_shotAttempts float,
	xGoalsForAfterShifts float,
	xGoalsAgainstAfterShifts float,
	corsiForAfterShifts float,
	corsiAgainstAfterShifts float,
	fenwickForAfterShifts float,
	fenwickAgainstAfterShifts float
	)