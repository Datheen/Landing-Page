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
        <h1
          ref={titleRef}
          className="md:text-6xl text-[2.8rem] 2xl:mt-[-200px] font-semibold text-primary/90 z-2"
        >
          {splitText("<CkristianFelipe/>")}
        </h1>
        <h2
          ref={subtitleRef}
          className="text-white/80 text-2xl text-shadow md:text-start md:pl-12"
        >
          Desenvolvedor Front-End
        </h2>
        <div ref={ctaRef} id="CTA" className="mt-6 flex ml-5">
          <button className="flex gap-2 scale-75 shadow-[inset_0_0_0_2px_#B2D649] text-zinc-800 px-8 py-4 rounded-full tracking-widest uppercase font-bold bg-[#B2D649]/90 hover:bg-[#B2D649] hover:text-zinc-800 active:opacity-40 -mr-7">
            Contato
            <svg
              class="w-[24px] h-[24px] text-zinc-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                clip-rule="evenodd"
              />
              <path
                fill="currentColor"
                d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
              />
            </svg>
          </button>
          <button className="scale-75 shadow-[inset_0_0_0_2px_#B2D649] text-primary px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#B2D649] hover:text-zinc-800 active:opacity-40 ">
            Ver mais
          </button>
        </div>
      </div>

      <div ref={ckrisRef} className="relative z-10 2xl:mt-[-200px]">
        <Ckris />
      </div>
    </div>
  );
};
