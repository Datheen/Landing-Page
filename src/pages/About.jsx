import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Leaf, Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex bg-primary/10 rounded-full p-1 mb-6">
             <img className="w-[200px] rounded-full" src="/eu.jpg"/>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Cristian Felipe de Almeida
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sou estudante de Engenharia de Software e desenvolvedor focado em aplicações web modernas.
Tenho experiência com React, Angular e Vue.js, trabalhando com componentes reutilizáveis, reatividade e boas práticas.
Utilizo Tailwind CSS para criar interfaces responsivas, organizadas e performáticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex bg-red-300 rounded-full p-3 mb-4">
               <svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="-8 0 272 272"
  class="text-white/80"
  fill="none"
  aria-label="Angular"
  role="img"
>
  <defs>
  
    <mask id="a-cutout">
      <rect x="-8" y="0" width="272" height="272" fill="white" />
      <path
        d="M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z"
        fill="black"
      />
    </mask>
  </defs>

  
  <path
    d="M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z"
    fill="currentColor"
    mask="url(#a-cutout)"
  />
</svg>

              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Angular</h3>
              <p className="text-muted-foreground">
                Tenho experiência com Angular, utilizando componentes standalone, serviços e RxJS.
Já implementei buscas, filtros e rotas, criando interfaces responsivas com Tailwind CSS.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex bg-blue-400 rounded-full p-2 mb-4">
                <svg class="w-[50px] h-[50px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z"/>
  <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z"/>
</svg>

              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">React</h3>
              <p className="text-muted-foreground">
                Tenho experiência com React, desenvolvendo interfaces modernas e componentizadas.
Trabalho com hooks, componentes reutilizáveis e Tailwind CSS, criando aplicações performáticas e responsivas.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex bg-green-600 rounded-full p-2 mb-4">
                <svg class="w-[50px] h-[50px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3h-7.5ZM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021 4.486 4.5Z"/>
</svg>

              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Vue JS</h3>
              <p className="text-muted-foreground">
              Tenho experiência com Vue.js, desenvolvendo interfaces reativas e bem estruturadas.
Trabalho com componentes, reatividade, props e Tailwind CSS para criar aplicações modernas e responsivas.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 mb-12">
            <h2 className="font-heading text-3xl font-bold mb-6">Minha jornada com a tecnologia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
               Minha trajetória profissional começou como assistente administrativo, onde desenvolvi organização, responsabilidade e visão de processos. Foi nesse período que tive contato mais próximo com sistemas e ferramentas digitais, despertando um interesse cada vez maior pela tecnologia e pelo funcionamento dos softwares no dia a dia.
              </p>
              <p>
               Buscando transformar esse interesse em conhecimento, realizei cursos de Front-end e Informática Avançada pelo CETAM, além de Lógica de Programação no SENAI, onde fortalecei meu raciocínio lógico e minha base técnica. Esses estudos marcaram minha transição definitiva para a área de desenvolvimento.
              </p>
              <p>
                Atualmente, curso Engenharia de Software e atuo no desenvolvimento de aplicações web modernas, utilizando tecnologias como React, Angular e Vue.js, além de Tailwind CSS. Sigo em constante aprendizado, unindo experiência prática, base acadêmica e paixão por tecnologia para criar soluções eficientes e bem estruturadas.
              </p>
            </div>
          </div>

          <div className="bg-gradient-forest rounded-3xl p-8 md:p-12 text-center text-zinc-900 dark:text-white">
            <h2 className="font-heading text-3xl font-bold mb-4">Vamos construir algo juntos</h2>
            <p className="text-xl  mb-6">
              Atuo no desenvolvimento de aplicações web modernas, unindo tecnologia, organização e foco em resultado. Se você busca alguém comprometido, atento aos detalhes e preparado para transformar ideias em soluções reais, será um prazer colaborar com você.
            </p>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
