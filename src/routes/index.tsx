import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpenCheck, HeartHandshake, Info, Pause, Play, Scale, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { AlertBanner, ContactDetails, InfoCard, SectionTitle, SimpleForm, commonIcons } from "@/components/site";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import heroOrientacao from "@/assets/hero-orientacao.jpg";
import heroComunidade from "@/assets/hero-comunidade.jpg";
import heroFrancisquinho from "@/assets/hero-francisquinho.jpg";
import cln2Genetica from "@/assets/cln2-genetica.jpg";

export const Route = createFileRoute("/")({
  head: () => pageHead("Instituto Francisquinho | Apoio às famílias com CLN2", "Informação, acolhimento e apoio para famílias que enfrentam CLN2 e outras doenças raras no Pará.", "/"),
  component: HomePage,
});

const helpCards = [
  [Info, "Informação", "Conheça a CLN2 e outras doenças raras em linguagem acessível."],
  [BookOpenCheck, "Orientação", "Entenda possíveis próximos passos após um diagnóstico."],
  [HeartHandshake, "Acolhimento", "Encontre uma rede de apoio, escuta e informação."],
  [Scale, "Direitos", "Acesse introduções sobre medicamentos, benefícios e documentos."],
] as const;
const careCards = [[Stethoscope,"Tratamento e acompanhamento"],[Users,"Equipe multidisciplinar"],[ShieldCheck,"Rotina e adaptações"],[HeartHandshake,"Apoio à família"]] as const;

const heroSlides = [
  { eyebrow: "Informação, acolhimento e apoio", title: "Você não precisa enfrentar uma doença rara sozinho.", description: "O Instituto Francisquinho acolhe, informa e orienta famílias que convivem com a CLN2 e outras doenças raras.", image: heroFrancisquinho, alt: "Francisquinho sorrindo em sua cadeira de rodas em um jardim acolhedor", action: "Recebi um diagnóstico", to: "/recebi-o-diagnostico" as const },
  { eyebrow: "Orientação para cada etapa", title: "Informação clara ajuda a encontrar caminhos.", description: "Reunimos conteúdos introdutórios para apoiar conversas com profissionais e organizar os próximos passos.", image: heroOrientacao, alt: "Profissional de saúde orientando uma mãe e uma criança em um caminho de descobertas", action: "Conheça os primeiros passos", to: "/recebi-o-diagnostico" as const },
  { eyebrow: "Uma rede que acolhe", title: "Juntos, ampliamos o apoio às famílias.", description: "Conheça formas de participar, colaborar e fortalecer uma comunidade dedicada às pessoas com doenças raras.", image: heroComunidade, alt: "Comunidade diversa reunida em torno de uma criança e sua família", action: "Veja como ajudar", to: "/como-ajudar" as const },
] as const;

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [playing]);
  const goTo = (index: number) => { setActive((index + heroSlides.length) % heroSlides.length); setPlaying(false); };
  const slide = heroSlides[active] ?? heroSlides[0];
  return <section className="hero-carousel" aria-roledescription="carrossel" aria-label="Destaques do Instituto">
    <div className="absolute inset-0">
      {heroSlides.map((item, index) => <img key={item.title} src={item.image} alt={index === active ? item.alt : ""} width={1600} height={1008} fetchPriority={index === 0 ? "high" : "auto"} className={`hero-slide-image ${index === active ? "is-active" : ""}`} aria-hidden={index !== active}/>) }
    </div>
    <div className="hero-scrim" aria-hidden="true" />
    <div className="site-container relative z-10 flex min-h-[34rem] items-center py-12 md:min-h-[40rem]">
      <div key={slide.title} className="max-w-2xl animate-fade-in">
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black leading-[1.08] text-primary sm:text-5xl lg:text-6xl">{slide.title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/80">{slide.description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="accent" size="lg"><Link to={slide.to}>{slide.action}<ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/quem-somos">Conheça o Instituto</Link></Button></div>
      </div>
    </div>
    <div className="site-container absolute inset-x-0 bottom-5 z-20 flex items-center justify-between gap-4">
      <div className="flex gap-2" role="tablist" aria-label="Escolher destaque">{heroSlides.map((item,index)=><button key={item.title} type="button" role="tab" aria-selected={index===active} aria-label={`Mostrar destaque ${index+1}: ${item.title}`} onClick={()=>goTo(index)} className={`carousel-dot ${index===active?"is-active":""}`}/>)}</div>
      <div className="flex gap-2"><Button type="button" variant="outline" size="icon" aria-label="Destaque anterior" onClick={()=>goTo(active-1)}><ArrowLeft /></Button><Button type="button" variant="outline" size="icon" aria-label={playing?"Pausar carrossel":"Reproduzir carrossel"} onClick={()=>setPlaying((value)=>!value)}>{playing?<Pause />:<Play />}</Button><Button type="button" variant="outline" size="icon" aria-label="Próximo destaque" onClick={()=>goTo(active+1)}><ArrowRight /></Button></div>
    </div>
  </section>;
}

function HomePage() { return <>
  <HeroCarousel />
  <div className="site-container py-10"><AlertBanner title="Recebi um diagnóstico. E agora?"><p>Encontrar informações confiáveis e saber por onde começar pode fazer diferença. Reunimos orientações iniciais para ajudar você e sua família.</p><Button asChild variant="outline" className="mt-4"><Link to="/recebi-o-diagnostico">Ver primeiros passos</Link></Button></AlertBanner></div>
  <section className="site-container section-space"><SectionTitle eyebrow="Apoio em cada etapa" title="Como podemos ajudar?"/><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{helpCards.map(([icon,title,text])=><InfoCard key={title} icon={icon} title={title}><p>{text}</p></InfoCard>)}</div></section>
  <section className="bg-primary text-primary-foreground"><div className="site-container section-space grid items-center gap-12 lg:grid-cols-[1fr_.72fr]"><div><p className="text-sm font-black uppercase text-primary-foreground/70">Conheça a CLN2</p><h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">Entender é o primeiro passo para cuidar.</h2><p className="mt-5 max-w-3xl leading-7 text-primary-foreground/80">A CLN2 é uma doença rara que pode trazer desafios importantes para a criança e sua família. Informação confiável, acompanhamento especializado e uma rede de apoio são fundamentais.</p><p className="mt-4 text-xs text-primary-foreground/70">Conteúdo informativo; não substitui avaliação ou orientação profissional.</p><Button asChild variant="accent" size="lg" className="mt-7"><Link to="/recebi-o-diagnostico">Saiba mais sobre a CLN2</Link></Button></div><div className="overflow-hidden rounded-md border border-primary-foreground/20"><img src={cln2Genetica} alt="Ilustração de uma hélice de DNA, células e conexões moleculares" width={1600} height={1008} loading="lazy" className="aspect-[4/3] w-full object-cover object-center"/></div></div></section>
  <section className="site-container section-space"><SectionTitle eyebrow="Cuidado integral" title="Cuidados e tratamento" description="O acompanhamento pode reunir diferentes frentes, sempre conforme orientação da equipe responsável."/><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{careCards.map(([icon,title])=><InfoCard key={title} icon={icon} title={title}><p>Informações introdutórias para apoiar o diálogo com profissionais de saúde.</p></InfoCard>)}</div><Button asChild variant="outline" className="mt-8"><Link to="/cuidados-e-tratamento">Conheça os cuidados e tratamentos<ArrowRight /></Link></Button></section>
  <section className="bg-surface-soft"><div className="site-container section-space grid items-center gap-12 lg:grid-cols-2"><div><SectionTitle eyebrow="Informação prática" title="Direitos e orientação" description="Encontre um ponto de partida para organizar sua busca por apoio."/><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Como buscar medicamentos","Benefícios sociais","BPC","Isenções, quando aplicáveis","Documentos e modelos de apoio"].map(x=><li key={x} className="flex items-center gap-3 font-bold text-primary"><span className="size-2 rounded-full bg-accent-strong" aria-hidden="true"/>{x}</li>)}</ul><Button asChild variant="accent" className="mt-8"><Link to="/direitos-e-orientacao">Conheça seus direitos</Link></Button></div><div className="relative overflow-hidden rounded-md"><img src={heroComunidade} alt="Rede comunitária acolhendo uma criança e sua família" width={1600} height={1008} loading="lazy" className="aspect-[4/3] w-full object-cover object-right"/><div className="absolute inset-x-0 bottom-0 bg-primary/90 p-6 text-primary-foreground"><commonIcons.Dna className="size-8"/><h2 className="mt-3 text-2xl font-black">Quem somos</h2><p className="mt-2 text-sm leading-6 text-primary-foreground/80">Acolhimento, informação e apoio às famílias.</p><Button asChild variant="inverse" className="mt-4"><Link to="/quem-somos">Conheça nossa história</Link></Button></div></div></div></section>
  <section className="site-container section-space"><SectionTitle eyebrow="Faça parte" title="Juntos, podemos ampliar o apoio às famílias."/><div className="mt-10 grid gap-5 md:grid-cols-3"><InfoCard icon={HeartHandshake} title="Faça uma doação"><p>Canais de contribuição serão divulgados após validação.</p></InfoCard><InfoCard icon={Users} title="Seja voluntário"><p>Compartilhe seu tempo e suas habilidades.</p></InfoCard><InfoCard icon={commonIcons.CalendarDays} title="Campanhas e eventos"><p>Acompanhe futuras mobilizações do Instituto.</p></InfoCard></div><Button asChild variant="accent" className="mt-8"><Link to="/como-ajudar">Veja como ajudar</Link></Button></section>
  <section className="bg-surface-soft"><div className="site-container section-space grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionTitle eyebrow="Contato" title="Fale com o Instituto Francisquinho" description="Nossa equipe está disponível nos canais abaixo para ouvir e orientar."/><div className="mt-8"><ContactDetails /></div></div><div className="border border-border bg-background p-6 md:p-8"><SimpleForm kind="contato"/></div></div></section>
</>; }