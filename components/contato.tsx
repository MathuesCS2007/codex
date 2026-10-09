import "../app/css/contato.css";

export default function Contato() {
  return (
    <section id="contato" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contato</h2>
      <p>Entre em contato comigo para marcar uma reunião pessoal por Email ou WhatsApp.</p>
      <p>Assim discutiremos sobre suas necessidades e faremos um orçamento do serviço.</p>
      <a href="https://wa.me/5533998461935" className="block mt-6 mb-3 text-lg">
        WhatsApp: (33) 99846-1935
      </a>
      <a href="mailto:matheuscardosopc2007@gmail.com" className="block text-lg">
        Email: matheuscardosopc2007@gmail.com
      </a>
    </section>
  );
}