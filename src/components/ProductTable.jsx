import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

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
    field: "stock",
    headerName: "Stock",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "actions",
    type: "actions",
    getActions: (param) => [
      <GridActionsCellItem icon={DeleteForeverIcon} label="Delete" />,
    ],
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ProductTable() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
