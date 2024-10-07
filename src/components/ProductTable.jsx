import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import useStockRequests from "../services/useStockRequests";

const getRowId = (row) => row._id;

export default function ProductTable() {
  const { deleteStock } = useStockRequests();
  const { products } = useSelector((state) => state.stock);

  const columns = [
    { field: "_id", headerName: "#", flex: 1.2, minWidth: 140 },
    {
      field: "categoryId",
      headerName: "Categories",
      flex: 1,
      minWidth: 140,
      align: "center",
      headerAlign: "center",
      // valueGetter: (value, row) => {
      //     console.log("ROW:", row, "VALUE:", value);
      // //    return row.categoryId.name
      //       return value.name
      // },  17.satır alternatif kısa yol
      valueGetter: (value) => value.name,
    },
    {
      field: "brandId",
      headerName: "Brands",
      flex: 1,
      minWidth: 140,
      align: "center",
      headerAlign: "center",
      valueGetter: (value) => value.name,
    },
    {
      field: "name",
      headerName: "Name",
      type: "text",
      flex: 1,
      minWidth: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1,
      minWidth: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => deleteStock("prodcts", props.id)}
            label="Delete"
          />,
          ,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", height: 400, width: "100%" }}
    >
      <DataGrid
        rows={products}
        columns={columns}
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
