import { Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CircleAlert,
  Dna,
  FileClock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logoAsset from "@/assets/instituto-logo-integrado.png.asset.json";
import francisquinhoAsset from "@/assets/francisquinho.jpeg.asset.json";
import heroOrientacao from "@/assets/hero-orientacao.jpg";
import trindcardAsset from "@/assets/trindcard-web.png.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const WHATSAPP_URL =
  "https://wa.me/5591992383294?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Instituto%20Francisquinho%20e%20receber%20orienta%C3%A7%C3%A3o.";
export const EMAIL_URL = "mailto:institutofrancisquinho@gmail.com";
export { francisquinhoAsset };

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Recebi o Diagnóstico", to: "/recebi-o-diagnostico" as const },
  { label: "Outras Doenças Raras", to: "/outras-doencas-raras" as const },
  { label: "Direitos e Orientação", to: "/direitos-e-orientacao" as const },
  { label: "Quem Somos", to: "/quem-somos" as const },
  { label: "Como Ajudar", to: "/como-ajudar" as const },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 shadow-sm backdrop-blur">
      <div className="site-container flex min-h-20 items-center justify-between gap-4 py-2">
        <Link to="/" aria-label="Instituto Francisquinho — página inicial" className="logo-lockup w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <img src={logoAsset.url} alt="Instituto Francisquinho" className="h-14 w-auto object-contain mix-blend-multiply md:h-16" />
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden md:inline-flex"><Link to="/recebi-o-diagnostico">Preciso de orientação</Link></Button>
          <Button asChild variant="accent"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle /><span className="hidden sm:inline">Fale conosco</span></a></Button>
        </div>
      </div>
      <nav aria-label="Navegação principal" className="border-t border-border/70 bg-surface-soft/80">
        <ul className="site-container flex items-stretch overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <li key={item.to} className="shrink-0">
              <Link
                to={item.to}
                preload="intent"
                activeOptions={{ exact: item.to === "/" }}
                className="inline-flex min-h-11 items-center rounded-md px-3 text-xs font-black text-muted-foreground transition-colors hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:px-4 md:text-sm"
                activeProps={{ className: "bg-background text-primary shadow-sm" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const groups = [
    { title: "Instituto", links: [{ label: "Sobre o Instituto", to: "/quem-somos" as const }, { label: "Nossa missão", to: "/quem-somos" as const }, { label: "Equipe gestora", to: "/quem-somos" as const }, { label: "Transparência", to: "/quem-somos" as const }] },
    { title: "Informação e orientação", links: [{ label: "Diagnóstico, cuidados e tratamento", to: "/recebi-o-diagnostico" as const }, { label: "Outras doenças raras", to: "/outras-doencas-raras" as const }, { label: "Direitos e orientação", to: "/direitos-e-orientacao" as const }] },
    { title: "Como ajudar", links: [{ label: "Doações", to: "/como-ajudar" as const }, { label: "Voluntariado", to: "/como-ajudar" as const }, { label: "Campanhas e eventos", to: "/como-ajudar" as const }] },
  ];
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="site-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <div className="logo-lockup inline-flex p-3">
              <img src={logoAsset.url} alt="Instituto Francisquinho" className="h-20 w-auto object-contain mix-blend-multiply" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/80">Associação Norte de CLN2 e Outras Doenças Raras. Informação e acolhimento para famílias.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-black uppercase">{group.title}</h2>
                <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                  {group.links.map((link) => <li key={link.label}><Link to={link.to} className="hover:text-primary-foreground hover:underline">{link.label}</Link></li>)}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="text-sm font-black uppercase">Contato</h2>
              <address className="mt-4 space-y-3 text-sm not-italic text-primary-foreground/80">
                <p>Rua Vereador Altino Amorim, 2613, Breves – Marajó – Pará</p>
                <p><a href="tel:+5591992383294" className="hover:underline">(91) 99238-3294</a></p>
                <p className="break-all"><a href={EMAIL_URL} className="hover:underline">institutofrancisquinho@gmail.com</a></p>
              </address>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 pb-14 text-xs leading-5 text-primary-foreground/70 sm:pb-0">
          <p>Este site oferece conteúdo informativo e não substitui avaliação ou orientação de profissionais de saúde.</p>
          <p className="mt-3">© 2026 Instituto Francisquinho. Todos os direitos reservados. Política de privacidade em preparação.</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-xs text-primary-foreground/90">Este site foi desenvolvido por TrindCard Web.</span>
            <a href="https://www.trindcardweb.online/" target="_blank" rel="noreferrer" aria-label="TrindCard Web" className="inline-block rounded bg-white/10 p-1.5 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
              <img src={trindcardAsset.url} alt="TrindCard Web" className="h-8 w-auto object-contain" loading="lazy" />
            </a>
            <a href="https://www.trindcardweb.online/" target="_blank" rel="noreferrer" className="text-xs font-black text-primary-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">Conheça nossos serviços</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type HeroArtwork = { src: string; alt: string };

export function PageHero({ eyebrow, title, description, artworks, withoutArtwork = false }: { eyebrow: string; title: string; description: string; artworks?: readonly HeroArtwork[]; withoutArtwork?: boolean }) {
  const images = artworks?.length ? artworks : [{ src: heroOrientacao, alt: "" }];
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % images.length), 7000);
    return () => window.clearInterval(timer);
  }, [images.length]);
  const current = images[active] ?? images[0] ?? { src: heroOrientacao, alt: "" };
  return (
    <section className="page-hero">
      <div className={`site-container grid min-h-[25rem] items-center gap-8 py-12 md:py-16 ${withoutArtwork ? "" : "md:grid-cols-[1.05fr_.95fr]"}`}>
        <div className="relative z-10 animate-fade-in">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-primary md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
        </div>
        {!withoutArtwork && <div className="hero-artwork-carousel relative z-10" aria-roledescription={images.length > 1 ? "carrossel" : undefined} aria-label={images.length > 1 ? "Artes informativas" : undefined}>
          <img src={current.src} alt={current.alt} className="h-full w-full object-contain" />
          {images.length > 1 && <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-3">
            <Button type="button" variant="outline" size="icon" aria-label="Arte anterior" onClick={() => setActive((active - 1 + images.length) % images.length)}><ChevronLeft /></Button>
            <div className="flex gap-2 rounded-full bg-background/90 px-3 py-2" aria-label={`Arte ${active + 1} de ${images.length}`}>
              {images.map((image, index) => <button key={image.src} type="button" aria-label={`Mostrar arte ${index + 1}`} aria-current={index === active} onClick={() => setActive(index)} className={`carousel-dot ${index === active ? "is-active" : ""}`} />)}
            </div>
            <Button type="button" variant="outline" size="icon" aria-label="Próxima arte" onClick={() => setActive((active + 1) % images.length)}><ChevronRight /></Button>
          </div>}
        </div>}
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="max-w-3xl">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="mt-2 text-3xl font-black leading-tight text-primary md:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>}</div>;
}

export function InfoCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return <article className="info-card"><div className="icon-tile"><Icon aria-hidden="true" /></div><h3 className="mt-5 text-xl font-black text-primary">{title}</h3><div className="mt-3 leading-7 text-muted-foreground">{children}</div></article>;
}

export function AlertBanner({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="border-l-4 border-accent-strong bg-secondary px-5 py-6 md:px-8"><div className="flex gap-4"><CircleAlert className="mt-1 size-6 shrink-0 text-accent-strong" aria-hidden="true" /><div><h2 className="text-xl font-black text-primary">{title}</h2><div className="mt-2 leading-7 text-muted-foreground">{children}</div></div></div></aside>;
}

export function EmptyState({ title = "Conteúdo em preparação", description = "Estamos preparando este conteúdo. Em breve, disponibilizaremos mais informações." }: { title?: string; description?: string }) {
  return <div className="border border-dashed border-border bg-background p-8 text-center"><FileClock className="mx-auto size-8 text-accent-strong" aria-hidden="true" /><h3 className="mt-4 font-black text-primary">{title}</h3><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p></div>;
}

export function ContactPanel({ compact = false }: { compact?: boolean }) {
  return <section className="bg-primary text-primary-foreground"><div className={`site-container grid items-center gap-8 ${compact ? "py-10 md:grid-cols-[1fr_auto]" : "py-14 md:grid-cols-2"}`}><div><p className="text-sm font-black uppercase text-primary-foreground/70">Estamos aqui para ouvir</p><h2 className="mt-2 text-3xl font-black">Converse com o Instituto</h2><p className="mt-4 max-w-xl leading-7 text-primary-foreground/80">Entre em contato para buscar orientação e conhecer os caminhos de apoio disponíveis.</p></div><div className="grid gap-3 sm:grid-cols-2"><Button asChild variant="accent" size="lg"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle />Falar pelo WhatsApp</a></Button><Button asChild variant="inverse" size="lg"><a href={EMAIL_URL}><Mail />Enviar e-mail</a></Button></div></div></section>;
}

export function ContactDetails() {
  return <div className="grid gap-4"><div className="contact-row"><MapPin /><span>Rua Vereador Altino Amorim, 2613, Breves – Marajó – Pará</span></div><div className="contact-row"><Phone /><a href="tel:+5591992383294">(91) 99238-3294</a></div><div className="contact-row"><Mail /><a href={EMAIL_URL} className="break-all">institutofrancisquinho@gmail.com</a></div></div>;
}

export function SimpleForm({ kind }: { kind: "contato" | "voluntariado" }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.checkValidity()) setSent(true); };
  if (sent) return <div role="status" className="border-l-4 border-accent-strong bg-secondary p-6"><h3 className="font-black text-primary">Mensagem preparada</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Obrigado pelo contato. Para concluir agora, fale conosco pelo WhatsApp ou envie um e-mail.</p><div className="mt-4 flex flex-wrap gap-3"><Button asChild variant="accent"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Abrir WhatsApp</a></Button><Button type="button" variant="outline" onClick={() => setSent(false)}>Enviar outra mensagem</Button></div></div>;
  return <form onSubmit={submit} className="grid gap-5" aria-label={kind === "contato" ? "Formulário de contato" : "Formulário de voluntariado"}>
    <div className="grid gap-5 sm:grid-cols-2"><Field id={`${kind}-nome`} label="Nome"><Input id={`${kind}-nome`} name="nome" minLength={2} maxLength={100} required autoComplete="name" /></Field><Field id={`${kind}-email`} label="E-mail"><Input id={`${kind}-email`} name="email" type="email" maxLength={255} required autoComplete="email" /></Field></div>
    <Field id={`${kind}-telefone`} label="Telefone"><Input id={`${kind}-telefone`} name="telefone" type="tel" minLength={8} maxLength={20} required autoComplete="tel" /></Field>
    {kind === "voluntariado" && <Field id="voluntariado-area" label="Área de interesse"><Input id="voluntariado-area" name="area" minLength={2} maxLength={100} required placeholder="Como você gostaria de colaborar?" /></Field>}
    <Field id={`${kind}-mensagem`} label="Mensagem"><Textarea id={`${kind}-mensagem`} name="mensagem" minLength={10} maxLength={1000} required rows={5} /></Field>
    <p className="text-xs leading-5 text-muted-foreground">Usaremos estas informações apenas para responder ao seu contato. Não envie dados médicos sensíveis pelo formulário.</p>
    <Button type="submit" variant="accent" className="w-fit">Enviar mensagem<ArrowRight /></Button>
  </form>;
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) { return <div className="grid gap-2"><Label htmlFor={id}>{label}</Label>{children}</div>; }

export const commonIcons = { Dna, HeartHandshake, ShieldCheck, Users, CalendarDays };