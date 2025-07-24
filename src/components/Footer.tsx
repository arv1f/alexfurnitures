import CRANicon from "../public/icons/CRANicon";
export default function Footer() {
  return (
    <div className="pt-8 lg:pt-0 grid grid-cols-1 grid-rows-[] gap-3 lg:gap-0 lg:grid-cols-[45%_30%_25%] lg:grid-rows-[40px_51px_53px_23px_59px_38px_103px] mt-[150px] lg:mt-[100px] min-h-[432px] text-sm border-t border-[#B4B4B4]">
      <div className="row-start-1 lg:col-start-1 lg:row-start-2 flex items-center">
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
      <span className="row-start-2 lg:row-start-4 max-w-[400px]">Более 10 лет продукция компании «Алекс-мебель» уверенно завоевывает мебельный рынок России.</span>
      <span className="row-start-3 lg:row-start-6 lg:mt-[5%]">Время работы:</span>
      <span className="row-start-4 lg:row-start-7 lg:mt-[5%]">Пн-Вс: 08:00-17:00,<br/>Перерыв: 12:00-13:00</span>
      <span className="row-start-10 lg:row-start-8 text-[#9A9898]">©2013 - 2025, ООО “Алекс-Мебель”</span>


      <span className="row-start-5 lg:row-start-2 lg:col-start-2 font-bold">Страницы</span>
      <div className="row-start-6 lg:row-start-3 lg:col-start-2 grid grid-rows-[30px, 30px, 30px, 30px]">
        <span className="row-start-2">Главная</span>
        <span className="row-start-3">Производство</span>
        <span className="row-start-4">Партнерам</span>
        <span className="row-start-5">Контакты</span>
      </div>
      <span className="row-start-11 lg:row-start-8 lg:col-start-2 text-[#9A9898]">Политика конфиденциальности</span>


      <span className="row-start-7 lg:row-start-2 lg:col-start-3 font-bold">Контакты</span>
      <span className="row-start-8 lg:row-start-3 lg:col-start-3">442530, Пензенская обл., г. Кузнецк, ул. Октябрьская, д.146, строение 2</span>
      <span className="row-start-9 lg:row-start-5 lg:col-start-3 lg:mt-[20%]">
        8 (841-57) 2-83-70<br/>
        8-937-424-21-31<br/>
        8-927-378-05-50<br/>
        alexmebel158@yandex.ru</span>
      <div className="row-start-12 lg:row-start-8 lg:col-start-3 flex items-center gap-2 mb-[20%]">
        <CRANicon/>
        <span className="text-[#9A9898]">Разработано CRAN Project</span>
      </div>

    </div>
  );
};