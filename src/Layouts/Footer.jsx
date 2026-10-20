import Container from "../Components/Container"
import { Link } from "react-router-dom"
import Flex from "../Components/Flex"
import Image from "../Components/Image"
import logo from "../assets/OREBI©.png"
import { FaFacebookF, FaLinkedin , FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] px-20 py-15">
      <Container>
        <Flex className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8'}>
          <div className="flex flex-col gap-y-5">
            <h3 className={"text-[16px] font-bold text-[#262626]"}>MENU</h3>
            <ul className="gap-y-5">
              <li><Link to={'/home'} className={"text-[#767676] mt-5 hover:font-bold hover:text-[#262626] transition-all duration-300"}>Home</Link></li>
              <li><Link to={'/shop'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Shop</Link></li>
              <li><Link to={'/about'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>About</Link></li>
              <li><Link to={'/contact'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Contact</Link></li>
              <li><Link to={'/journal'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Journal</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-5">
            <h3 className={"text-[16px] font-bold text-[#262626]"}>SHOP</h3>
            <ul className="gap-y-5">
              <li><Link to={'/home'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Category 1</Link></li>
              <li><Link to={'/shop'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Category 2</Link></li>
              <li><Link to={'/about'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Category 3</Link></li>
              <li><Link to={'/contact'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Category 4</Link></li>
              <li><Link to={'/journal'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Category 5</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-5">
            <h3 className={"text-[16px] font-bold text-[#262626]"}>HELP</h3>
            <ul className="gap-y-5">
              <li><Link to={'/shop'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Privacy Policy</Link></li>
              <li><Link to={'/about'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Terms & Conditions</Link></li>
              <li><Link to={'/contact'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Special E-shop</Link></li>
              <li><Link to={'/journal'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Shipping</Link></li>
              <li><Link to={'/home'} className={"text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300"}>Secure Payments</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="text-[16px] font-bold text-[#262626] -mt-14">
              <p>(052) 611-5711</p>
              <p>company@domain.com</p>
            </div>
            <p className="text-[14px] text-[#6D6D6D]">575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          <div className="-mt-31">
            <Image imgSrc={logo} className={''}/>
          </div>
        </Flex>
        <div className="flex items-center justify-between pt-20">
          <div className="flex items-center gap-x-5 text-2xl">
            <FaFacebookF/>
            <FaLinkedin />
            <FaInstagram />
          </div>
          <p className="text-[14px] text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer