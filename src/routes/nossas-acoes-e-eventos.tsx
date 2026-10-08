import type { ReactNode } from "react";
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
import palestraCiir01 from "@/assets/palestra-ciir-01.jpg.asset.json";
import palestraCiir02 from "@/assets/palestra-ciir-02.jpg.asset.json";
import palestraCiir03 from "@/assets/palestra-ciir-03.jpg.asset.json";
import palestraCiir04 from "@/assets/palestra-ciir-04.jpg.asset.json";
import palestraCiir05 from "@/assets/palestra-ciir-05.jpg.asset.json";
import palestraCiir06 from "@/assets/palestra-ciir-06.jpg.asset.json";

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

const carnararosPhotos = [
  { src: carnararos01.url, alt: "Portão de abertura escrito “Carna Breves 2026” com o público reunido na avenida" },
  { src: carnararos02.url, alt: "Trio elétrico com a faixa do Dia Mundial das Doenças Raras durante o Carnararos" },
  { src: carnararos03.url, alt: "Família com criança em cadeira de rodas em frente ao trio elétrico no Carnararos" },
  { src: carnararos04.url, alt: "Grupo de participantes com camisetas do Carnararos em frente ao trio elétrico" },
  { src: carnararos05.url, alt: "Grupo de mulheres segurando a faixa do CSA Carnararos" },
  { src: carnararos06.url, alt: "Trio elétrico circulando na avenida durante o Carnararos" },
  { src: carnararos07.url, alt: "Público acompanhando a passagem do trio elétrico na avenida" },
  { src: carnararos08.url, alt: "Público com guarda-chuvas coloridos acompanhando o Carnararos na avenida" },
  { src: carnararos09.url, alt: "Público fantasiado, com asas de borboleta, acompanhando o desfile do Carnararos" },
  { src: carnararos10.url, alt: "Grupo de mulheres com camisetas temáticas do Carnararos na avenida" },
  { src: carnararos11.url, alt: "Grupo de participantes posando com um cartão gigante de premiação do Carnararos" },
  { src: carnararos12.url, alt: "Grupo de participantes do Carnararos reunido à noite em Breves" },
] as const;

type GalleryPhoto = { readonly src: string; readonly alt: string };

function ActivityGallery({ eyebrow, title, description, photos, srCaption }: { eyebrow: string; title: string; description: string; photos: readonly GalleryPhoto[]; srCaption: string }) {
  return (
    <article className="info-card mt-8">
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-2 text-2xl font-black leading-tight text-primary">{title}</h3>
      <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{description}</p>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <figure key={photo.src} className="mb-4 break-inside-avoid">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full rounded-md border border-border bg-surface-soft shadow-sm"
            />
          </figure>
        ))}
      </div>
      <figcaption className="sr-only">{srCaption}</figcaption>
    </article>
  );
}

const carnararosGallery = (
  <ActivityGallery
    eyebrow="Ação de inclusão"
    title="Carnararos 2026 / Breves – Marajó – Pará"
    description="Registros fotográficos da participação do Instituto Francisquinho, das famílias e da comunidade no Carnararos 2026, em Breves."
    photos={carnararosPhotos}
    srCaption="Fotos da ação Carnararos 2026, em Breves – Marajó – Pará."
  />
);

const palestraCiirPhotos = [
  { src: palestraCiir01.url, alt: "Famílias, pessoas em cadeiras de rodas e equipe reunidas no saguão do CIIR durante a palestra" },
  { src: palestraCiir02.url, alt: "Palestrante falando ao público sentado em frente ao mural colorido do CIIR" },
  { src: palestraCiir03.url, alt: "Visão ampla do saguão do CIIR com o público reunido para a palestra" },
  { src: palestraCiir04.url, alt: "Famílias assistindo à palestra no saguão do CIIR" },
  { src: palestraCiir05.url, alt: "Público reunido no saguão do CIIR, com o letreiro do Centro Integrado de Inclusão e Reabilitação ao fundo" },
  { src: palestraCiir06.url, alt: "Saguão do CIIR com pássaros de papel suspensos e o público acompanhando a palestra" },
] as const;

const palestraCiirGallery = (
  <ActivityGallery
    eyebrow="Palestra"
    title="Palestra no Centro Integrado de Inclusão e Reabilitação – CIIR / Belém – PA"
    description="Encontro com famílias e pacientes no saguão do CIIR, em Belém, para conversar sobre doenças raras, caminhos de diagnóstico e direitos das famílias."
    photos={palestraCiirPhotos}
    srCaption="Fotos da palestra no Centro Integrado de Inclusão e Reabilitação (CIIR), em Belém – PA."
  />
);

function ActionSection({ id, eyebrow, title, description, details, emptyTitle, emptyDescription, reverse = false, children }: { id: string; eyebrow: string; title: string; description: string; details: string; emptyTitle: string; emptyDescription: string; reverse?: boolean; children?: ReactNode }) {
  return (
    <section id={id} className={reverse ? "bg-surface-soft" : ""}>
      <div className="site-container section-space">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">{details}</p>
        {children ? (
          <div className="mt-8">{children}</div>
        ) : (
          <div className="mt-8 max-w-3xl">
            <EmptyState title={emptyTitle} description={emptyDescription} />
          </div>
        )}
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
        emptyTitle="Novas ações em preparação"
        emptyDescription="As fotos, as legendas e os textos das próximas ações de inclusão serão publicados nesta seção."
        reverse
      >
        <CarnararosGallery />
      </ActionSection>

      <section className="site-container pb-14">
        <p className="max-w-3xl text-xs leading-5 text-muted-foreground">
          As publicações desta página têm caráter informativo e apresentam atividades do Instituto Francisquinho. Elas não substituem avaliação ou orientação de profissionais de saúde.
        </p>
      </section>

      <ContactPanel compact />
    </>
  );
}
