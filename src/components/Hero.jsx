import { Button } from "./ui/button";
import Ckris from "./Ckris";

export const Hero = () => {
  return (
    <div className="min-h-screen w-full md:gap-[190px] z-[-5] bg-[url('/bghero.jpg')] bg-cover bg-center flex items-center text-center justify-center flex-col md:flex-row py-10">
      <div id="overlay" className="h-screen w-full bg-black absolute z-[-3]"></div>
      <div>
        <h1 className="md:text-6xl text-[2.8rem]  font-semibold text-[#add666]/90 z-2">
          &lt;CkristianFelipe/&gt;
        </h1>
        <h2 className="text-white/80 text-2xl md:text-start md:pl-12">
          Desenvolvedor Front-End
        </h2>
    
      </div>

      <Ckris/>
         
    </div>
  );
};
