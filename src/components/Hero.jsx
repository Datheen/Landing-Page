import { Button } from "./ui/button";
import Ckris from "./Ckris";
import { StatefulButtonDemo } from "./StatefulButtonDemo";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const ckrisRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.children, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        transformOrigin: "top center",
        duration: 1,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current.children, {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      });

      gsap.from(ckrisRef.current, {
        opacity: 0,
        scale: 0.5,
        rotation: -180,
        duration: 1.5,
        delay: 0.3,
        ease: "power4.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen w-full md:gap-[190px] relative bg-[url('/bghero.jpg')] bg-cover bg-center flex items-center text-center justify-center flex-col md:flex-row py-10">
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10">
        <h1 ref={titleRef} className="md:text-6xl text-[2.8rem] 2xl:mt-[-150px] font-semibold text-primary/90 z-2">
          {splitText("<CkristianFelipe/>")}
        </h1>
        <h2 ref={subtitleRef} className="text-white/80 text-2xl text-shadow md:text-start md:pl-12">
          Desenvolvedor Front-End
        </h2>
    <div ref={ctaRef} id="CTA" className="mt-6 flex ml-5"><button className="scale-75 shadow-[inset_0_0_0_2px_#B2D649] text-zinc-800 px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-[#B2D649]/90 hover:bg-[#B2D649] hover:text-zinc-800 active:opacity-40 -mr-7">
  Contato
</button><button className="scale-75 shadow-[inset_0_0_0_2px_#B2D649] text-primary px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#B2D649] hover:text-zinc-800 active:opacity-40 ">
  Ver mais
</button></div>
      </div>

      <div ref={ckrisRef} className="relative z-10">
        <Ckris/>
      </div>
         
    </div>
  );
};
