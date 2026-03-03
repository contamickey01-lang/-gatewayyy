import Link from 'next/link';

export default function TermsUsePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '40px 24px 70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 26 }}>
          <Link href="/" className="btn-secondary" style={{ padding: '10px 14px', textDecoration: 'none' }}>
            Voltar para o site
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/terms/use" style={{ color: 'var(--accent-primary)', fontWeight: 800, textDecoration: 'none' }}>Termos de Uso</Link>
            <span style={{ opacity: 0.35 }}>•</span>
            <Link href="/terms/purchase" style={{ color: 'var(--text-secondary)', fontWeight: 700, textDecoration: 'none' }}>Termos de Compra</Link>
            <span style={{ opacity: 0.35 }}>•</span>
            <Link href="/terms/sales" style={{ color: 'var(--text-secondary)', fontWeight: 700, textDecoration: 'none' }}>Termos de Venda</Link>
            <span style={{ opacity: 0.35 }}>•</span>
            <Link href="/terms/content-policy" style={{ color: 'var(--text-secondary)', fontWeight: 700, textDecoration: 'none' }}>Política de Conteúdo</Link>
          </div>
        </div>

        <div className="glass-card" style={{ padding: 28 }}>
          <h1 style={{ fontSize: 30, fontWeight: 900, marginBottom: 10 }}>
            Termos e Condições de Uso — <span className="gradient-text">GouPay</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
            Estes Termos regulam o acesso e uso da plataforma GouPay, incluindo painel do vendedor, recursos de loja e checkout, APIs e funcionalidades relacionadas.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 0 }}>
            Última atualização: 03/03/2026
          </p>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>1. Definições</h2>
          <div style={{ display: 'grid', gap: 10, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div><span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>Plataforma</span>: sistemas, site e recursos operados sob a marca GouPay.</div>
            <div><span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>Usuário</span>: qualquer pessoa que navegue, crie conta, compre ou venda usando a Plataforma.</div>
            <div><span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>Vendedor</span>: Usuário que cadastra produtos e utiliza o checkout para realizar vendas.</div>
            <div><span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>Comprador</span>: Usuário que realiza uma compra por meio de um checkout gerado na Plataforma.</div>
            <div><span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>Produto</span>: item (digital ou não) anunciado e disponibilizado pelo Vendedor.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>2. Elegibilidade e Conta</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>Você declara que tem capacidade legal para aceitar estes Termos e usar a Plataforma.</div>
            <div>Ao criar uma conta, você é responsável pela veracidade das informações fornecidas e por manter credenciais sob sigilo.</div>
            <div>Podemos solicitar validações adicionais (ex.: identidade, dados bancários e comprovações) para segurança, prevenção a fraudes e conformidade.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>3. Uso da Plataforma</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>Você deve usar a Plataforma de forma lícita e em conformidade com estes Termos e com a <Link href="/terms/content-policy" style={{ color: 'var(--accent-primary)', fontWeight: 800, textDecoration: 'none' }}>Política de Conteúdo</Link>.</div>
            <div>É proibido tentar burlar medidas de segurança, realizar engenharia reversa, automatizar abusivamente acessos ou praticar qualquer ato que degrade a estabilidade do serviço.</div>
            <div>Podemos ajustar, suspender, remover ou limitar funcionalidades quando necessário para manter a segurança e a integridade do ecossistema.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>4. Vendas, Compras e Entrega</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>Ao comprar um Produto, o Comprador celebra uma relação comercial vinculada à oferta apresentada pelo Vendedor, incluindo condições de entrega, suporte e políticas específicas do Produto.</div>
            <div>O Vendedor é responsável pelas informações do Produto, pela entrega do que foi ofertado e pelo suporte ao Comprador, salvo quando houver disposição diferente informada de forma expressa no checkout.</div>
            <div>Regras de pagamento e prazos variam conforme o método de pagamento e processamentos necessários. Detalhes estão nos <Link href="/terms/purchase" style={{ color: 'var(--accent-primary)', fontWeight: 800, textDecoration: 'none' }}>Termos de Compra</Link> e <Link href="/terms/sales" style={{ color: 'var(--accent-primary)', fontWeight: 800, textDecoration: 'none' }}>Termos de Venda</Link>.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>5. Tarifas e Pagamentos</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>As tarifas aplicáveis são apresentadas na Plataforma e podem variar conforme método de pagamento, risco transacional, tipo de produto e regras operacionais.</div>
            <div>Podemos atualizar tarifas e políticas de cobrança, sempre buscando comunicar de forma clara no painel e/ou por meios razoáveis.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>6. Suspensão e Encerramento</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>Podemos suspender ou encerrar contas quando houver indícios de fraude, violação destes Termos, riscos a terceiros, exigências legais ou operacionais.</div>
            <div>O Usuário pode solicitar encerramento da conta, observadas obrigações pendentes (por exemplo, transações em andamento, disputas e obrigações fiscais/contábeis).</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>7. Privacidade e Dados</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>Tratamos dados pessoais e registros de transações para operar a Plataforma, prevenir fraudes, cumprir obrigações legais e melhorar a experiência.</div>
            <div>Ao utilizar o checkout, o Comprador fornece dados necessários para processar o pagamento e para viabilizar a entrega do Produto.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>8. Contato</h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            Para falar com a GouPay, use o canal informado no rodapé do site ou pelo atendimento dentro da Plataforma.
          </div>
        </div>
      </div>
    </div>
  );
}

