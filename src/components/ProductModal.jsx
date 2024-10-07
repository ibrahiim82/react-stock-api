import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useStockRequests from "../services/useStockRequests";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({ open, handleClose, data, setData }) {
  const { postStock } = useStockRequests();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("products", data);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="categories">Categories</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                value={data.categoryId}
                // value={age}
                label="categories"
                onChange={handleChange}
                required
              >
                {categories.map((item) => (
                  <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brands">Brands</InputLabel>
              <Select
                labelId="brands"
                id="brands"
                value={data.brandId}
                // value={age}
                label="brands"
                onChange={handleChange}
                required
              >
                {brands.map((item) => (
                  <MenuItem value={item._id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={data.name}
              onChange={handleChange}
              required
            />

            <Button variant="contained" type="submit">
               ADD PRODUCT
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
