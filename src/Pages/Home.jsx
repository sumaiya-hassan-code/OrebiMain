import Container from "../Components/Container"
import { MdLocalShipping } from "react-icons/md";
import banner from "../assets/Banner.jpg"
import image from "../assets/Image.png"
import image_1 from "../assets/Image (1).png"
import image_2 from "../assets/Image (2).png"
import Image from "../Components/Image";


const Home = () => {
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
    <section className="border-y border-[#F0F0F0]">
      <Container>
        <div className="flex justify-between items-center text-center p-8">
          <div className=" flex items-center gap-x-2">
            <p className="font-bold text-black text-4xl">2</p>
            <p className="text-[16px] text-[#6D6D6D]">Two years warranty</p>
          </div>
          <div className=" flex items-center gap-x-2">
            <MdLocalShipping className="font-bold text-black text-4xl"/>
            <p className="text-[16px] text-[#6D6D6D]">Free shipping</p>
          </div>
          <div className=" flex items-center gap-x-2">
            <p className="font-bold text-black text-4xl"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.98165 1.62584e-05C7.30952 0.00481465 4.88335 1.0578 3.09214 2.76957L1.65206 1.32949C1.04238 0.719815 0 1.15159 0 2.01377V7.41937C0 7.95385 0.433266 8.38711 0.967742 8.38711H6.37335C7.23552 8.38711 7.6673 7.34473 7.05766 6.73506L5.37419 5.05159C6.61871 3.88631 8.22907 3.24082 9.93992 3.22606C13.6656 3.19389 16.8062 6.20901 16.774 10.0584C16.7434 13.7101 13.7829 16.7742 10 16.7742C8.34165 16.7742 6.77431 16.1824 5.53911 15.0986C5.34786 14.9308 5.05903 14.941 4.87911 15.1209L3.27984 16.7201C3.08339 16.9166 3.0931 17.2369 3.29927 17.4231C5.0725 19.0247 7.42234 20 10 20C15.5228 20 20 15.5229 20 10.0001C20 4.48361 15.4981 -0.00986277 9.98165 1.62584e-05Z" fill="#262626"/>
            </svg></p>
            <p className="text-[16px] text-[#6D6D6D]">Return policy in 30 days</p>
          </div>
        </div>
      </Container>
    </section>

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
                <h1 className="font-bold text-[49px] text-[#262626]">Electronics Sale</h1>
                  <div className="flex items-center text-center gap-x-2">
                    <div className="text-[16px] text-[#6D6D6D] items-center">Up to </div>
                    <div className="font-bold text-[40px] text-[#262626]">70%</div>
                    <div className="text-[16px] text-[#6D6D6D] items-center">sale for all electronics!</div>
                  </div>
                  <button className="w-1/2 text-white text-[14px] font-bold bg-[#262626] px-10 py-5">Shop Now</button>
              </div>
            </div>
            <div className="relative">
              <Image imgSrc={image_2}/>
              <div className="flex flex-col gap-y-2 absolute left-10 bottom-5">
                <h1 className="font-bold text-[49px] text-[#262626]">Furniture Offer</h1>
                  <div className="flex items-center text-center gap-x-2">
                    <div className="text-[16px] text-[#6D6D6D] items-center">Up to </div>
                    <div className="font-bold text-[40px] text-[#262626]">50%</div>
                    <div className="text-[16px] text-[#6D6D6D] items-center">sale for all furniture items!</div>
                  </div>
                  <button className="w-1/2 text-white text-[14px] font-bold bg-[#262626] px-10 py-5">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Home