export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Termos de Uso</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar esta plataforma, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Uso da Plataforma</h2>
          <p>
            Você concorda em usar a plataforma apenas para fins legais e de uma maneira que não infrinja os direitos de, restrinja ou iniba o uso e aproveitamento da plataforma por qualquer terceiro.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Contas de Usuário</h2>
          <p>
            Para acessar certos recursos da plataforma, você pode ser solicitado a criar uma conta. Você é responsável por manter a confidencialidade de sua conta e senha.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Propriedade Intelectual</h2>
          <p>
            O conteúdo, organização, gráficos, design, compilação e outros assuntos relacionados à plataforma são protegidos por direitos autorais, marcas registradas e outros direitos de propriedade.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Limitação de Responsabilidade</h2>
          <p>
            A plataforma não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <a href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
            &larr; Voltar para o Cadastro
          </a>
        </div>
      </div>
    </div>
  );
}
