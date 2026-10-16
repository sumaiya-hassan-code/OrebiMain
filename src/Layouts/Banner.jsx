import Container from "../Components/Container"
import banner from "../assets/Banner.jpg"
const Banner = () => {
  return (
    <>
    <section
            style={{ backgroundImage: `url(${banner})` }}
            className="bg-cover bg-center bg-no-repeat p-40">
          <Container>
            <div className="flex flex-col text-left justify-between gap-y-5">
              <h1 className="font-bold text-[49px] text-[#262626]">Final Offer</h1>
              <div className="flex items-center text-center gap-x-2">
                <div className="text-[16px] text-[#6D6D6D] items-center">Up to </div>
              <div className="font-bold text-[40px] text-[#262626]">50%</div>
              <div className="text-[16px] text-[#6D6D6D] items-center">sale for all furniture items!</div>
              </div>
              <button className="w-1/4 text-white text-[14px] font-bold bg-[#262626] px-10 py-5">Shop Now</button>
            </div>
          </Container>
        </section>
    </>
  )
}

export default Banner