export default function Ckris() {
  return (
    <div className="h-auto w-full max-w-sm bg-black/0 flex flex-col items-center pb-0">
      <div className="animate-float-wrapper">
        <div
          id="animar"
          className="mt-20 h-[250px] w-[250px] border-4 rounded-sm mb-[-290px] border-[#12d7e5] rotate-45 z-10 bg-white/0"
        ></div>
      </div>
      <img className="w-74 z-20" src="/ckris2.png" />
      <div className="animate-float-delayed-wrapper">
        <div
          id="animar"
          className="h-[250px] w-[250px] border-4 rounded-sm mr-[7px] mt-[-240px] border-[#12d7e5] rotate-45 z-10 bg-white/0"
        ></div>
      </div>
    </div>
  );
}
