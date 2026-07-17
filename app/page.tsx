"use client";

import { useEffect, useState } from "react";

const whatsapp = "https://wa.me/5594992361015";

const services = [
  { n:"01", title:"Clínica médica", text:"Avaliação individualizada, escuta atenta e protocolos orientados para o seu momento de saúde.", image:"/Instagram-07-16-2026_11_49_PM.png", cls:"consult" },
  { n:"02", title:"Massagem terapêutica", text:"Técnicas que favorecem relaxamento, mobilidade e bem-estar em um ambiente preparado para acolher.", image:"/Instagram-07-16-2026_11_47_PM.png", cls:"massage" },
  { n:"03", title:"Estética avançada", text:"Cuidados faciais e corporais personalizados, com tecnologia, planejamento e acompanhamento profissional.", image:"/Instagram-07-16-2026_11_50_PM.png", cls:"aesthetic" },
  { n:"04", title:"Depilação a laser", text:"Tecnologia aplicada com precisão e protocolos ajustados às características de cada pele.", image:"/pexels-meraki-laser.jpg", cls:"laser" },
];

const journey = [
  ["01", "Escuta", "Começamos entendendo sua necessidade, rotina e objetivo."],
  ["02", "Avaliação", "A equipe analisa o melhor caminho e esclarece cada etapa."],
  ["03", "Protocolo", "Seu atendimento é planejado de forma individual e responsável."],
  ["04", "Acompanhamento", "A evolução é observada para ajustar cuidados quando necessário."],
];

export default function Home(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>("[data-reveal]");const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});els.forEach(el=>o.observe(el));return()=>o.disconnect()},[]);
  const close=()=>setOpen(false);
  return <main>
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Meraki Clínica - início"><img src="/meraki-logo-transparent-v2.png" alt="Meraki Clínica Médica, Massagem e Estética" /></a>
      <button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="nav">{open?"Fechar":"Menu"}<i /></button>
      <nav id="nav" className={open?"open":""} aria-label="Navegação principal"><a href="#sobre" onClick={close}>A Meraki</a><a href="#especialidades" onClick={close}>Especialidades</a><a href="#experiencia" onClick={close}>Experiência</a><a href="#contato" onClick={close}>Contato</a></nav>
      <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar horário <span>↗</span></a>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-orbit orbit-one" aria-hidden="true"/><div className="hero-orbit orbit-two" aria-hidden="true"/>
      <div className="hero-copy">
        <p className="eyebrow"><i/> Medicina, cuidado & bem-estar</p>
        <h1><span>Cuidar de você</span><em>é olhar o todo.</em></h1>
        <p className="hero-lead">Saúde, massagem e estética avançada em protocolos personalizados, com acolhimento e atenção aos detalhes.</p>
        <div className="hero-actions"><a href={whatsapp} target="_blank" rel="noreferrer">Agende sua experiência <b>↗</b></a><a href="#especialidades">Conheça a Meraki <span>↓</span></a></div>
      </div>
      <div className="hero-visual"><img src="/Instagram-07-16-2026_11_51_PM.png" alt="Ambiente interno da Meraki Clínica"/><div className="visual-note"><small>Meraki significa</small><b>fazer algo<br/>com a alma.</b></div></div>
      <p className="hero-side">PARAUAPEBAS · PA — 2026</p>
    </section>

    <section className="intro section" id="sobre">
      <p className="eyebrow" data-reveal><i/> Um cuidado que começa pela escuta</p>
      <div className="intro-grid"><h2 data-reveal>Ciência para orientar.<br/><em>Presença para cuidar.</em></h2><div data-reveal><p>Na Meraki, cada pessoa é recebida de forma única. Integramos medicina, terapias manuais e estética avançada em uma experiência que valoriza resultados possíveis, conforto e confiança.</p><div className="intro-stats"><span><b>4</b> frentes de cuidado</span><span><b>1</b> protocolo feito para você</span></div></div></div>
    </section>

    <section className="services section" id="especialidades">
      <div className="section-head" data-reveal><div><p className="eyebrow"><i/> Nossas especialidades</p><h2>Cuidado em<br/><em>cada fase.</em></h2></div><p>Uma clínica completa para acompanhar saúde, corpo e autoestima com responsabilidade e sensibilidade.</p></div>
      <div className="service-grid">{services.map(s=><article className={s.cls} key={s.n} data-reveal><div className="service-image"><img src={s.image} alt="" loading="lazy"/></div><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Agendar ${s.title}`}>Saiba mais <b>↗</b></a></article>)}</div>
    </section>

    <section className="quote"><div className="quote-image" data-reveal><img src="/Instagram-07-16-2026_11_48_PM.png" alt="Corpo, mente e emoção — o cuidado completo na Meraki"/></div><div className="quote-copy" data-reveal><p className="eyebrow"><i/> Medicina com proximidade</p><blockquote>“Seu atendimento não começa no procedimento. Começa quando você se sente verdadeiramente ouvido.”</blockquote><p>Planejamento responsável, comunicação clara e cuidado individualizado em todas as etapas.</p><a href={whatsapp} target="_blank" rel="noreferrer">Falar com nossa equipe <span>↗</span></a></div></section>

    <section className="experience section" id="experiencia">
      <div className="experience-title" data-reveal><p className="eyebrow"><i/> A experiência Meraki</p><h2>Leve por fora.<br/><em>Profundo no cuidado.</em></h2></div>
      <div className="journey">{journey.map(([n,title,text])=><article key={n} data-reveal><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><b>↘</b></article>)}</div>
    </section>

    <section className="laser-feature"><div className="laser-copy section" data-reveal><p className="eyebrow"><i/> Tecnologia com delicadeza</p><h2>Precisão que respeita<br/><em>a sua pele.</em></h2><p>Depilação a laser com avaliação prévia e parâmetros definidos de acordo com as necessidades de cada pessoa.</p><a href={whatsapp} target="_blank" rel="noreferrer">Quero saber mais <b>↗</b></a></div><div className="laser-image"><img src="/pexels-meraki-laser.jpg" alt="Procedimento profissional de depilação a laser"/></div></section>

    <section className="contact section" id="contato"><div className="contact-flower" aria-hidden="true">M</div><p className="eyebrow" data-reveal><i/> Sua pausa começa aqui</p><h2 data-reveal>Vamos cuidar<br/><em>de você?</em></h2><div className="contact-row" data-reveal><p>Converse com a equipe, tire suas dúvidas e encontre o melhor atendimento para o seu momento.</p><a href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <b>↗</b></a></div><div className="contact-info"><p><small>Visite a Meraki</small>Ao lado da Farmácia Ultra Popular<br/>Av. F — Parauapebas/PA, 68515-974</p><p><small>Telefone</small>(94) 99236-1015</p><p><small>Instagram</small><a href="https://www.instagram.com/meraki_clin/" target="_blank" rel="noreferrer">@meraki_clin ↗</a></p></div></section>

    <footer><a className="brand" href="#inicio"><img src="/meraki-logo-transparent-v2.png" alt="Meraki"/></a><p>Clínica médica, massagem e estética avançada.<br/>Parauapebas — Pará.</p><div><a href="https://www.instagram.com/meraki_clin/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#inicio">Voltar ao topo ↑</a></div><small>© 2026 Meraki. Todos os direitos reservados. Imagens institucionais: Pexels.</small></footer>
  </main>
}
