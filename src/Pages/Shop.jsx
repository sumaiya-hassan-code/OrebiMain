import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Sidebar from "../Layouts/Sidebar";


const Shop = () => {
 

  return (
    <>
    <div className="p-10">
      <Container>
        <div className="mt-10 flex flex-col gap-x-2">
          <p className="text-[49px] font-bold text-[#262626]">Products</p>
          <p className="text-[12px] text-[#767676]">Home  &gt;  Products</p>
        </div>
        <Flex
            className={"mt-20"}>
          <div className="w-full lg:w-1/5 md:block">
            <Sidebar/>
          </div>
        </Flex>
      </Container>
    </div>
    </>
  );
};

export default Shop;