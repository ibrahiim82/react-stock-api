import MonetiazionOnIcon from "@mui/icons-material/MonetizationOn"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import PaymentsIcon from "@mui/icons-material/Payments"

const KPICards = () => {
    const cardData = [
        {
        id:1,
        icon:<MonetiazionOnIcon/>,
        title:"sales",
        bgColor:"red",
        color:"darkred",
    },
        {
        id:2,
        icon:<ShoppingBasketIcon/>,
        title:"profit",
        bgColor:"red",
        color:"darkred",
    }
    ,
        {
        id:3,
        icon:<PaymentsIcon/>,
        title:"purchases",
        bgColor:"red",
        color:"darkred",
    }
]

  return (
    <div>

    </div>
  )
}

export default KPICards