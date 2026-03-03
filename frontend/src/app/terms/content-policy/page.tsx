import Link from 'next/link';

export default function TermsContentPolicyPage() {
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
            <Link href="/terms/sales" style={{ color: 'var(--text-secondary)', fontWeight: 700, textDecoration: 'none' }}>Termos de Venda</Link>
            <span style={{ opacity: 0.35 }}>•</span>
            <Link href="/terms/content-policy" style={{ color: 'var(--accent-primary)', fontWeight: 800, textDecoration: 'none' }}>Política de Conteúdo</Link>
          </div>
        </div>

        <div className="glass-card" style={{ padding: 28 }}>
          <h1 style={{ fontSize: 30, fontWeight: 900, marginBottom: 10 }}>
            Política de Conteúdo — <span className="gradient-text">GouPay</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
            Esta Política define o que pode ou não ser vendido/anunciado na GouPay. Ela se aplica a páginas de venda, descrições, imagens, arquivos, promessas e qualquer material vinculado a um checkout.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 0 }}>
            Última atualização: 03/03/2026
          </p>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>1. Conteúdo permitido</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>Produtos e serviços lícitos, com descrição clara e entrega compatível com o que foi ofertado.</div>
            <div>Conteúdos digitais, comunidades, cursos e consultorias, desde que respeitem direitos autorais e regras de consumo.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>2. Conteúdo proibido</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>Atividades ilegais, facilitação de crimes, fraude, pirâmides, golpes e esquemas de enriquecimento rápido.</div>
            <div>Venda ou distribuição de material pirata, violação de direitos autorais, marcas e propriedade intelectual de terceiros.</div>
            <div>Conteúdo que promova ódio, discriminação, violência, assédio, exploração ou ameaças.</div>
            <div>Itens/serviços restritos por lei sem as devidas autorizações e comprovações aplicáveis.</div>
            <div>Coleta indevida de dados pessoais, phishing, malware, engenharia social, ou qualquer forma de abuso tecnológico.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>3. Promessas e transparência</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>O Vendedor deve evitar promessas absolutas e garantir que anúncios sejam verificáveis e coerentes com o Produto.</div>
            <div>É obrigatório informar claramente prazos, regras de acesso, o que está incluso, limitações e políticas de suporte.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>4. Moderação e medidas</h2>
          <div style={{ display: 'grid', gap: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            <div>Podemos revisar ofertas e materiais a qualquer momento, inclusive de forma preventiva, para reduzir risco e manter a segurança.</div>
            <div>Em caso de violação, podemos remover páginas, suspender checkouts, limitar recursos e/ou encerrar contas, conforme a gravidade.</div>
            <div>Também podemos reter temporariamente repasses quando necessário para apuração, disputas, chargebacks ou exigências legais.</div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="glass-card" style={{ padding: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>5. Denúncias</h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            Para denunciar um conteúdo, utilize os canais de atendimento informados no rodapé do site e descreva o máximo possível (link do checkout, motivo e evidências).
          </div>
        </div>
      </div>
    </div>
  );
}

