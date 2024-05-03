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

export default function Leaderboard({ playersData }) {
  const [players, setPlayers] = React.useState([]);

  React.useEffect(() => {
    setPlayers([...playersData].sort((a, b) => b.score - a.score));
  }, [playersData]);

  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <Typography variant="h4">Tournament Leaderboard</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Accuracy (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, index) => (
              <TableRow key={player.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.rating}</TableCell>
                <TableCell>{player.score}</TableCell>
                <TableCell>{player.accuracy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
