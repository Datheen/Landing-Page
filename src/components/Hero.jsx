import heroImage from "@/assets/heroimg.webp";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      <div className="absolute inset-0 gradient-hero opacity-25" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 id="hero-text" className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Bem vindo a Greenleaf studio
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Descubra a beleza da natureza em cada folha
        </p>
        <Button
          onClick={scrollToContent}
          size="lg"
          className="rounded-full bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/30 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Explorar artigos
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};
