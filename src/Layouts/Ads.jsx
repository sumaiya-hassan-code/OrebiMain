import Container from "../Components/Container"
import Image from "../Components/Image"
import img from "../assets/Ads_2.png"

const Ads = () => {
  return (
    <div className="py-20">
        <Container>
            <Image imgSrc={img}/>
        </Container>
    </div>
  )
}

export default Ads