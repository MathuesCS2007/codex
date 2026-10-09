import "../app/css/servicos.css";

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Meus Serviços</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Formatação e Reinstalação</h3>
          <p>Formatação e reinstalação do sistema operacional.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Ativação e Configuração</h3>
          <p>Ativação e configuração do sistema operacional e pacote Office.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Remoção de Vírus</h3>
          <p>Limpeza completa de malwares e otimização do sistema.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Criação de Sites</h3>
          <p>Desenvolvimento de sites modernos e responsivos para pequenos comércios e empresas.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Limpeza de Hardware</h3>
          <p>Limpeza completa do hardware do computador, incluindo troca de pasta térmica e substituição de ventiladores.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Troca de Hardware</h3>
          <p>Substituição de componentes com defeito, obsoletos ou apenas por outros melhores.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Melhoria de Desempenho</h3>
          <p>Configuração e otimização do sistema para melhorar o desempenho, além de troca de peças como memória, placa mãe e processador, e placa de vídeo.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Serviços de Formatação e Padronização</h3>
          <p>Formatação e padronização de documentos e revisão de layout.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Serviços de Digitação e Edição</h3>
          <p>Edição de textos, preparação de documentos, incluindo contratos particulares e outros documentos administrativos.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-xl">Emissão de Notas Fiscais</h3>
          <p>Emissão e organização de notas fiscais e conferência de dados.</p>
        </div>
      </div>
    </section>
  );
}