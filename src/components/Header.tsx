export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-[100.0348%] -ml-[0.0174%] bg-white py-[10px] lg:py-[15px] xl:py-[20px] gap-1 border-b border-[#B4B4B4]
    grid grid-cols-[90%_10%] sm:grid-cols-[90%_10%] lg:grid-cols-[28%_auto_212px_40px]">
      <div className="col-start-1 flex items-center">
        <div className="flex items-center">
          
          <div className="relative flex items-center w-10 md:w-12">
            <div className="w-9 h-8 md:w-11 md:h-10 lg:w-10 lg:h-9 border-2 border-gray-900 rounded-tl rounded-br flex items-center justify-center">
              <span className="font-['Bebas_Neue'] font-bold text-lg sm:text-xl md:text-3xl lg:text-xl xl:text-3xl text-gray-900">A</span>
            </div>
            <div className="w-8 md:w-10 h-[0.7px] lg:h-[1.5px] bg-gray-900 transform rotate-90 absolute left-6 md:left-7"></div>
          </div>
          <div className="ml-1">
            <span className="font-['Bebas_Neue'] font-bold text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-3xl text-gray-900 text-nowrap">
              Алекс-Мебель
            </span>
          </div>
        </div>
      </div>
      
        <nav className="col-start-2 mt-[13px] xl:mt-[10px] -ml-[2%] xl:-ml-[0.25%] hidden lg:flex flex-grow justify-center mx-4">
          <div className="grid grid-cols-[11%_11%_12%_38%_26%] gap-x-2 lg:gap-x-4 w-full max-w-2xl">
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors">Главная</a>
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors">Новости</a>
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors">Партнерам</a>
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors">Оформление заказа</a>
            <a href="/" className="text-xs xl:text-sm text-center hover:text-amber-500 transition-colors -ml-[75%]">О компании</a>
          </div>
        </nav>

      <div className="hidden lg:flex col-start-3 space-x-4">
        <button className="lg:ml-[3%] xl:ml-0 w-[85%] xl:w-[95%] max-h-[40px] mt-[5px] md:flex items-center justify-center bg-[#F3BC2B] rounded-md px-3 py-2 hover:bg-amber-500 transition-colors">
          <span className="text-white text-xs xl:text-sm whitespace-nowrap">
            Условия сотрудничества
          </span>
        </button>
      </div>

      <button className="absolute right-0 lg:top-[22px] xl:top-[27px] hidden lg:flex lg:items-center col-start-4 lg:-ml-[10px] xl:-ml-0">
          <svg width="30" height="30" viewBox="0 0 30 30" className="w-6 h-6 md:w-7 md:h-7">
            <path d="M27.6667 30L17.1667 19.5C16.3333 20.1667 15.375 20.6944 14.2917 21.0833C13.2083 21.4722 12.0556 21.6667 10.8333 21.6667C7.80556 21.6667 5.24333 20.6178 3.14667 18.52C1.05 16.4222 0.00111199 13.86 8.81834e-07 10.8333C-0.00111023 7.80667 1.04778 5.24444 3.14667 3.14667C5.24556 1.04889 7.80778 0 10.8333 0C13.8589 0 16.4217 1.04889 18.5217 3.14667C20.6217 5.24444 21.67 7.80667 21.6667 10.8333C21.6667 12.0556 21.4722 13.2083 21.0833 14.2917C20.6944 15.375 20.1667 16.3333 19.5 17.1667L30 27.6667L27.6667 30ZM10.8333 18.3333C12.9167 18.3333 14.6878 17.6044 16.1467 16.1467C17.6056 14.6889 18.3344 12.9178 18.3333 10.8333C18.3322 8.74889 17.6033 6.97833 16.1467 5.52167C14.69 4.065 12.9189 3.33556 10.8333 3.33333C8.74778 3.33111 6.97722 4.06056 5.52167 5.52167C4.06611 6.98278 3.33667 8.75333 3.33333 10.8333C3.33 12.9133 4.05945 14.6844 5.52167 16.1467C6.98389 17.6089 8.75445 18.3378 10.8333 18.3333Z" fill="#F3BC2B"/>
          </svg>
      </button>

        <button className="lg:hidden flex flex-col justify-center items-center w-10 h-10 -ml-[60%] sm:-ml-0">
          <div className="w-6 h-0.5 bg-[#F3BC2B] mb-1.5"></div>
          <div className="w-4 h-0.5 bg-[#F3BC2B] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#F3BC2B]"></div>
        </button>

    </header>
  );
}