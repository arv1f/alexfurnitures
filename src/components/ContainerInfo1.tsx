import { ProgressDotsIcon, LeftArrowIcon, RightArrowIcon } from "../public/icons/ProgressDotsIcon";
export default function ContainerInfo1() {
  return (
    <div className="relative h-[500px] grid grid-rows-[60%_36%]  md:grid-rows-[54%_50%] lg:block lg:grid-rows-[]">
      <img className="absolute z-1 scale-x-[-1] rounded-md w-full h-full object-cover bg-cover bg-center"
      style={{
      backgroundImage: `linear-gradient(191.25deg, rgba(0, 0, 0, 0) 8.99%, rgba(0, 0, 0, 0.45) 57.63%), url(a_high-end_minimalist_furniture_display_showcasing_alex-mebels_core_product_categories_kitchens_tab_oe4tc7bdonyzj9lz22k7_2.png)`
      }}
      src="src\assets\images\image\0e7951d5ddd77198e289657cb0613c917a98cf84 (1).png" alt="" />
      <div className="lg:row-start-1 z-1 relative m-[20px] md:m-[40px] lg:m-[50px]">
        <div className="space-y-12 md:space-y-16 lg:space-y-6 mt-[22px] lg:mt-[250px] grid">
          <h1 className="w-full h-[60px] md:h-[75px] font-inter font-bold text-lg md:text-2xl lg:text-[33px] leading-normal md:leading-[75px] tracking-[0.02em] uppercase text-white">
            Мебель вашей мечты — создана для жизни
          </h1>
          <p className="w-full max-w-[691px] h-[45px] md:h-[60px] font-inter font-normal text-sm md:text-[20px] leading-[1.5] text-white">
            Эксклюзивные коллекции от фабрики «Алекс-Мебель» — кухни, гостиные, спальни и детские, созданные с любовью к деталям.
          </p>
        </div>
      </div>
      <div className="lg:row-start-2 z-1 relative m-[20px] md:m-[40px] lg:m-[50px] my-0">
        <div className="h-full static
        grid grid-cols-[40%_auto_73px_10px]
        ">

          <button className="
            lg:hidden row-start-1 hover:bg-amber-500
            flex flex-row items-center justify-center
            w-[206px] max-h-[40px] bg-[#F3BC2B] rounded-[5px] text-white
          ">Оставить заявку</button>
          <div className="static grid grid-cols-[35%_auto_53px_30px] sm:grid-cols-[38%_auto_53px_30px] md:grid-cols-[40%_auto_53px_30px] lg:grid-cols-[45%_auto_53px_30px] row-start-2 w-full absolute bottom-0 left-0">
            <div className="lg:hidden col-start-2 absolute bottom-1">
              <ProgressDotsIcon/>
            </div>
            <a className="lg:hidden col-start-1 w-[30px] active:transform-none focus:outline-none">
              <LeftArrowIcon/>
            </a>
            <a className="lg:hidden col-start-4 w-[30px] active:transform-none focus:outline-none">
              <RightArrowIcon/>
            </a>
          </div>     

          <button className="hidden col-start-1 -mt-4 hover:bg-amber-500
            lg:flex flex-row items-center justify-center
            w-[206px] max-h-[40px] bg-[#F3BC2B] rounded-[5px] text-white
          ">Оставить заявку</button>
          <div className="hidden lg:block lg:col-start-2 ml-8 -mt-3.5">
            <ProgressDotsIcon/>
          </div>
          <a className="hidden lg:block lg:col-start-3 -mt-3 w-[30px] active:transform-none focus:outline-none">
            <LeftArrowIcon/>
          </a>
          <a className="hidden lg:block lg:col-start-4 -mt-3 w-[30px] active:transform-none focus:outline-none">
            <RightArrowIcon/>
          </a>
        </div>

      </div>
    </div>
  );
};