"use client";

import { useState } from "react";

const perguntas = [
  {
    pergunta: "Você atende a domicílio?",
    resposta: "Sim, atendo presencialmente na região de Belo Horizonte e também remotamente.",
  },
  {
    pergunta: "Quais formas de pagamento você aceita?",
    resposta: "Aceito Pix, dinheiro e cartão.",
  },
  {
    pergunta: "Qual o prazo médio de um serviço?",
    resposta: "Depende do serviço, mas manutenções simples costumam ser resolvidas no mesmo dia.",
  },
];

export default function Faq() {
  const [indiceAberto, setIndiceAberto] = useState<number | null>(null);

  function alternarPergunta(indice: number) {
    setIndiceAberto(indiceAberto === indice ? null : indice);
  }

  return (
    <section id="faq" className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Dúvidas Frequentes</h2>

      {perguntas.map((item, indice) => (
        <div key={indice} className="border-b border-white/20 py-4">
          <button
            onClick={() => alternarPergunta(indice)}
            className="w-full text-left flex justify-between items-center font-semibold"
          >
            {item.pergunta}
            <span>{indiceAberto === indice ? "−" : "+"}</span>
          </button>

          {indiceAberto === indice && (
            <p className="mt-2 text-white/80">{item.resposta}</p>
          )}
        </div>
      ))}
    </section>
  );
}