CREATE TABLE concussion_merged_RAW AS
	SELECT moneypuck_final.*, concussion_final.Games_Missed
		FROM moneypuck_final 
		JOIN concussion_final
	ON (moneypuck_final.pkey = concussion_final.pkey);
	