'use client';

import Link from 'next/link';
import { HiOutlineShieldCheck, HiOutlineCreditCard, HiOutlineCurrencyDollar, HiOutlineChartBar, HiOutlineLightningBolt, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FiArrowRight, FiZap, FiLock, FiTrendingUp } from 'react-icons/fi';

export default function LandingPage() {
  return (
    <div id="inicio" className="force-light" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 'max(14px, env(safe-area-inset-top))',
        left: 0,
        right: 0,
        zIndex: 50
      }}>
        <div className="landingHeaderContainer" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              padding: '10px 16px',
              borderRadius: 999,
              border: '1px solid rgba(108,92,231,0.14)',
              background: 'rgba(255,255,255,0.82)',
              backdropFilter: 'blur(18px)',
              boxShadow: '0 14px 44px rgba(17, 24, 39, 0.10)'
            }} className="landingHeaderBar">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }} className="landingLogo">
                <img src="/logo.png" alt="GouPay Logo" style={{ width: 44, height: 44, objectFit: 'contain', flexShrink: 0 }} />
                <span style={{ fontSize: 18, fontWeight: 800 }} className="landingLogoText">Gou<span className="gradient-text">Pay</span></span>
              </div>

              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="landingHeaderCenter">
                <nav style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '8px 12px',
                  borderRadius: 999,
                  border: '1px solid rgba(108,92,231,0.14)',
                  background: 'rgba(255,255,255,0.70)'
                }} className="landingNav">
                  {[
                    { href: '#inicio', label: 'Início' },
                    { href: '#features', label: 'Recursos' },
                    { href: '#loja', label: 'Loja' },
                    { href: '#footer', label: 'Sobre nós' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: 13,
                        fontWeight: 800,
                        padding: '6px 10px',
                        borderRadius: 999
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }} className="landingActions">
                <Link
                  href="/login"
                  style={{
                    textDecoration: 'none',
                    fontSize: 13,
                    fontWeight: 900,
                    padding: '10px 14px',
                    borderRadius: 999,
                    border: '1px solid var(--border-color)',
                    background: 'rgba(255,255,255,0.65)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Login
                </Link>
                <Link href="/register" className="btn-primary" style={{ padding: '10px 16px', fontSize: 13, borderRadius: 999 }}>
                  Cadastrar-se
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: 'var(--bg-primary)' }} className="landingHero">
        <img
          src="https://i.imgur.com/o1Nu0ym.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (img.dataset.fallback === '1') return;
            img.dataset.fallback = '1';
            img.src = 'https://i.imgur.com/o1Nu0ym.jpg';
          }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            objectPosition: 'center',
            display: 'block'
          }}
          className="landingHeroImg"
        />
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Tudo que você precisa para <span className="gradient-text">vender online</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Ferramentas profissionais para gerenciar seu negócio digital
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {[
            { icon: <FiLock size={24} />, title: 'Checkout Seguro', desc: 'Página de pagamento profissional com Pix e cartão de crédito. SSL e antifraude integrados.' },
            { icon: <HiOutlineLightningBolt size={24} />, title: 'Entrega Automática', desc: 'Pagamento aprovado? Liberação e entrega do conteúdo acontecem automaticamente.' },
            { icon: <FiZap size={24} />, title: 'Pix Instantâneo', desc: 'Receba via Pix em segundos. QR Code gerado automaticamente para cada pagamento.' },
            { icon: <HiOutlineChartBar size={24} />, title: 'Dashboard Completo', desc: 'Acompanhe vendas, saldo, saques e métricas em tempo real com gráficos interativos.' },
            { icon: <HiOutlineCurrencyDollar size={24} />, title: 'Saques via Pix', desc: 'Solicite saques a qualquer momento. O valor é transferido diretamente para sua conta.' },
            { icon: <HiOutlineShieldCheck size={24} />, title: 'Segurança Total', desc: 'Controle de chargeback, logs de transações e proteção contra fraude integrados.' },
          ].map((feature, i) => (
            <div key={i} className="glass-card animate-fade-in" style={{ padding: 32, animationDelay: `${i * 0.1}s` }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'rgba(108,92,231,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-secondary)', marginBottom: 20
              }}>{feature.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Storefront */}
      <section id="loja" style={{ padding: '20px 24px 80px', maxWidth: 1200, margin: '0 auto' }} className="landingStorefrontSection">
        <div className="glass-card landingStorefrontCard" style={{
          padding: 48,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at top left, rgba(108,92,231,0.18) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(0,206,201,0.10) 0%, transparent 55%)',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center', position: 'relative' }} className="landingStorefrontGrid">
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 14px',
                borderRadius: 999,
                background: 'rgba(0,206,201,0.10)',
                border: '1px solid rgba(0,206,201,0.18)',
                color: '#00cec9',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.4,
                marginBottom: 18
              }}>
                <HiOutlineGlobeAlt size={16} />
                Loja + Hospedagem integrada
              </div>

              <h2 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.15, letterSpacing: -1.2, marginBottom: 14 }} className="landingStorefrontTitle">
                Crie um <span className="gradient-text">site de vendas</span> completo e entregue tudo no mesmo lugar
              </h2>

              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 620, marginBottom: 26 }} className="landingStorefrontDesc">
                Dentro do nosso gateway, você monta sua loja, organiza seus produtos e hospeda conteúdos e entregáveis.
                Do checkout ao acesso do cliente: tudo automatizado, com uma experiência premium.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 28 }} className="landingStorefrontItems">
                {[
                  { icon: <HiOutlineLightningBolt size={18} />, title: 'Loja pronta em minutos', desc: 'Slug, categorias, banner e vitrine com seu estilo.' },
                  { icon: <HiOutlineCreditCard size={18} />, title: 'Checkout integrado', desc: 'Pix e cartão com split automático e confirmação em tempo real.' },
                  { icon: <HiOutlineShieldCheck size={18} />, title: 'Entrega e acesso', desc: 'Conteúdos e entregáveis organizados para o cliente acessar.' },
                  { icon: <HiOutlineChartBar size={18} />, title: 'Gestão centralizada', desc: 'Produtos, pedidos e métricas no painel do vendedor.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: 12,
                    padding: 16,
                    borderRadius: 16,
                    border: '1px solid var(--border-color)',
                    background: 'rgba(255,255,255,0.75)'
                  }}>
                    <div style={{
                      width: 34,
                      height: 34,
                      borderRadius: 12,
                      background: 'rgba(108,92,231,0.14)',
                      color: 'var(--accent-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, color: 'var(--text-primary)' }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }} className="landingStorefrontActions">
                <Link href="/register" className="btn-primary" style={{ padding: '14px 28px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Criar minha loja agora <FiArrowRight size={16} />
                </Link>
                <Link href="#features" className="btn-secondary" style={{ padding: '14px 28px', fontSize: 14 }}>
                  Ver recursos do gateway
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }} className="landingStorefrontPreview">
              <div style={{
                borderRadius: 22,
                border: '1px solid var(--border-color)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(243,244,246,0.92) 100%)',
                overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(17, 24, 39, 0.14)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  borderBottom: '1px solid var(--border-color)',
                  background: 'rgba(255,255,255,0.75)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(255,107,107,0.9)' }} />
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(255,214,102,0.9)' }} />
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(46,213,115,0.9)' }} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)' }}>Vitrine da Loja</div>
                </div>

                <div style={{
                  padding: 14,
                  background: 'radial-gradient(ellipse at top, rgba(108,92,231,0.20) 0%, transparent 55%)'
                }}>
                  <img
                    src="https://i.imgur.com/1AMnOpH.png"
                    alt="Prévia da vitrine da loja"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.dataset.fallback === '1') return;
                      img.dataset.fallback = '1';
                      img.src = 'https://i.imgur.com/1AMnOpH.jpg';
                    }}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: 18,
                      border: '1px solid var(--border-color)'
                    }}
                  />

                  <img
                    src="https://i.imgur.com/ChaVv9x.png"
                    alt="Prévia adicional da vitrine"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.dataset.fallback === '1') return;
                      img.dataset.fallback = '1';
                      img.src = 'https://i.imgur.com/ChaVv9x.jpg';
                    }}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      marginTop: 12,
                      borderRadius: 18,
                      border: '1px solid var(--border-color)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="glass-card" style={{
          maxWidth: 700, margin: '0 auto', padding: '60px 40px',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: -80, right: -80,
            width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,92,231,0.2) 0%, transparent 70%)',
          }} />
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, position: 'relative' }}>
            Pronto para <span className="gradient-text">começar a vender</span>?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 32, fontSize: 16 }}>
            Crie sua conta em menos de 2 minutos. Sem taxa de adesão.
          </p>
          <Link href="/register" className="btn-primary" style={{ padding: '16px 40px', fontSize: 16, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Criar Conta Grátis <FiArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" style={{
        borderTop: '1px solid var(--border-color)', padding: '40px 24px',
        textAlign: 'center', color: 'var(--text-muted)', fontSize: 13
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
          <img src="/logo.png" alt="GouPay Logo" style={{ width: 48, height: 48, objectFit: 'contain', flexShrink: 0 }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-secondary)' }}>GouPay</span>
        </div>
        © {new Date().getFullYear()} GouPay. Todos os direitos reservados.
      </footer>
    </div>
  );
}
