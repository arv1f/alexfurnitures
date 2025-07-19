export default function ContainerInfo1() {
  return (
    <div className="relative h-[500px]">
      <img className="absolute z-0 scale-x-[-1] rounded-md w-full h-full object-cover bg-cover bg-center"
      style={{
      backgroundImage: `linear-gradient(191.25deg, rgba(0, 0, 0, 0) 8.99%, rgba(0, 0, 0, 0.45) 57.63%), url(a_high-end_minimalist_furniture_display_showcasing_alex-mebels_core_product_categories_kitchens_tab_oe4tc7bdonyzj9lz22k7_2.png)`
      }}
      src="src\assets\images\image\0e7951d5ddd77198e289657cb0613c917a98cf84 (1).png" alt="" />
      <div className="z-1 relative m-[20px] md:m-[40px] lg:m-[50px]">
        <div className="space-y-4 md:space-y-6 mt-[22px] lg:mt-[250px] grid gap-8 md:gap-10 lg:gap-0">
          <h1 className="w-full max-w-[1319px] h-[60px] md:h-[75px] font-inter font-bold text-lg md:text-2xl lg:text-[33px] leading-normal md:leading-[75px] tracking-[0.02em] uppercase text-white">
            Мебель вашей мечты — создана для жизни
          </h1>
          <p className="w-full max-w-[691px] h-[45px] md:h-[60px] font-inter font-normal text-sm md:text-[20px] leading-[1.5] text-white">
            Эксклюзивные коллекции от фабрики «Алекс-Мебель» — кухни, гостиные, спальни и детские, созданные с любовью к деталям.
          </p>
        </div>
      </div>
      <div className="z-1 relative m-[20px] md:m-[40px] lg:m-[50px]">
        <div className="mt-[10%] lg:-mt-6 grid lg:grid-cols-[200px_auto_53px_10px]">
          <button className="
            hidden col-start-1
            lg:flex flex-row items-center justify-center p-[16px_24px] gap-2
            w-[206px] max-h-[40px] left-[50px] top-[555px] bg-[#F3BC2B] rounded-[5px] text-white
          ">Оставить заявку</button>
          <div className="col-start-2 hidden lg:block ml-[40%] lg:mt-3">
            <svg width="100" height="16" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill="#F3BC2B"/>
              <circle opacity="0.3" cx="36" cy="8" r="8" fill="white"/>
              <circle opacity="0.3" cx="64" cy="8" r="8" fill="white"/>
              <circle opacity="0.3" cx="92" cy="8" r="8" fill="white"/>
            </svg>
          </div>
          <div className="hidden lg:block lg:col-start-3 mt-1">
            <svg width="40" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 2L9 20L27 38" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="hidden lg:block lg:col-start-4 mt-1">
            <svg width="22" height="30" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L20 20L2 38" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <button className="
            lg:hidden mt-[15%] md:mt-[0%]
            flex flex-row items-center justify-center p-[16px_24px] gap-2
            w-[206px] max-h-[40px] left-[50px] top-[555px] bg-[#F3BC2B] rounded-[5px] text-white
          ">Оставить заявку</button>
          <div className="lg:hidden absolute left-[35%] -bottom-[150px] md:-bottom-[120px]">
            <svg width="100" height="16" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill="#F3BC2B"/>
              <circle opacity="0.3" cx="36" cy="8" r="8" fill="white"/>
              <circle opacity="0.3" cx="64" cy="8" r="8" fill="white"/>
              <circle opacity="0.3" cx="92" cy="8" r="8" fill="white"/>
            </svg>
          </div>
          <div className="lg:hidden absolute -bottom-[160px] md:-bottom-[130px]">
            <svg width="40" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 2L9 20L27 38" stroke="#AFAFAF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="lg:hidden mt-1 absolute -bottom-[160px] md:-bottom-[130px] right-1">
            <svg width="22" height="30" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L20 20L2 38" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};