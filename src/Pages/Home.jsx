import Banner from "../Layouts/Banner";
import Promotion from "../Layouts/Promotion";
import Shipping from "../Layouts/Shipping";
import New_Arrival from "../Layouts/New_Arrival";
import Bestsellers from "../Layouts/Bestsellers";



const Home = () => {
  return (
    <>
    <Banner/>
    <Shipping/>
    <Promotion/>
    <New_Arrival/>
    <Bestsellers/>
    </>
  )
}

export default Home