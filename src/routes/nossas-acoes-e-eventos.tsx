import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, HandHeart, Mic, type LucideIcon } from "lucide-react";
import { ContactPanel, EmptyState, PageHero, SectionTitle } from "@/components/site";
import { pageHead } from "@/lib/seo";
import actionsHero from "@/assets/nossas-acoes-hero.jpg.asset.json";
import carnararos01 from "@/assets/carnararos-2026-01.jpg.asset.json";
import carnararos02 from "@/assets/carnararos-2026-02.jpg.asset.json";
import carnararos03 from "@/assets/carnararos-2026-03.jpg.asset.json";
import carnararos04 from "@/assets/carnararos-2026-04.jpg.asset.json";
import carnararos05 from "@/assets/carnararos-2026-05.jpg.asset.json";
import carnararos06 from "@/assets/carnararos-2026-06.jpg.asset.json";
import carnararos07 from "@/assets/carnararos-2026-07.jpg.asset.json";
import carnararos08 from "@/assets/carnararos-2026-08.jpg.asset.json";
import carnararos09 from "@/assets/carnararos-2026-09.jpg.asset.json";
import carnararos10 from "@/assets/carnararos-2026-10.jpg.asset.json";
import carnararos11 from "@/assets/carnararos-2026-11.jpg.asset.json";
import carnararos12 from "@/assets/carnararos-2026-12.jpg.asset.json";

export const Route = createFileRoute("/nossas-acoes-e-eventos")({
  head: () =>
    pageHead(
      "Nossas Ações e Eventos | Instituto Francisquinho",
      "Acompanhe as ações do Instituto Francisquinho junto à comunidade: participação em eventos, palestras e ações de inclusão sobre doenças raras.",
      "/nossas-acoes-e-eventos",
    ),
  component: ActionsPage,
});

const quickNav = [
  { href: "#participacao-em-eventos", icon: CalendarDays as LucideIcon, title: "Participação em Eventos", description: "Registros de feiras, encontros e mobilizações das quais o Instituto participa." },
  { href: "#palestras", icon: Mic as LucideIcon, title: "Palestras", description: "Conteúdos apresentados para escolas, serviços de saúde e comunidades." },
  { href: "#acoes-de-inclusao", icon: HandHeart as LucideIcon, title: "Ações de Inclusão", description: "Iniciativas que promovem participação, acessibilidade e respeito à diversidade." },
] as const;

function QuickCard({ href, icon: Icon, title, description }: { href: string; icon: LucideIcon; title: string; description: string }) {
  return (
    <a
      href={href}
      className="info-card block transition-colors hover:border-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="icon-tile">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-black text-primary">{title}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
      <span className="mt-4 inline-block text-sm font-black text-accent-strong">Ver esta seção</span>
    </a>
  );
}

function ActionSection({ id, eyebrow, title, description, details, emptyTitle, emptyDescription, reverse = false }: { id: string; eyebrow: string; title: string; description: string; details: string; emptyTitle: string; emptyDescription: string; reverse?: boolean }) {
  return (
    <section id={id} className={reverse ? "bg-surface-soft" : ""}>
      <div className="site-container section-space">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">{details}</p>
        <div className="mt-8 max-w-3xl">
          <EmptyState title={emptyTitle} description={emptyDescription} />
        </div>
      </div>
    </section>
  );
}

function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Presença e transformação"
        title="Nossas ações e eventos"
        description="Apoiar famílias também é estar presente. Nesta página reunimos as iniciativas do Instituto Francisquinho junto à comunidade, com fotos, legendas e relatos de cada atividade."
        withoutArtwork
        backgroundImage={{
          src: actionsHero.url,
          alt: "Composição com quatro registros do Instituto: uma família com criança em cadeira de rodas em um desfile; um grupo com crianças, adultos e personagens caracterizados em uma mobilização de rua; um grupo de mulheres com faixa em uma ação comunitária; e uma pessoa diante do painel do Fórum Brasileiro de Doenças Raras e Negligenciadas.",
        }}
      />



      <section className="site-container section-space">
        <SectionTitle eyebrow="Navegue pelas seções" title="O que você encontrará aqui" description="Cada seção reúne um tipo de atividade. Os registros serão publicados conforme as ações acontecerem." />
        <nav aria-label="Seções desta página" className="mt-10 grid gap-5 md:grid-cols-3">
          {quickNav.map((item) => (
            <QuickCard key={item.href} {...item} />
          ))}
        </nav>
      </section>

      <ActionSection
        id="participacao-em-eventos"
        eyebrow="Estar onde o público está"
        title="Participação em Eventos"
        description="Feiras de saúde, encontros comunitários, semanas temáticas e mobilizações sociais são espaços de encontro com outras famílias."
        details="Aqui publicaremos a documentação de cada evento em que o Instituto estiver presente: fotos do estande ou da atividade, data e local, e um breve relato sobre o que foi conversado com o público e quais encaminhamentos foram possíveis."
        emptyTitle="Registros em preparação"
        emptyDescription="As fotos, as legendas e os textos sobre cada evento serão publicados nesta seção, conforme as participações forem acontecendo."
        reverse
      />

      <ActionSection
        id="palestras"
        eyebrow="Informação que chega a mais pessoas"
        title="Palestras"
        description="Palestras e rodas de conversa ajudam a levar conteúdo confiável sobre doenças raras a escolas, universidades, unidades de saúde e grupos da sociedade civil."
        details="Nesta seção apresentaremos as palestras realizadas, com o tema abordado, o público alcançado e as imagens do momento. O objetivo é mostrar como a informação circula e apoiar outras pessoas que desejem organizar atividades semelhantes."
        emptyTitle="Programação em preparação"
        emptyDescription="Os temas, os locais e os relatos das palestras realizadas serão incluídos aqui, acompanhados das fotos de cada atividade."
      />

      <ActionSection
        id="acoes-de-inclusao"
        eyebrow="Participação de todas as pessoas"
        title="Ações de Inclusão"
        description="Inclusão é garantir que todas as pessoas possam estar presentes, ser acolhidas e ter sua voz considerada."
        details="Aqui reuniremos as ações do Instituto voltadas à acessibilidade e à participação de pessoas com deficiência e suas famílias: adaptações de espaços e materiais, atividades que envolvem a comunidade e iniciativas que valorizam a diversidade."
        emptyTitle="Ações em preparação"
        emptyDescription="As fotos, as legendas e os textos sobre cada ação de inclusão serão publicados nesta seção."
        reverse
      />

      <section className="site-container pb-14">
        <p className="max-w-3xl text-xs leading-5 text-muted-foreground">
          As publicações desta página têm caráter informativo e apresentam atividades do Instituto Francisquinho. Elas não substituem avaliação ou orientação de profissionais de saúde.
        </p>
      </section>

      <ContactPanel compact />
    </>
  );
}
