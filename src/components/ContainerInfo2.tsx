import { PhoneIcon, MailIcon } from "../public/icons/ContactIcons";
export default function ContainerInfo2() {
  return (
  <div className="grid grid-rows-[50%_auto] md:grid-cols-[60%_auto] bg-[#F0F0F0] w-[120%] -ml-[10%] py-6 pb-10 md:pb-6 lg:py-[24px] px-[10%]">
    <div className="lg:mt-[13px]">
      <span
      className="w-full max-w-[680px] text-[30px] md:text-3xl lg:text-4xl font-bold
      leading-[135%] tracking-[0.02em] text-[#333333] self-stretch">Контакты для связи</span><br />
      <span
      className="w-full max-w-[680px] text-[16px] md:text-xs lg:text-sm font-normal
      leading-[150%] text-[#454545] mt-2 lg:mt-3" >Напишите или позвоните — менеджер проконсультирует бесплатно!</span>
    </div>
    <div className="mt-[7px]">
      <div className="flex items-center justify-center gap-3">
        <PhoneIcon/>
        <span className="w-full text-lg xl:text-[30px] font-semibold
        leading-[180%] text-[#F3BC2B]">8 (841-57) 2-83-70</span>
      </div><br />
      <div className="flex items-center justify-center gap-3">
        <MailIcon/>
        <span className="w-full h-10 text-lg xl:text-[30px] font-semibold
        leading-[180%] text-[#F3BC2B]">alexmebel158@yandex.ru</span>
      </div>
    </div>
  </div>
  );
};