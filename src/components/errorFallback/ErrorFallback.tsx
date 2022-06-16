import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback: React.VFC<FallbackProps> = ({ error }) => {
  return (
    <Box p={24} data-testid="errorBoundary">
      <Typography variant="h4">error</Typography>
      <p>{error.message}</p>
      <button>click</button>
    </Box>
  );
};

export default ErrorFallback;
