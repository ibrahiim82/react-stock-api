import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete"
import { useSelector } from "react-redux"

const columns = [
  { field: "_id", headerName: "#", width: 90 },
  {
    field: "categoryId",
    headerName: "Categories",
    width: 150,
    // valueGetter: (value, row) => {
    //     console.log("ROW:", row, "VALUE:", value);
    // //    return row.categoryId.name
    //       return value.name
    // },  17.satır alternatif kısa yol
    valueGetter: (value) => value.name,
    editable: true,
  },
  {
    field: "brandId",
    headerName: "Brands",
    width: 150,
    valueGetter: (value) => value.name,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    type: "text",
    width: 110,
    editable: true,
  },
  {
    field: "quantity",
    headerName: "Stock",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "actions",
    type: "actions",
    getActions: () => [
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
    ],
  },
];

export default function ProductTable() {
    const { products } = useSelector((state) => state.stock)

    return (
        <Box sx={{display: "flex", flexDirection: "row", height: 400, width: "100%" }}>
          <DataGrid
            rows={products}
            columns={columns}
            disableRowSelectionOnClick
            getRowId={getRowId}
          />
        </Box>
      )
    }
