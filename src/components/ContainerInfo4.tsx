export default function ContainerInfo4() {
  return (
    <div className="grid grid-rows-[5%_38%_7%_10%] md:grid-rows-[7%_28%_7%_10%] lg:grid-rows-[5%_75%] lg:grid-cols-[48.5%_auto] gap-x-[1.5%] gap-y-4 lg:max-h-[680px]">
        <div className="row-start-4 lg:row-start-1 col-start-1 w-full h-[680px] bg-[url('a_modern_professional_office_building_exterior_representing_-_furniture_company_the_image_should_co_i5qw5pw5y52xpm5f88pe_2.png')] rounded-[20px] overflow-hidden">
          <img className="w-full h-[60%] lg:h-full object-cover" src="src\assets\images\image\8e32ed76445f5de8639183b969fed2ced6ddac0a.png" alt="" />
        </div>
          <span className="row-start-1 lg:col-start-2 text-[30px] md:text-3xl lg:text-4xl font-bold
          leading-[135%] tracking-[0.02em] text-[#333333] text-nowrap">О компании</span>
          <div className="row-start-2 lg:col-start-2 w-[96%] font-normal text-xs lg:text-sm leading-[150%] text-[#454545]">
            <p>История развития компании «Алекс-мебель» является прекрасным примером успешного бизнеса. Начало, которого было заложено в 2000 году в день открытия компании. С момента своего основания «Алекс-мебель» существенно расширила ассортиментный ряд выпускаемой продукции. Базовую линейку пополнили: мебель из стекла, офисная мебель, шкафы купе, мебель для магазинов и торговых павильонов.</p>
            <br />
            <p>Тонко чувствуя потребности рынка компания «Алекс-мебель» с 2006 года предлагает клиентам услугу пескоструйной обработки стекла. Данная технология позволяет нанести рисунок любой сложности на стеклянную и зеркальную поверхность. Так офисная мебель и торговая мебель может быть дополнена элементами фирменного стиля (логотипом, слоганом и т.д.), а мебель для дома способна приобрести свою «изюминку» и изящество.</p>
          </div>
          <div className="row-start-3 lg:row-start-3 lg:col-start-2 grid grid-rows-2 lg:grid-cols-[42%_42%] gap-1">
            <button className="
            flex items-center justify-center text-nowrap hover:bg-amber-500
            w-[180px] lg:w-[90%] max-h-[40px] bg-[#F3BC2B] rounded-[5px] text-white
          ">Запросить прайс</button>
          <button className="
            flex items-center justify-center hover:bg-[hsl(0,0,97.5)]
            w-[180px] lg:w-[90%] max-h-[40px] bg-[#FFFFFF] text-[#F3BC2B] border-2 border-[#F3BC2B] rounded-[5px]
          ">Подробнее</button>
          </div>
    </div>
  );
};