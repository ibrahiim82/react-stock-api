import { Alert, Stack } from "@mui/material";
import React from "react";


export const TableSkelthon = ()=>{
    return <Stack spacing={1}>
    
    </Stack>
}


export const ErrorMessage = () => {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">Veriler çekilemedi.</Alert>
      </Stack>
    </div>
  );
};

const Messages = () => {
  return <div></div>

}

export default Messages;
