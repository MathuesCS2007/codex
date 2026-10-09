import "../app/css/hero.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <Image src="/images/logo_SF.png" alt="Codex Suporte & Web" width={400} height={300} priority />
      <p className="mt-4 text-lg">
        Manutenção, formatação e criação de sites para o seu negócio.
      </p>
    </section>
  );  
}