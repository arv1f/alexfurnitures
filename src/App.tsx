import Header from "./components/Header";
import ContainerInfo1 from "./components/ContainerInfo1";
import ContainerInfo2 from "./components/ContainerInfo2";
import ContainerInfo3 from "./components/ContainerInfo3";
import ContainerInfo4 from "./components/ContainerInfo4";
import ContainerInfo5 from "./components/ContainerInfo5";
import ContainerInfo6 from "./components/ContainerInfo6";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="grid grid-cols-12">
    <div className="col-span-1"></div>{/* отступ слева */}
    <div className="col-span-10 grid grid-rows-[0, ] gap-[60px] object-center">{/*Весь контент*/}
      <Header/>
      <ContainerInfo1/>
      <ContainerInfo2/>
      <ContainerInfo3/>
      <ContainerInfo4/>
      <ContainerInfo5/>
      <ContainerInfo6/>
      <Footer/>
    </div>
    <div className="col-span-1"></div>{/* отступ справа */}
  </div>
  );
};