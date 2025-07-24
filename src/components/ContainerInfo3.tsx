export default function ContainerInfo3() {
  return (
    <div className="h-[1000px] md:h-[540px] lg:h-[351px] mb-[60px] lg:mb-0
    grid grid-cols-1 md:grid-cols-[49.5%_1%_49.5%] lg:grid-cols-[25%_25%_25%_25%]
    grid-rows-[0_25%_25%_25%_25%] md:grid-rows-[0_50%_50%] lg:grid-rows-[20%_auto]">
      <span className="row-start-1 text-[30px] md:text-3xl lg:text-4xl font-bold
      leading-[135%] tracking-[0.02em] text-[#333333] text-nowrap">Почему мы?</span>
      <div className="row-start-2 md:col-start-1 lg:col-start-1">
        <BoxInfo sequence="01" description="Индивидуальный подход к каждому клиенту"/>
      </div>
      <div className="row-start-3 md:row-start-2 md:col-start-3 lg:row-start-2 lg:col-start-2">
        <BoxInfo sequence="02" description="Минимальные сроки исполнения работ без снижения качества"/>
      </div>
      <div className="row-start-4 md:row-start-3 md:col-start-1 lg:row-start-2 lg:col-start-3">
        <BoxInfo sequence="03" description="Собственное оборудование для всех видов мебели"/>
      </div>
      <div className="row-start-5 md:row-start-3 md:col-start-3 lg:row-start-2 lg:col-start-4">
        <BoxInfo sequence="04" description="Мебель отвечает всем требованиям к безопасности и экологичности"/>
      </div>
    </div>
  );
};
interface BoxInfoI {
  sequence : string;
  description: string;
}
const BoxInfo = ({sequence, description}:BoxInfoI) =>{
  return(
    <div className="p-[30px] pt-[20px] xl:pt-[30px] w-[95%] h-[238px] mt-[93px] lg:mt-[30px] mb-[10px] bg-white shadow-[0_0_12px_#E3E3E3] rounded-[20px]">
          <div className="w-[70px] h-[68px] font-bold text-[50px] lg:text-4xl leading-[135%] text-[#F3BC2B]">{sequence}</div>
          <div className="w-[100%] h-[70px] font-bold text-[23px] lg:text-sm 2xl:text-lg leading-[150%] text-[#212121]">{description}</div>
    </div>
  );
};