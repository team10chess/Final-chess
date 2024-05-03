import React from "react";
import { Button, Box, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const PairingMode = () => {
  const navigate = useNavigate();

  const handleAutoModeClick = () => {
    navigate("/Automode");
  };

  const handleManualModeClick = () => {
    navigate("/Manualmode");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" align="center" gutterBottom>
        Pairing Mode
      </Typography>
      <Box mt={2} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleAutoModeClick}
          style={{ marginRight: "20px" }}
        >
          Auto Mode
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleManualModeClick}
        >
          Manual Mode
        </Button>
      </Box>
    </Box>
  );
};

export default PairingMode;
