import Link from 'next/link';

export default function TermsSalesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '40px 24px 70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 26 }}>
          <Link href="/" className="btn-secondary" style={{ padding: '10px 14px', textDecoration: 'none' }}>
            Voltar para o site
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/terms/use" style={{ color: 'var(--text-secondary)', fontWeight: 700, textDecoration: 'none' }}>Termos de Uso</Link>
            <span style={{ opacity: 0.35 }}>•</span>
            <Link href="/terms/purchase" style={{ color: 'var(--text-secondary)', fontWeight: 700, textDecoration: 'none' }}>Termos de Compra</Link>
            <span style={{ opacity: 0.35 }}>•</span>
            <Link href="/terms/sales" style={{ color: 'var(--accent-primary)', fontWeight: 800, textDecoration: 'none' }}>Termos de Venda</Link>
            <span style={{ opacity: 0.35 }}>•</span>
            <Link href="/terms/content-policy" style={{ color: 'var(--text-secondary)', fontWeight: 700, textDecoration: 'none' }}>Política de Conteúdo</Link>
          </div>
        </div>

        <div className="glass-card" style={{ padding: 28 }}>
          <h1 style={{ fontSize: 30, fontWeight: 900, marginBottom: 10 }}>
            Termos de Venda — <span className="gradient-text">GouPay</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
            Este documento descreve condições para Vendedores que utilizam a GouPay para criar checkouts e vender produtos.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 0 }}>
            Última atualização: 03/03/2026
          </p>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>1. Cadastro e conformidade</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>O Vendedor deve fornecer informações corretas e manter dados atualizados, incluindo dados de recebimento quando aplicável.</div>
            <div>A GouPay pode realizar verificações de identidade, validações e análises de risco para prevenção a fraudes e cumprimento de obrigações legais.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>2. Produtos e oferta</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>O Vendedor é o responsável pelo conteúdo, qualidade, preço, promessa e entrega do Produto.</div>
            <div>O anúncio e o checkout devem conter informações claras sobre o que está sendo vendido, prazos, regras de acesso, suporte e reembolsos.</div>
            <div>É obrigatório cumprir a <Link href="/terms/content-policy" style={{ color: 'var(--accent-primary)', fontWeight: 800, textDecoration: 'none' }}>Política de Conteúdo</Link>.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>3. Pagamentos, taxas e repasses</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>As taxas e prazos de repasse podem variar conforme método de pagamento, risco transacional e políticas operacionais.</div>
            <div>O Vendedor deve considerar possíveis estornos/contestações e manter boa comunicação com Compradores.</div>
            <div>Transações podem ser bloqueadas temporariamente para validações, investigações de fraude ou exigências legais.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>4. Condutas proibidas</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>É proibido vender produtos ilegais, enganosos, com promessa falsa, ou que violem direitos de terceiros.</div>
            <div>É proibido induzir o Comprador a erro, ocultar informações relevantes, coletar dados sem base legal ou realizar spam.</div>
            <div>Fraudes, auto-compra com finalidade indevida e manipulação de transações podem resultar em suspensão e bloqueio de saldo conforme necessário.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>5. Suporte e comunicação</h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            O Vendedor deve manter canal de suporte para Compradores e responder solicitações dentro de prazo razoável. A GouPay pode solicitar informações sobre entregas, reembolsos e disputas quando necessário.
          </div>
        </div>
      </div>
    </div>
  );
}

