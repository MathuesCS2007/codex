import "../app/css/sobre.css";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Sobre Mim</h2>
      <div className="max-w-5xl mx-auto text-justify">
        <Image
          src="/images/minha-foto.png"
          alt="Foto de Matheus, criador da Codex Suporte & Web"
          width={250}
          height={250}
          className="rounded-lg float-left mr-6 mb-4"
        />
        <p className="max-w-5xl mx-auto text-justify">
          Meu nome é Matheus Cardoso Silva, sou o criador da Codex Suporte e Web, site criado com o propósito de oferecer 
          soluções na área de tecnologia, informática e desenvolvimento web, de forma mais abrangente, unindo conhecimento técnico, 
          profissionalismo e compromisso com a qualidade dos serviços prestados.
        </p>
        <p className="max-w-5xl mx-auto text-justify">
          Minha formação na área de tecnologia teve início no Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais (IFMG) – 
          Campus São João Evangelista, onde concluí o curso Técnico em Informática. Durante minha formação, desenvolvi conhecimentos em 
          diferentes áreas da tecnologia da informação, incluindo desenvolvimento de sistemas, programação, bancos de dados, redes de 
          computadores, manutenção e suporte técnico, além de outras competências fundamentais para atuação profissional no setor.
        </p>
        <p className="max-w-5x1 mx-auto text-justify">
          Buscando ampliar continuamente meus conhecimentos e minha capacidade de desenvolver soluções cada vez mais completas, atualmente 
          curso Engenharia da Computação na Universidade Federal de Minas Gerais (UFMG). A graduação representa uma importante etapa da minha 
          formação acadêmica e profissional, permitindo aprofundar conhecimentos relacionados à computação, engenharia, desenvolvimento de 
          software, sistemas computacionais e tecnologias emergentes.
        </p>
        <p className="max-w-5x1 mx-auto text-justify">
          A criação da Codex Suporte e Web surgiu da união entre minha formação, meu interesse pela tecnologia e meu objetivo de transformar 
          conhecimento técnico em soluções práticas e eficientes, além de abranger uma ampla gama de serviços, aumentar a visibilidade do meu 
          trabalho e facilitar o processo de comunicação com clientes e pessoas interessadas em meus projetos. 
        </p>
        <p className="max-w-5x1 mx-auto text-justify">
          Meu trabalho é pautado pela responsabilidade, pela busca constante de aperfeiçoamento e pela preocupação em compreender as 
          necessidades de cada cliente antes de propor uma solução. Me esforço paraconstruir um trabalho baseado em confiança, qualidade e 
          profissionalismo, oferecendo soluções que atendam às necessidades de cada cliente e, ao mesmo tempo, acompanhando a constante 
          evolução do setor de tecnologia. Acredito que a tecnologia deve ser utilizada de maneira estratégica, acessível e eficiente, 
          contribuindo para resolver problemas, otimizar processos e proporcionar melhores experiências. Por isso, busco desenvolver cada 
          projeto com atenção aos detalhes, organização e compromisso com os resultados.
        </p>
        <p className="max-w-5x1 mx-auto text-justify">
          Minha trajetória profissional está em constante construção, e continuo investindo em minha formação e no aprimoramento das minhas 
          habilidades para acompanhar as transformações do mercado e oferecer um serviço cada vez mais qualificado.
        </p>
      </div>
    </section>
  );
}
