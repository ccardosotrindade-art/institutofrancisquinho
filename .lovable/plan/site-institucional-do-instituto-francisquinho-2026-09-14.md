# Site institucional do Instituto Francisquinho

## Objetivo
Criar um site multipágina acolhedor, confiável e responsivo, orientado a famílias que convivem com CLN2 e outras doenças raras, usando integralmente a identidade azul-marinho, vermelha e branca do logotipo fornecido.

## Estrutura e navegação
- Criar cabeçalho responsivo com logotipo, menu móvel, “Preciso de orientação” e “Fale conosco”.
- Criar páginas separadas para Home, Recebi o Diagnóstico, Cuidados e Tratamento, Direitos e Orientação, Quem Somos e Como Ajudar.
- Criar rodapé institucional com navegação, contato, aviso médico e links preparados para privacidade.
- Manter página 404 personalizada e coerente com a marca.

## Conteúdo e experiência
- Organizar a Home com acolhimento inicial, primeiros passos, formas de apoio, CLN2, cuidados, direitos, apresentação institucional, apoio e contato.
- Usar a foto do Francisquinho em pontos humanos e acolhedores, sem distorções.
- Criar linha do tempo, cartões informativos, alertas, estados “Em breve” e avisos de conteúdo informativo.
- Não inventar nomes, números, resultados, protocolos médicos, documentos, campanhas ou links de doação.

## Funcionalidades
- Ativar navegação entre todas as páginas e menu móvel acessível.
- Configurar WhatsApp com mensagem pré-preenchida e e-mail institucional.
- Criar formulário de contato e voluntariado com validação no navegador e mensagens claras, sem envio persistente nesta etapa.
- Criar FAQ expansível acessível onde fizer sentido.

## Design e acessibilidade
- Definir tokens em azul institucional `#0D2B55`, vermelho `#E31B23`, branco, off-white e cinzas derivados, convertidos para o sistema de cores do projeto.
- Usar tipografia sans-serif legível, títulos fortes, cantos discretos, ícones lineares e referências geométricas sutis a DNA/conexão.
- Garantir contraste, foco visível, navegação por teclado, labels, textos alternativos, alvos de toque e movimento reduzido.
- Preparar favicon quadrado a partir do logotipo e usar a marca no cabeçalho e rodapé.

## SEO e validação
- Adicionar título, descrição, Open Graph, Twitter card e URL canônica próprios em cada página.
- Revisar em desktop e celular: conteúdo, quebras, menu, formulários, links de contato, acessibilidade e consistência visual.

## Detalhes técnicos
- Implementar em React, TypeScript, Tailwind CSS v4 e TanStack Router.
- Criar componentes reutilizáveis para layout, títulos, cartões, alertas, contato, linha do tempo, documentos, doações e estados vazios.
- Hospedar as imagens fornecidas no fluxo de ativos do projeto; manter somente o favicon rasterizado em `public/`.
- Estruturar conteúdo em dados locais fáceis de substituir por CMS futuramente.
