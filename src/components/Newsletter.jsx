import { useState } from "react";
import { Input } from "./ui/input";
import { Leaf } from "lucide-react";
import { StatefulButtonDemo } from "./StatefulButtonDemo";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) return;

    // Simula envio de e-mail
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Seu E-mail foi salvo em breve entraremos em contato!");

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
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#A0C147"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
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
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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

            <StatefulButtonDemo onSubmit={handleSubmit} disabled={!email} />
          </div>
        </div>
      </div>
    </section>
  );
};
