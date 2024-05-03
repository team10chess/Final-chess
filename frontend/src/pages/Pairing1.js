import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function Pairing({ playersData, updateScores, round }) {
  const [players, setPlayers] = React.useState([]);
  const [results, setResults] = React.useState({});
  const [isTournamentOver, setIsTournamentOver] = React.useState(false);
  const [currentround, setCurrenRound] = React.useState(1);
  React.useEffect(() => {
    // Sort players by score in descending order
    const sortedPlayers = [...playersData].sort((a, b) => b.score - a.score);
    // Pair players based on their scores
    const newPairings = [];
    for (let i = 0; i < sortedPlayers.length; i += 2) {
      if (sortedPlayers[i + 1]) {
        newPairings.push([sortedPlayers[i], sortedPlayers[i + 1]]);
      } else {
        newPairings.push([sortedPlayers[i]]);
        setResults({
          ...results,
          [sortedPlayers[i].name]: 0.5,
        });
      }
    }
    setPlayers(newPairings);
  }, [playersData]);

  const handleResultChange = (event, whitePlayer, blackPlayer) => {
    setResults({
      ...results,
      [whitePlayer.name]:
        event.target.value === "white"
          ? 1
          : event.target.value === "draw"
          ? 0.5
          : 0,
      [blackPlayer.name]:
        event.target.value === "black"
          ? 1
          : event.target.value === "draw"
          ? 0.5
          : 0,
    });
  };

  const handleUpdateScores = () => {
    updateScores(results);
    if (currentround >= round) {
      setIsTournamentOver(true);
    } else {
      setCurrenRound((currentround) => (currentround = currentround + 1));
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <Typography variant="h4">{`Pairing Board - Round ${currentround}`}</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Board</TableCell>
              <TableCell>White</TableCell>
              <TableCell>Black</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map(([whitePlayer, blackPlayer], index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{whitePlayer.name}</TableCell>
                <TableCell>{blackPlayer ? blackPlayer.name : "Bye"}</TableCell>
                <TableCell>
                  {blackPlayer ? (
                    <Select
                      value={
                        results[whitePlayer.name] > results[blackPlayer.name]
                          ? "white"
                          : results[whitePlayer.name] <
                            results[blackPlayer.name]
                          ? "black"
                          : "draw"
                      }
                      onChange={(event) =>
                        handleResultChange(event, whitePlayer, blackPlayer)
                      }
                    >
                      <MenuItem value="white">White wins</MenuItem>
                      <MenuItem value="black">Black wins</MenuItem>
                      <MenuItem value="draw">Draw</MenuItem>
                    </Select>
                  ) : (
                    "Bye"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <Button
          variant="contained"
          color={isTournamentOver ? "success" : "primary"}
          onClick={handleUpdateScores}
          disabled={isTournamentOver}
        >
          {isTournamentOver ? "Tournament Over" : "Update Scores"}
        </Button>
      </Box>
    </Box>
  );
}
