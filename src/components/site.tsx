import { Link } from "@tanstack/react-router";
import { useState, type FormEvent, type LucideIcon } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  CircleAlert,
  Dna,
  FileClock,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import logoAsset from "@/assets/instituto-logo.jpeg.asset.json";
import francisquinhoAsset from "@/assets/francisquinho.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const WHATSAPP_URL =
  "https://wa.me/5591992383294?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Instituto%20Francisquinho%20e%20receber%20orienta%C3%A7%C3%A3o.";
export const EMAIL_URL = "mailto:institutofrancisquinho@gmail.com";
export { francisquinhoAsset };

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Recebi o Diagnóstico", to: "/recebi-o-diagnostico" as const },
  { label: "Cuidados e Tratamento", to: "/cuidados-e-tratamento" as const },
  { label: "Direitos e Orientação", to: "/direitos-e-orientacao" as const },
  { label: "Quem Somos", to: "/quem-somos" as const },
  { label: "Como Ajudar", to: "/como-ajudar" as const },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="site-container grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 xl:min-h-24 xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link to="/" aria-label="Instituto Francisquinho — página inicial" className="w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <img src={logoAsset.url} alt="Instituto Francisquinho" className="h-14 w-auto object-contain xl:h-16" />
        </Link>
        <nav aria-label="Navegação principal" className="hidden justify-center xl:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  preload="intent"
                  activeOptions={{ exact: item.to === "/" }}
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeProps={{ className: "bg-secondary text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <Button asChild variant="outline"><Link to="/recebi-o-diagnostico">Preciso de orientação</Link></Button>
          <Button asChild variant="accent"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale conosco</a></Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="outline" size="icon" aria-label="Abrir menu"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(88vw,24rem)]">
            <SheetHeader className="pr-8 text-left">
              <SheetTitle>Instituto Francisquinho</SheetTitle>
              <SheetDescription>Informação, acolhimento e apoio.</SheetDescription>
            </SheetHeader>
            <nav aria-label="Navegação móvel" className="mt-8">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <SheetClose asChild>
                      <Link to={item.to} className="flex min-h-12 items-center justify-between rounded-md px-3 font-bold text-primary hover:bg-secondary">
                        {item.label}<ChevronRight aria-hidden="true" className="size-4" />
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3">
                <SheetClose asChild><Button asChild variant="outline"><Link to="/recebi-o-diagnostico">Preciso de orientação</Link></Button></SheetClose>
                <Button asChild variant="accent"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale conosco</a></Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const groups = [
    { title: "Instituto", links: [["Sobre o Instituto", "/quem-somos"], ["Nossa missão", "/quem-somos"], ["Equipe gestora", "/quem-somos"], ["Transparência", "/quem-somos"]] },
    { title: "Informação e orientação", links: [["Recebi o diagnóstico", "/recebi-o-diagnostico"], ["Cuidados e tratamento", "/cuidados-e-tratamento"], ["Direitos e orientação", "/direitos-e-orientacao"]] },
    { title: "Como ajudar", links: [["Doações", "/como-ajudar"], ["Voluntariado", "/como-ajudar"], ["Campanhas e eventos", "/como-ajudar"]] },
  ];
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="site-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <div className="inline-flex rounded-md bg-background p-3">
              <img src={logoAsset.url} alt="Instituto Francisquinho" className="h-20 w-auto object-contain" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/80">Associação Norte de CLN2 e Outras Doenças Raras. Informação e acolhimento para famílias.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-black uppercase">{group.title}</h2>
                <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                  {group.links.map(([label, to]) => <li key={label}><Link to={to} className="hover:text-primary-foreground hover:underline">{label}</Link></li>)}
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
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-xs leading-5 text-primary-foreground/70">
          <p>Este site oferece conteúdo informativo e não substitui avaliação ou orientação de profissionais de saúde.</p>
          <p className="mt-3">© 2026 Instituto Francisquinho. Todos os direitos reservados. Política de privacidade em preparação.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero">
      <div className="site-container py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-primary md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="max-w-3xl">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="mt-2 text-3xl font-black leading-tight text-primary md:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>}</div>;
}

export function InfoCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return <article className="info-card"><div className="icon-tile"><Icon aria-hidden="true" /></div><h3 className="mt-5 text-xl font-black text-primary">{title}</h3><div className="mt-3 leading-7 text-muted-foreground">{children}</div></article>;
}

export function AlertBanner({ title, children }: { title: string; children: React.ReactNode }) {
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

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) { return <div className="grid gap-2"><Label htmlFor={id}>{label}</Label>{children}</div>; }

export const commonIcons = { Dna, HeartHandshake, ShieldCheck, Users, CalendarDays };