import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Leaderboard from "./Leaderboard1"; // Import Leaderboard component
import Pairing from "./Pairing1"; // Import Pairing component

export default function SwitchLabel() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [playersData, setPlayersData] = useState([
    { name: "niraj", rating: 2000, score: 0, accuracy: 20.4 },
    { name: "bhuvan", rating: 2100, score: 0, accuracy: 42.0 },
    { name: "sample", rating: 2200, score: 0, accuracy: 35.5 },
    { name: "bhoomika", rating: 2300, score: 0, accuracy: 75.0 },
    { name: "vandithaboss", rating: 2400, score: 0, accuracy: 90.5 },
  ]);

  const updateScores = (results) => {
    setPlayersData(
      playersData.map((player) => ({
        ...player,
        score: player.score + (results[player.name] || 0),
      }))
    );
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography variant="h4">Chess Pairing Arena</Typography>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={isChecked}
                onChange={handleChange}
                defaultChecked
              />
            }
            label="Leaderboard"
          />
        </FormGroup>
      </Box>
      <Box p={2} flexGrow={1}>
        {isChecked ? (
          <Leaderboard playersData={playersData} />
        ) : (
          <Pairing
            playersData={playersData}
            updateScores={updateScores}
            round={5}
          />
        )}
      </Box>
    </Box>
  );
}
