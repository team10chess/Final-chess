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
import Link from "@mui/material/Link";

export default function Pairing({ playersData, updateScores, round }) {
  const [players, setPlayers] = React.useState([]);
  const [results, setResults] = React.useState({});
  const [isTournamentOver, setIsTournamentOver] = React.useState(false);
  const [currentround, setCurrenRound] = React.useState(1);
  const [gameStatus, setGameStatus] = React.useState("Fetch request sent");
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  React.useEffect(() => {
    const sortedPlayers = [...playersData].sort((a, b) => b.score - a.score);
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
    setTimeout(() => setGameStatus("Game activated"), 5000);
    setTimeout(() => setIsButtonDisabled(false), 600000); // Disable button for 10 minutes
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
              <TableCell>White Link</TableCell>
              <TableCell>Black Link</TableCell>
              <TableCell>Black</TableCell>
              <TableCell>Game Activation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map(([whitePlayer, blackPlayer], index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{whitePlayer.name}</TableCell>
                <TableCell>
                  <Link
                    href={`https://chess.gain.gg/white?code=${String(
                      index + 1
                    ).padStart(3, "0")}`}
                  >
                    Game link
                  </Link>
                </TableCell>
                <TableCell>
                  {blackPlayer ? (
                    <Link
                      href={`https://chess.gain.gg/black?code=${String(
                        index + 1
                      ).padStart(3, "0")}`}
                    >
                      Game link
                    </Link>
                  ) : (
                    "Bye"
                  )}
                </TableCell>
                <TableCell>{blackPlayer ? blackPlayer.name : "Bye"}</TableCell>
                <TableCell
                  style={{
                    color: gameStatus === "Game activated" ? "green" : "red",
                  }}
                >
                  {gameStatus}
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
          disabled={isTournamentOver || isButtonDisabled}
        >
          {isTournamentOver ? "Tournament Over" : "Update Scores"}
        </Button>
      </Box>
    </Box>
  );
}
