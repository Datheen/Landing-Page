import { Button } from "./ui/button";
import Ckris from "./Ckris";
import { StatefulButtonDemo } from "./StatefulButtonDemo";


export const Hero = () => {
  return (
    <div className="min-h-screen w-full md:gap-[190px] relative bg-[url('/bghero.jpg')] bg-cover bg-center flex items-center text-center justify-center flex-col md:flex-row py-10">
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10">
        <h1 className="md:text-6xl text-[2.8rem]  font-semibold text-primary/90 z-2">
          &lt;CkristianFelipe/&gt;
        </h1>
        <h2 className="text-white/80 text-2xl text-shadow md:text-start md:pl-12">
          Desenvolvedor Front-End
        </h2>
    <div id="CTA" className="mt-6 flex ml-5"><button className="scale-75 shadow-[inset_0_0_0_2px_#B2D649] text-zinc-800 px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-[#B2D649]/90 hover:bg-[#B2D649] hover:text-zinc-800 active:opacity-40 -mr-7">
  Contato
</button><button className="scale-75 shadow-[inset_0_0_0_2px_#B2D649] text-primary px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#B2D649] hover:text-zinc-800 active:opacity-40 ">
  Ver mais
</button></div>
      </div>

      <div className="relative z-10">
        <Ckris/>
      </div>
         
    </div>
  );
};
