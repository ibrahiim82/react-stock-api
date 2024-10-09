import React, { useEffect } from "react"
import KPICards from "../components/KPICards"
import Charts from "../components/Charts"
import useStockRequests from "../services/useStockRequests"

const Home = () => {
  const {getStock} = useStockRequests()

  useEffect(() => {
    getStock("purchases")
    getStock("sales")
  }, [])
  
  return (
    <div>
      <KPICards />
      <Charts />
    </div>
  )
}

export default Home
