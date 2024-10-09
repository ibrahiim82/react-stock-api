import MonetiazionOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaymentsIcon from "@mui/icons-material/Payments";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { deepPurple, pink, green } from "@mui/material/colors";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const KPICards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  //   console.log(sales);
  //   console.log(purchases);

  const totalSales = sales.reduce((acc, sale) => acc + sale.amount, 0);
  
  const totalPurchases = purchases.reduce(
    (acc, purchase) => acc + purchase.amount,
    0
  );

  const cardData = [
    {
      id: 1,
      icon: <MonetiazionOnIcon sx={{ fontSize: "2rem" }} />,
      title: "sales",
      bgColor: deepPurple[100],
      color: deepPurple[900],
      // amount: `${totalSales}`,
      amount: "$" + totalSales.toLocaleString("tr-TR"),
    },
    {
      id: 2,
      icon: <ShoppingBasketIcon sx={{ fontSize: "2rem" }} />,
      title: "profit",
      bgColor: pink[100],
      color: pink[800],
      amount: "$" + (totalSales - totalPurchases).toLocaleString("tr-TR"),
    },
    {
      id: 3,
      icon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
      title: "purchases",
      bgColor: green[100],
      color: green[900],
      amount: "$" + totalPurchases.toLocaleString("tr-TR"),
    },
  ];

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      flexDirection={"row"}
      gap={3}
    >
      {cardData.map((item) => (
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            width: 275,
            p: 1,
            gap: 3,
          }}
        >
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgColor: item.bgColor,
              color: item.color,
              ml: 3,
            }}
          >
            {item.icon}
          </Avatar>
          <Box>
            <Typography variant="button">{item.title}</Typography>
            <Typography variant="h5">{item.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPICards;
