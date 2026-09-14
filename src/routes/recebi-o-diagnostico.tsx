import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, Files, MessagesSquare, BookOpenCheck, Scale, HeartHandshake } from "lucide-react";
import { AlertBanner, ContactPanel, InfoCard, PageHero, SectionTitle } from "@/components/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/recebi-o-diagnostico")({
  head: () => pageHead("Recebi o diagnóstico | Instituto Francisquinho", "Orientações iniciais e acolhimento para famílias após um diagnóstico ou suspeita de CLN2.", "/recebi-o-diagnostico"),
  component: DiagnosisPage,
});

const steps = ["Busque orientação médica especializada", "Organize exames e documentos", "Converse com a equipe de saúde sobre o acompanhamento", "Procure informações confiáveis", "Conheça seus direitos e possibilidades de apoio", "Busque uma rede de acolhimento para a família"];
const supports = [[Stethoscope,"Equipe médica","Converse sobre diagnóstico, exames e possibilidades de acompanhamento."],[HeartHandshake,"Equipe multidisciplinar","Busque orientações integradas de acordo com as necessidades e indicação clínica."],[MessagesSquare,"Instituto Francisquinho","Encontre acolhimento, informação acessível e canais de orientação."],[BookOpenCheck,"Serviços de saúde","Informe-se sobre os serviços e fluxos disponíveis em sua região."] ] as const;

function DiagnosisPage() { return <>
  <PageHero eyebrow="Primeiros passos" title="Recebi um diagnóstico. Quais são os próximos passos?" description="Sabemos que receber a notícia de uma doença rara pode trazer muitas dúvidas. Esta página reúne orientações iniciais para ajudar você a organizar informações e buscar apoio." />
  <div className="site-container py-10"><AlertBanner title="Respire. Você não precisa entender tudo de uma vez."><p>Comece por um passo de cada vez. Guarde suas dúvidas e leve-as às pessoas que acompanham sua família.</p></AlertBanner></div>
  <section className="site-container section-space pt-8"><SectionTitle eyebrow="Um caminho possível" title="Primeiros passos" description="Cada família tem uma realidade diferente. Use esta sequência como apoio para organizar o começo da jornada."/><ol className="mt-10 grid gap-4 md:grid-cols-2">{steps.map((step,i)=><li key={step} className="grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-4 border-b border-border py-5"><span className="grid size-12 place-items-center rounded-full bg-primary font-black text-primary-foreground">{i+1}</span><div><h3 className="pt-2 text-lg font-black text-primary">{step}</h3></div></li>)}</ol></section>
  <section className="bg-surface-soft"><div className="site-container section-space grid gap-10 lg:grid-cols-2"><div><SectionTitle eyebrow="Entenda com calma" title="O que é a CLN2?"/><p className="mt-5 leading-7 text-muted-foreground">A CLN2 é uma doença rara que afeta o sistema nervoso e pode provocar mudanças progressivas no desenvolvimento e nas habilidades da criança. O diagnóstico e o acompanhamento devem ser conduzidos por profissionais de saúde qualificados.</p><p className="mt-4 border-l-4 border-accent-strong pl-4 text-sm leading-6 text-muted-foreground">Este conteúdo é introdutório e não substitui avaliação, diagnóstico ou orientação médica.</p></div><div className="grid grid-cols-2 gap-4"><InfoCard icon={Files} title="Organize"><p>Reúna exames, laudos, receitas e contatos importantes.</p></InfoCard><InfoCard icon={Scale} title="Informe-se"><p>Anote dúvidas e procure fontes oficiais e responsáveis.</p></InfoCard></div></div></section>
  <section className="site-container section-space"><SectionTitle eyebrow="Rede de apoio" title="Onde buscar ajuda?"/><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{supports.map(([icon,title,text])=><InfoCard key={title} icon={icon} title={title}><p>{text}</p></InfoCard>)}</div></section>
  <ContactPanel />
</>; }