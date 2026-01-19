import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

 

    setEmail("");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="
            rounded-3xl p-8 sm:p-12 shadow-large text-center
            bg-white
            dark:bg-zinc-900 dark:border dark:border-white/10
          "
        >
          {/* Ícone */}
          <div className="flex justify-center mb-6">
            <div className="rounded-full p-4 animate-float bg-zinc-100 dark:bg-white/10 backdrop-blur-sm">
              <Leaf className="h-8 w-8 text-green-600 dark:text-white" />
            </div>
          </div>

          {/* Título */}
          <h2
            className="
              font-heading text-3xl sm:text-4xl font-bold mb-4
              text-zinc-900 dark:text-white
            "
          >
            Entre em contato conosco e faça seu orçamento gratuito!
          </h2>

          {/* Texto muted */}
          <p
            className="
              text-lg mb-8 max-w-2xl mx-auto
              text-zinc-600 dark:text-white/70
            "
          >
            Insira seu e-mail abaixo que em breve nossa equipe entrará em contato
            com você.
          </p>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                flex-1 rounded-full
                bg-zinc-50 text-zinc-900 border-zinc-300
                placeholder:text-zinc-400
                dark:bg-white/10 dark:text-white dark:border-white/15
                dark:placeholder:text-white/50
                focus-visible:ring-green-500
              "
            />

            <Button
              type="submit"
              size="lg"
              className="
                rounded-full
                bg-green-600 text-white hover:bg-green-700
                dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90
              "
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
