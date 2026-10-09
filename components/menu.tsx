import "../app/css/menu.css";

export default function Menu() {
  return (
    <nav className="fixed top-0 w-full flex justify-center gap-6 py-4 bg-[#050806]/80 backdrop-blur z-50">
      <a href="#inicio" className="text-white">Início</a>
      <a href="#servicos" className="text-white">Serviços</a>
      <a href="#portfolio" className="text-white">Portfólio</a>
      <a href="#sobre" className="text-white">Sobre</a>
      <a href="#contato" className="text-white">Contato</a>
      <a href="#faq" className="text-white">FAQ</a>
      <a href="#avaliacao" className="text-white">Avaliação</a>
    </nav>
  );
}
