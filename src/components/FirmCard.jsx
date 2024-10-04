import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function FirmCard({ firm }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-between",
        alignItems:"center",
        width: "300",
        height: "400",
        p: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {firm.address}
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
        alt={firm.name}
        height="140"
        image={firm.image}
        sx={{objectFit:"contain"}}
      />

      <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
        {firm.phone}
      </Typography>
      <CardActions>
        <DeleteOutlineIcon />
        <EditIcon />
      </CardActions>
    </Card>
  );
}
