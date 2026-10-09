"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projetos = [
  { imagem: "/images/portfolio/remocao-virus.png", titulo: "Remoção de Vírus + Otimização do Sistema", link: null },
  { imagem: "/images/portfolio/ex1.png", titulo: "Imagem demonstrativa", link: "https://siteexemplo.com.br" },
  { imagem: "/images/portfolio/ex2.png", titulo: "Imagem demonstrativa", link: null },
  { imagem: "/images/portfolio/ex3.png", titulo: "Imagem demonstrativa", link: "https://outrosite.com.br" },
  { imagem: "/images/portfolio/ex4.png", titulo: "Imagem demonstrativa", link: null },
];

// Calcula a distância "circular" entre um item e o item atual.
// Isso é o que permite o loop infinito: em vez de ir de 0 até o fim
// e parar, a contagem "dá a volta" pelo lado mais curto.
function calcularDistancia(indice: number, indiceAtual: number, total: number) {
  let diferenca = indice - indiceAtual;
  if (diferenca > total / 2) diferenca -= total;
  if (diferenca < -total / 2) diferenca += total;
  return diferenca;
}

export default function Portfolio() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAtual((anterior) => (anterior + 1) % projetos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function irPara(indice: number) {
    setIndiceAtual(indice);
  }

  return (
    <section id="portfolio" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">Serviços Realizados</h2>

      <div className="relative max-w-xl mx-auto h-[260px]">
        {projetos.map((projeto, indice) => {
          const distancia = calcularDistancia(indice, indiceAtual, projetos.length);

          // Só renderiza cartas até 2 posições de distância pra cada lado;
          // o resto fica invisível e "fora do caminho" dos cliques.
          if (Math.abs(distancia) > 2) {
            return null;
          }

          // Define a aparência de cada carta com base na distância dela
          // até a carta central (distancia === 0).
          let transform = "";
          let opacity = 1;
          let zIndex = 30;
          let pointerEvents: "auto" | "none" = "auto";

          if (distancia === 0) {
            transform = "translateX(0%) scale(1)";
            zIndex = 30;
          } else if (distancia === -1) {
            transform = "translateX(-55%) scale(0.85)";
            opacity = 0.6;
            zIndex = 20;
          } else if (distancia === 1) {
            transform = "translateX(55%) scale(0.85)";
            opacity = 0.6;
            zIndex = 20;
          } else if (distancia === -2) {
            transform = "translateX(-95%) scale(0.7)";
            opacity = 0.3;
            zIndex = 10;
          } else if (distancia === 2) {
            transform = "translateX(95%) scale(0.7)";
            opacity = 0.3;
            zIndex = 10;
          }

          const conteudoImagem = (
            <Image
              src={projeto.imagem}
              alt={projeto.titulo}
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          );

          return (
            <div
              key={indice}
              onClick={() => irPara(indice)}
              className="absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer"
              style={{ transform, opacity, zIndex, pointerEvents }}
            >
              {distancia === 0 && projeto.link ? (
                <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  {conteudoImagem}
                </a>
              ) : (
                conteudoImagem
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-lg">{projetos[indiceAtual].titulo}</p>

      <div className="flex justify-center gap-2 mt-6">
        {projetos.map((_, indice) => (
          <button
            key={indice}
            onClick={() => irPara(indice)}
            className={`w-3 h-3 rounded-full ${
              indice === indiceAtual ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}