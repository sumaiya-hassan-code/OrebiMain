import Banner from "../Layouts/Banner";
import Promotion from "../Layouts/Promotion";
import Shipping from "../Layouts/Shipping";
import New_Arrival from "../Layouts/New_Arrival";
import Bestsellers from "../Layouts/Bestsellers";
import Ads from "../Layouts/Ads";
import Special_offers from "../Layouts/Special_offers";



const Home = () => {
  return (
    <>
    <Banner/>
    <Shipping/>
    <Promotion/>
    <New_Arrival/>
    <Bestsellers/>
    <Ads/>
    <Special_offers/>
    </>
  )
}

export default Home