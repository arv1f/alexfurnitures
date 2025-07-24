import SearchIcon from "../public/icons/SearchIcon";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-[120%] -ml-[10%] bg-white px-[10%]">
      <div className="py-[10px] lg:py-[15px] xl:py-[20px] gap-1 border-b border-[#B4B4B4]
        grid grid-cols-[90%_10%] lg:grid-cols-[28%_auto_180px_40px] relative">
        <div className="col-start-1 flex items-center">
        <div className="flex items-center">
          
          <div className="relative flex items-center w-10 md:w-12">
            <div className="w-9 h-8 md:w-11 md:h-10 lg:w-10 lg:h-9 border-2 border-gray-900 rounded-tl rounded-br flex items-center justify-center">
              <span className="font-['Bebas_Neue'] font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-900">A</span>
            </div>
            <div className="w-8 md:w-10 h-[0.7px] lg:h-[1.5px] bg-gray-900 transform rotate-90 absolute left-6 md:left-7"></div>
          </div>
          <div className="ml-1">
            <span className="font-['Bebas_Neue'] font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-900 text-nowrap">
              Алекс-Мебель
            </span>
          </div>
        </div>
      </div>
      
        <nav className="hidden lg:flex col-start-2 mt-[13px] -ml-[2%] xl:ml-[1.25%] flex-grow justify-center mx-4">
          <div className="grid grid-cols-[11%_11%_12%_38%_26%] gap-x-2 lg:gap-x-4 w-full max-w-lg">
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors">Главная</a>
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors">Новости</a>
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors">Партнерам</a>
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors">Оформление заказа</a>
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors -ml-[75%]">О компании</a>
          </div>
        </nav>

      <div className="hidden lg:flex col-start-3">
        <button className="w-[175px] xl:w-[195px] xl:-ml-3 max-h-[44px] mt-[5px] md:flex
        items-center justify-center bg-[#F3BC2B] rounded-md px-3 py-2 hover:bg-amber-500 transition-colors">
          <span className="text-white text-xs xl:text-[16.5px] whitespace-nowrap">
            Условия сотрудничества
          </span>
        </button>
      </div>

      <button className="absolute right-0 lg:top-[22px] xl:top-[27px] hidden lg:flex lg:items-center">
          <a className="w-6 h-6 md:w-7 md:h-7">
            <SearchIcon/>
          </a>
          
      </button>

        <button className="lg:hidden flex flex-col justify-center items-center w-10 h-10 -ml-[60%] sm:-ml-0">
          <div className="w-6 h-0.5 bg-[#F3BC2B] mb-1.5"></div>
          <div className="w-4 h-0.5 bg-[#F3BC2B] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#F3BC2B]"></div>
        </button>

      </div>
    </header>
  );
}