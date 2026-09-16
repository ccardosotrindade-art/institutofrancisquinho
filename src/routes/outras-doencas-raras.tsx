import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpenText,
  Dna,
  ExternalLink,
  Hospital,
  Puzzle,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { AlertBanner, ContactPanel, InfoCard, PageHero, SectionTitle } from "@/components/site";
import { pageHead } from "@/lib/seo";
import doencasRarasArtwork from "@/assets/o-que-sao-doencas-raras.jpeg.asset.json";

export const Route = createFileRoute("/outras-doencas-raras")({
  head: () =>
    pageHead(
      "Outras Doenças Raras | Instituto Francisquinho",
      "O que são doenças raras, prevalência estimada no Brasil, sinais de alerta e como buscar diagnóstico e cuidado pelo SUS.",
      "/outras-doencas-raras",
    ),
  component: OtherRareDiseasesPage,
});

const groups = [
  { title: "Neurológicas e neuromusculares", desc: "Incluem condições como CLN2, atrofia muscular espinhal (AME) e esclerose lateral amiotrófica (ELA)." },
  { title: "Metabólicas e genéticas", desc: "Incluem fibrose cística, fenilcetonúria, doença de Gaucher e mucopolissacaridoses." },
  { title: "Sangue e coagulação", desc: "Incluem hemofilias e outras alterações hereditárias raras da coagulação e do sangue." },
  { title: "Imunológicas e autoimunes", desc: "Incluem imunodeficiências primárias e condições autoimunes raras, com manifestações variadas." },
];

const warningSigns = [
  "Atraso ou regressão no desenvolvimento neuropsicomotor",
  "Sintomas persistentes sem diagnóstico definido após múltiplas consultas",
  "Alterações de crescimento, tônus muscular, visão, audição ou fala",
  "História familiar de doenças raras ou óbitos precoces sem causa esclarecida",
  "Crises recorrentes (convulsões, infecções, descompensações) sem causa aparente",
];

const steps = [
  "Procure a Atenção Básica (UBS) para o encaminhamento inicial",
  "Solicite avaliação em um Serviço de Referência em Doenças Raras habilitado pelo Ministério da Saúde",
  "Reúna histórico clínico, exames e laudos para facilitar a investigação",
  "Busque orientação sobre exames de triagem e testes genéticos disponíveis no SUS",
];

function OtherRareDiseasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informação e orientação"
        title="Outras Doenças Raras"
        description="Além da CLN2, existem milhares de doenças raras. Reunimos informações de fontes oficiais para ajudar famílias a entender, reconhecer sinais e buscar diagnóstico e cuidado pelo SUS."
        artworks={[{ src: doencasRarasArtwork.url, alt: "Arte informativa sobre o que são doenças raras, seus tipos e desafios" }]}
      />

      <section className="site-container section-space">
        <SectionTitle
          eyebrow="Definição"
          title="O que são doenças raras"
          description="No Brasil, a Política Nacional de Atenção Integral às Pessoas com Doenças Raras (Portaria GM/MS nº 199/2014) segue o parâmetro da Organização Mundial da Saúde: são consideradas raras as doenças que afetam até 65 pessoas em cada 100 mil indivíduos, ou 1,3 para cada 2 mil pessoas."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
          <div className="prose-copy">
            <p>
              Estima-se que existam mais de 5.000 tipos diferentes de doenças raras, com causas genéticas,
              ambientais, infecciosas, imunológicas ou ainda desconhecidas. Cerca de 80% têm origem genética, e a
              maioria manifesta sintomas já na infância{" "}
              <a className="underline" href="https://www.gov.br/saude/pt-br/composicao/saes/doencas-raras" target="_blank" rel="noreferrer">
                (Ministério da Saúde)
              </a>
              .
            </p>
            <p>
              Embora cada condição seja individualmente rara, o conjunto de todas elas atinge uma parcela relevante
              da população: estudos citados por órgãos oficiais indicam que as doenças raras afetam de 6% a 8% da
              população mundial, o equivalente a milhões de pessoas no Brasil{" "}
              <a className="underline" href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2014/prt0199_30_01_2014_rep.html" target="_blank" rel="noreferrer">
                (BVSMS, Portaria GM/MS nº 199/2014)
              </a>
              . A Orphanet, base de referência internacional mantida com apoio de institutos de pesquisa europeus,
              cataloga e organiza informações sobre milhares dessas condições e sobre medicamentos órfãos{" "}
              <a className="underline" href="https://www.orpha.net/pt/other-information/about-rare-diseases" target="_blank" rel="noreferrer">
                (Orphanet)
              </a>
              .
            </p>
          </div>
          <AlertBanner title="Prevalência estimada">
            <p>OMS/Ministério da Saúde: até 65 pessoas em cada 100 mil, ou 1,3 em cada 2 mil.</p>
            <p className="mt-2">Conjunto de doenças raras: cerca de 6% a 8% da população.</p>
          </AlertBanner>
        </div>
      </section>

      <section className="bg-surface-soft">
        <div className="site-container section-space">
          <SectionTitle
            eyebrow="Panorama"
            title="Doenças e grupos mais conhecidos"
            description="Não há um ranking nacional único e fechado das doenças raras mais recorrentes. Os exemplos abaixo ajudam a reconhecer grupos frequentemente citados em políticas públicas e serviços especializados, sem indicar que sejam os mais frequentes em toda região."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((g) => (
              <InfoCard key={g.title} icon={Dna} title={g.title}>
                <p>{g.desc}</p>
              </InfoCard>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Cada doença rara tem características próprias. Para conhecer uma condição específica, consulte a{" "}
            <a className="underline" href="https://www.orpha.net/pt/disease" target="_blank" rel="noreferrer">
              base de doenças da Orphanet
            </a>
            .
          </p>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionTitle
          eyebrow="Atenção"
          title="Sinais de alerta"
          description="Estes sinais não confirmam uma doença rara, mas podem justificar investigação médica mais aprofundada."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {warningSigns.map((s) => (
            <li key={s} className="flex gap-3 rounded-md border border-border bg-background p-4 leading-6 text-muted-foreground">
              <ShieldCheck className="mt-0.5 shrink-0 text-accent-strong" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <AlertBanner title="Diagnóstico tardio é comum">
            <p>
              Por serem pouco conhecidas, muitas doenças raras levam anos para ser diagnosticadas. O Ministério da
              Saúde tem ampliado o acesso a exames de maior complexidade para reduzir esse tempo{" "}
              <a className="underline" href="https://www.gov.br/saude/pt-br/assuntos/noticias/2026/fevereiro/ministerio-da-saude-inclui-exame-de-alta-tecnologia-no-sus-para-doencas-raras-espera-das-familias-por-diagnostico-reduz-de-7-anos-para-seis-meses" target="_blank" rel="noreferrer">
                (Ministério da Saúde)
              </a>
              . Não interprete estes sinais como diagnóstico: procure sempre avaliação médica.
            </p>
          </AlertBanner>
        </div>
      </section>

      <section className="bg-surface-soft">
        <div className="site-container section-space">
          <SectionTitle
            eyebrow="Caminho no SUS"
            title="Como buscar diagnóstico e cuidado"
            description="A Rede de Atenção à Saúde das Pessoas com Doenças Raras é organizada em Serviços de Referência habilitados pelo Ministério da Saúde, distribuídos entre várias Unidades da Federação."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.8fr]">
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-3 font-bold text-primary">
                  <span className="text-accent-strong">0{i + 1}</span>
                  <span className="font-normal text-muted-foreground">{s}</span>
                </li>
              ))}
            </ol>
            <div className="grid gap-5">
              <InfoCard icon={Hospital} title="Serviços de Referência">
                <p>
                  A rede conta com dezenas de serviços habilitados em Diagnóstico, Atenção Especializada e Referência
                  em Doenças Raras, distribuídos por diversos estados{" "}
                  <a className="underline" href="https://www.gov.br/saude/pt-br/composicao/saes/doencas-raras/faq" target="_blank" rel="noreferrer">
                    (Ministério da Saúde – FAQ)
                  </a>
                  .
                </p>
              </InfoCard>
              <InfoCard icon={Stethoscope} title="Protocolos Clínicos e Diretrizes Terapêuticas (PCDT)">
                <p>
                  A Conitec avalia e a Conitec/Ministério da Saúde publicam PCDT que orientam diagnóstico e
                  tratamento de diversas doenças raras no SUS{" "}
                  <a className="underline" href="https://www.gov.br/conitec/pt-br/assuntos/avaliacao-de-tecnologias-em-saude/protocolos-clinicos-e-diretrizes-terapeuticas/pcdt" target="_blank" rel="noreferrer">
                    (Conitec)
                  </a>
                  .
                </p>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionTitle eyebrow="Direitos" title="Direitos das pessoas com doenças raras" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard icon={ShieldCheck} title="Política Nacional">
            <p>
              A Portaria GM/MS nº 199/2014 institui diretrizes de atenção integral às pessoas com doenças raras no
              SUS, consolidadas na Portaria de Consolidação nº 2/2017.
            </p>
          </InfoCard>
          <InfoCard icon={BookOpenText} title="Linha de Cuidado">
            <p>
              O Ministério da Saúde publicou a Linha de Cuidado para Doenças Raras, com orientações sobre
              acolhimento, triagem, diagnóstico e acompanhamento no SUS.
            </p>
          </InfoCard>
          <InfoCard icon={Puzzle} title="Benefícios e isenções">
            <p>
              Direitos como BPC, isenções e prioridade de atendimento dependem de critérios legais e avaliação
              individual. Consulte a página{" "}
              <Link className="underline" to="/direitos-e-orientacao">
                Direitos e orientação
              </Link>{" "}
              do Instituto.
            </p>
          </InfoCard>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Este conteúdo é informativo e não substitui avaliação médica. Não fazemos recomendações individuais de
          diagnóstico ou tratamento.
        </p>
      </section>

      <section className="bg-surface-soft">
        <div className="site-container section-space">
          <SectionTitle eyebrow="Fontes" title="Fontes oficiais consultadas" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ["Ministério da Saúde — Doenças Raras", "https://www.gov.br/saude/pt-br/composicao/saes/doencas-raras"],
              ["BVSMS — Portaria GM/MS nº 199/2014", "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2014/prt0199_30_01_2014_rep.html"],
              ["Ministério da Saúde — Perguntas frequentes", "https://www.gov.br/saude/pt-br/composicao/saes/doencas-raras/faq"],
              ["Ministério da Saúde — Legislação", "https://www.gov.br/saude/pt-br/composicao/saes/doencas-raras/legislacao"],
              ["Conitec — Protocolos Clínicos e Diretrizes Terapêuticas", "https://www.gov.br/conitec/pt-br/assuntos/avaliacao-de-tecnologias-em-saude/protocolos-clinicos-e-diretrizes-terapeuticas/pcdt"],
              ["Fiocruz/Ministério da Saúde — Linha de Cuidado para Doenças Raras (2022)", "https://ohs.coc.fiocruz.br/wp-content/uploads/2024/02/Linha-de-cuidados-doencas-raras-2022-Ministerio-da-Saude.pdf"],
              ["Orphanet — Sobre as doenças raras", "https://www.orpha.net/pt/other-information/about-rare-diseases"],
              ["Ministério da Saúde — Notícia sobre exame de alta tecnologia (2026)", "https://www.gov.br/saude/pt-br/assuntos/noticias/2026/fevereiro/ministerio-da-saude-inclui-exame-de-alta-tecnologia-no-sus-para-doencas-raras-espera-das-familias-por-diagnostico-reduz-de-7-anos-para-seis-meses"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md border border-border bg-background p-4 text-sm font-bold text-primary hover:bg-secondary"
                >
                  <ExternalLink className="size-4 shrink-0 text-accent-strong" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Search className="size-4 shrink-0" aria-hidden="true" />
            Conteúdo revisado com base em fontes oficiais brasileiras e internacionais reconhecidas. Última consulta:
            setembro de 2026.
          </p>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
