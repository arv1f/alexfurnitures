import YellowLine from "../public/icons/YellowLineIcon";
export default function ContainerInfo5() {
  return (
    <div className="grid grid-rows-[10%_35%_45%_10%] sm:grid-rows-[10%_20%_50%_10%] lg:grid-rows-[15%_26%_42%_12%] xl:grid-rows-[15%_26%_47%_12%] w-full min-h-[600px] xl:min-h-[400px] gap-5">
      <span className="row-start-1 text-[30px] md:text-3xl lg:text-4xl font-bold
      leading-[135%] tracking-[0.02em] text-[#333333] text-nowrap">Партнерам</span>
      <span className="row-start-2 font-normal text-xs lg:text-sm leading-[150%] text-[#454545]">Более 18 лет продукция компании «Алекс-мебель» уверенно завоевывает мебельный рынок России. Высокое качество, современный дизайн, безупречная функциональность обеспечивают неизменно высокий спрос на все позиции ассортимента. Не последним в деле расширения оборотов производства является четкая 
       и отлаженная система работы с оптовым покупателем. В компании «Алекс-мебель» созданы все условия для комфортного сотрудничества:</span>
      
      <div className="row-start-3 grid grid-rows-6 md:grid-cols-[45%_55%] md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4 text-base lg:text-sm">
          <div className="flex items-center gap-2 col-start-1 row-start-1">
            <YellowLine/>
            оптовые цены от производителя;
          </div>
          <div className="flex items-center gap-2 row-start-2 md:col-start-2 md:row-start-1 lg:col-start-1 lg:row-start-2">
            <YellowLine/>
            широкая линейка (более 500 наименований) выпускаемой продукции;
          </div>

          <div className="flex items-center gap-2 col-start-1 row-start-3 md:row-start-2 lg:col-start-2 lg:row-start-1">
            <YellowLine/>
            отсутствие ограничений<br />
            по минимальной партии заказа;
          </div>
          <div className="flex items-center gap-2 row-start-4 md:col-start-2 md:row-start-2">
            <YellowLine/>
            доставка по всей России;
          </div>

          <div className="flex items-center gap-2 row-start-5 md:row-start-3 md:col-start-1 lg:col-start-3 lg:row-start-1">
            <YellowLine/>
            система бонусов (скидок);
          </div>
          <div className="flex items-center gap-2 row-start-6 md:row-start-3 md:col-start-2 lg:col-start-3 lg:row-start-2">
            <YellowLine/>
            возможность изготовления партии по чертежам и размерам заказчика.
          </div>
      </div>
      
      <button className="
        flex items-center justify-center row-start-4
        w-[180px] lg:w-[250px] max-h-[40px] bg-[#F3BC2B] rounded-[5px] text-white
      ">Подробнее</button>
    </div>
  );
};