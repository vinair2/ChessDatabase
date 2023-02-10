from converter.pgn_data import PGNData

#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-01.pgn")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-02.pgn")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-03.pgn")



pgn_data = PGNData(["lichessElite2022\lichess_elite_2022-04.pgn","lichessElite2022\lichess_elite_2022-05.pgn"],"output45")

#pgn_data = PGNData(["lichessElite2022\lichess_elite_2022-04.pgn","lichessElite2022\lichess_elite_2022-05.pgn", "lichessElite2022\lichess_elite_2022-06.pgn"],"output")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-04.pgn")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-05.pgn")

#pgn_data = PGNData(["lichessElite2022\lichess_elite_2022-06.pgn", "lichessElite2022\lichess_elite_2022-07.pgn"],"output")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-06.pgn")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-07.pgn")


#pgn_data = PGNData(["lichessElite2022\lichess_elite_2022-08.pgn", "lichessElite2022\lichess_elite_2022-09.pgn"],"output2")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-08.pgn")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-09.pgn")


#pgn_data = PGNData(["lichessElite2022\lichess_elite_2022-10.pgn", "lichessElite2022\lichess_elite_2022-11.pgn"],"output3")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-10.pgn")
#pgn_data = PGNData("lichessElite2022\lichess_elite_2022-11.pgn")
result = pgn_data.export()
if result.is_complete:
    print("Files created!")
else:
    print("Files not created!")