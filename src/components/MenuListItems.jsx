import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import InventoryIcon from "@mui/icons-material/Inventory"
import StoreIcon from "@mui/icons-material/Store"
import StarsIcon from "@mui/icons-material/Stars"
import { useNavigate } from "react-router-dom";

const MenuListItems = () => {

  const navigate = useNavigate()
  const icons = [
    {
      title: "Dashboard",
      icon: <AppsIcon />,
      path: "/stock",
    },
    {
        title: "Purchases",
        icon: <ShoppingBasketIcon />,
        path: "/purchases",
      },
      {
        title: "Sales",
        icon: <AttachMoneyIcon />,
        path: "/sales/",
      },
      {
        title: "Firms",
        icon: <StoreIcon />,
        path: "/firms/",
      },
      {
        title: "Brands",
        icon: <StarsIcon />,
        path: "/brands/",
      },
      {
        title: "Products",
        icon: <InventoryIcon />,
        path: "/products/",
      },
  ];

  return (
    <div>
      <List>
        {icons.map((item, index) => (
          <ListItem key={index} disablePadding onClick={()=>navigate(item.path)} >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
