import Container from "../Components/Container"
import image from "../assets/Image.png"
import image_1 from "../assets/Image (1).png"
import image_2 from "../assets/Image (2).png"
import Image from "../Components/Image";


const Promotion = () => {
  return (
    <>
    <section className="py-40 px-10">
      <Container>
        <div className="flex items-center justify-between gap-x-8">
          <div className="w-1/2 relative">
            <Image imgSrc={image}/>
            <div className="flex flex-col gap-y-2 absolute left-10 bottom-5">
            <h1 className="font-bold text-[49px] text-[#262626]">Phones Sale</h1>
              <div className="flex items-center text-center gap-x-2">
                <div className="text-[16px] text-[#6D6D6D] items-center">Up to </div>
                <div className="font-bold text-[40px] text-[#262626]">30%</div>
                <div className="text-[16px] text-[#6D6D6D] items-center">sale for all phones!</div>
              </div>
              <button className=" text-white text-[14px] font-bold bg-[#262626] px-10 py-5">Shop Now</button>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-y-8">
            <div className="relative">
              <Image imgSrc={image_1}/>
              <div className="flex flex-col gap-y-2 absolute left-10 bottom-5">
                <h1 className="font-bold text-[35px] text-[#262626]">Electronics Sale</h1>
                  <div className="flex items-center text-center gap-x-2">
                    <div className="text-[10px] text-[#6D6D6D] items-center">Up to </div>
                    <div className="font-bold text-[40px] text-[#262626]">70%</div>
                    <div className="text-[10px] text-[#6D6D6D] items-center">sale for all electronics!</div>
                  </div>
                  <button className="w-[150px] text-white text-[14px] font-bold bg-[#262626] px-10 py-5">Shop Now</button>
              </div>
            </div>
            <div className="relative">
              <Image imgSrc={image_2}/>
              <div className="flex flex-col gap-y-2 absolute left-10 bottom-5">
                <h1 className="font-bold text-[35px] text-[#262626]">Furniture Offer</h1>
                  <div className="flex items-center text-center gap-x-2">
                    <div className="text-[10px] text-[#6D6D6D] items-center">Up to </div>
                    <div className="font-bold text-[40px] text-[#262626]">50%</div>
                    <div className="text-[10px] text-[#6D6D6D] items-center">sale for all furniture items!</div>
                  </div>
                  <button className="w-[150px] text-white text-[14px] font-bold bg-[#262626] px-10 py-5">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Promotion