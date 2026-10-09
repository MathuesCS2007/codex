import Image from "next/image";

const avaliacoes = [
  "/images/avaliacao/avaliacao1.png",
  "/images/avaliacao/avaliacao2.png",
  "/images/avaliacao/avaliacao3.png",
];

export default function Avaliacoes() {
  return (
    <section id="avaliacao" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">O que dizem meus clientes</h2>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {avaliacoes.map((imagem, indice) => (
          <Image
            key={indice}
            src={imagem}
            alt={`Avaliação de cliente ${indice + 1}`}
            width={400}
            height={500}
            className="rounded-lg mx-auto"
          />
        ))}
      </div>
    </section>
  );
}